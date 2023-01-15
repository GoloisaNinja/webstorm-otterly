import React, {useState, useEffect, ReactElement, useContext} from 'react';
import { ThemeContext} from "styled-components";
import { useParams } from 'react-router-dom';
import GameLibrary from '../../gameLibrary';
import {IGame, INode, IOptions} from '../../interfaces/Node';
import GameNotFound from "../../components/GameNotFound";
import GameLoadScreen from "../../components/GameLoadScreen";
import GameNodeText from '../../components/GameNodeText';
import GameNodeInput from "../../components/GameNodeInput";
import GameMenuBar from "../../components/GameMenuBar";
import Spinner from "../../components/Spinner";
import { PageWrapper } from '../../components/PageWrapper';
import { TypewriterStylePTag} from "../../components/TypewriterStyledPTag";
import {
	ScrollMarker,
	NodeTextWrapper,
	ErrorTerminal,
	GameScreenWrapper,
} from './styles';

const GameTemplate: React.FC = () => {
	const defaultErrorMessage: string = '<null>';
	const theme = useContext(ThemeContext);
	const params = useParams();
	const gameId = parseInt(params.id!);
	const [gameLoading, setGameLoading] = useState(true);
	const [game, setGame] = useState<IGame>();
	const [currentNode, setCurrentNode] = useState<INode>();
	const [userInput, setUserInput] = useState('');
	const [mood, setMood] = useState('unknown');
	const [inventory, setInventory] = useState(["empty"]);
	const [nodeText, setNodeText] = useState("");
	const [points, setPoints] = useState(0);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

	function resetGame(): void {
		if (game!.ID !== -99) {
			const startingNode: INode = game!.getNodeById(1);
			setCurrentNode(startingNode);
			updatePoints(1);
			updateMood(1, 0);
			updateInventory(1,0)
		}
	}
	function handleGameLoading(): void {
		setGameLoading(false);
		setTimeout(() => {
			window.scrollTo({top: 0, left: 0, behavior: "smooth"});
		}, 500)
	}
	function setGameText(text: string): void {
		setNodeText(text);
	}

	useEffect(() => {
		const game = GameLibrary.getGameById(gameId);
		if (game.ID !== -99) {
			setGame(game);
		}
		function startGame(): void {
			if (game !== undefined) {
				setCurrentNode(game.getNodeById(1));
			}
		}
		startGame();
	}, [gameId]);

	useEffect(() => {
		if (currentNode !== undefined) {
			setGameText(currentNode.Text);
		}
	}, [currentNode]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setUserInput(e.target.value);
	}

	function updatePoints(nodeIndex: number): void {
		if (nodeIndex === 1) {
			setPoints(0)
			return;
		}
		let pointsToAdd = game?.getNodeById(nodeIndex).EarnedPoints;
		if (pointsToAdd !== undefined) {
			let newScore = points + pointsToAdd;
			setPoints(newScore);
		}
	}

	function updateMood(nodeIndex: number, optionIndex: number): void {
		let mood: string | undefined | null;
		mood = currentNode?.NodeOptions[optionIndex].Mood;
		if (mood !== undefined) {
			const newMood = mood === null || nodeIndex === 1 ? "unknown" : mood;
			setMood(newMood);
		}
	}

	function updateInventory(nodeIndex: number, optionIndex: number): void {
		if (nodeIndex === 1) {
			setInventory(() => ["empty"]);
			return;
		}
		let newInventory: string = currentNode?.NodeOptions[optionIndex].Inventory!;
		if (newInventory.length > 0) {
			if (inventory.includes("empty")) {
				setInventory(() => [newInventory])
			} else {
				setInventory((inventory) => [...inventory, newInventory]);
			}
		}
	}

	// Interface for getNodeReturn
	type NodeReturnObject = {
		node: INode | undefined,
		optionIndex: number | undefined,
		nextNode: number | undefined,
	}

	function getNextNode(): NodeReturnObject {
		let nextNode: number | undefined;
		let node: INode;

		const optionIndex: number | undefined = currentNode?.NodeOptions.findIndex((option) => option.Command === userInput.toLowerCase().trim());
		if (optionIndex !== -1 && optionIndex !== undefined) {
			nextNode = currentNode?.NodeOptions[optionIndex].NextNode;

		}
		if (nextNode !== undefined && game !== undefined) {
			// then we can get the node and return it
			node = game.getNodeById(nextNode);
			return {
				node,
				optionIndex,
				nextNode,
			};
		}
		return {
			node: undefined,
			optionIndex: undefined,
			nextNode: undefined,
		};
	}


	function resetErrorMsgToDefault(): void {
		if (errorMessage !== "") {
			setErrorMessage(defaultErrorMessage);
		}
	}

	function scrollToNodeTextStart(): void {
		const yPos = document.getElementById("scrollMarker")!.getBoundingClientRect().top;
		const yPosOffset = yPos + window.scrollY - 95;
		setTimeout(() => {
			window.scroll({left: 0, top: yPosOffset, behavior: "smooth"});
		}, 325)

	}

	function handleUserInput(): void {
		try {
			const { node, optionIndex, nextNode }: NodeReturnObject = getNextNode();
			if (optionIndex !== undefined && nextNode !== undefined) {
				updatePoints(nextNode);
				updateMood(nextNode, optionIndex);
				updateInventory(nextNode, optionIndex);
			}
			if (node !== undefined) {
				setCurrentNode(node);
				setUserInput("");
				resetErrorMsgToDefault();
				scrollToNodeTextStart();
			} else {
				setErrorMessage('Sorry but that is an invalid command...');
			}
		} catch (error) {
			console.log(error);
		}
	}

	function verifyMoodAndInventory(option: IOptions): ReactElement | null {
		// Mood Check
		let moodCheck = false;
		if (
			(option.Requires.Mood !== null && option.Requires.Mood === mood) ||
			option.Requires.Mood === null
		) {
			moodCheck = true;
		}
		if (moodCheck) {
			return <TypewriterStylePTag color={theme.console_green} key={option.ID}>{option.Text}</TypewriterStylePTag>;
		}
		return null;
	}
	function checkMenuDropDowns(): void {
		const dropdowns = document.querySelectorAll(".content-dropdown")!
		for (let i = 0; i < dropdowns.length; i++) {
			if (dropdowns[i].classList.contains("show")) {
				dropdowns[i].classList.toggle("show");
			}
		}
	}
	const menuFunctionMap: Map<string, Function> = new Map([
		["reset", resetGame],
	])
	return currentNode === undefined ?
		(<PageWrapper padding={"1rem"}>
			<Spinner show={true} color={theme.console_green}/>
		</PageWrapper>) : currentNode.ID === -99 || game!.ID === -99 ?
			(<PageWrapper padding={"1rem"}>
				<GameNotFound />
			</PageWrapper>) : gameLoading ?
			(<PageWrapper padding={'1rem'}>
				<NodeTextWrapper>
					<GameLoadScreen gameLoading={gameLoading} gameTitle={game!.Title} handleGameLoading={handleGameLoading} />
				</NodeTextWrapper>
			</PageWrapper>) :
			(<PageWrapper padding={'1rem'}>
				<ScrollMarker id="scrollMarker"></ScrollMarker>
				<GameScreenWrapper>
					<GameMenuBar id="menu-bar" title={game!.Title} points={points} inventoryItems={inventory} functions={menuFunctionMap}/>
					<NodeTextWrapper onClick={() => checkMenuDropDowns()}>
						<GameNodeText nodeText={nodeText} status={mood}/>
						<div id='optionWrapper'>
							{currentNode.NodeOptions.map((option) => {
								return verifyMoodAndInventory(option);
							})}
						</div>
						<GameNodeInput handleInputChange={handleInputChange} handleUserInput={handleUserInput} userInput={userInput} />
						<ErrorTerminal color={theme.console_error}>Error@Console ~ % {errorMessage}</ErrorTerminal>
					</NodeTextWrapper>
				</GameScreenWrapper>
			</PageWrapper>);
};

export default GameTemplate;
