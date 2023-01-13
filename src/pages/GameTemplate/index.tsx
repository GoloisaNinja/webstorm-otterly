import React, {useState, useEffect, ReactElement, useContext, useCallback} from 'react';
import { ThemeContext} from "styled-components";
import { useParams } from 'react-router-dom';
import GameLibrary from '../../gameLibrary';
import { INode, IOptions } from '../../interfaces/Node';
import GameLoadScreen from "../../components/GameLoadScreen";
import GameNodeText from '../../components/GameNodeText';
import GameNodeInput from "../../components/GameNodeInput";
import GameMenuBar from "../../components/GameMenuBar";
import { PageWrapper } from '../../components/PageWrapper';
import { TypewriterStylePTag} from "../../components/TypewriterStyledPTag";
import {
	ScrollMarker,
	NodeTextWrapper,
	Title,
	ErrorTerminal,
	GameScreenWrapper,
} from './styles';

const GameTemplate: React.FC = () => {
	const defaultErrorMessage: string = '<null>';
	const theme = useContext(ThemeContext);
	const params = useParams();
	const gameId = parseInt(params.id!);
	const [gameLoading, setGameLoading] = useState(true);
	const [game, setGame] = useState(GameLibrary.getGameById(gameId));
	const [currentNode, setCurrentNode] = useState<INode>();
	const [userInput, setUserInput] = useState('');
	const [mood, setMood] = useState('unknown');
	const [nodeText, setNodeText] = useState("");
	const [points, setPoints] = useState(0);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

	function resetGame(): void {
		const startingNode: INode = game.getNodeById(1);
		setCurrentNode(startingNode);
		updateMood(1, 0);
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
	const setGamePoints = useCallback((pointsToAdd: number, id: number) => {
		if (id === 1) {
			setPoints(0);
			return;
		}
		setPoints((curr) => curr + pointsToAdd);
	},[])

	useEffect(() => {
		function startGame(): void {
			if (game !== undefined) {
				setCurrentNode(game.getNodeById(1));
			}
		}
		startGame();
	}, [game]);

	useEffect(() => {
		if (currentNode !== undefined) {
			setGameText(currentNode.Text);
			setGamePoints(currentNode.EarnedPoints, currentNode.ID)
		}
	}, [currentNode, setGamePoints]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setUserInput(e.target.value);
	}

	function updateMood(nodeIndex: number, optionIndex: number): void {
		let mood: string | undefined | null;
		mood = currentNode?.NodeOptions[optionIndex].Mood;
		if (mood !== undefined) {
			const newMood = mood === null || nodeIndex === 1 ? "unknown" : mood;
			setMood(newMood);
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
		if (nextNode !== undefined) {
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
				updateMood(nextNode, optionIndex);
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
	return currentNode === undefined || currentNode.ID === -99 ?
		(<h2>game not found...</h2>) : gameLoading ?
			(<PageWrapper padding={'1rem'}>
				<Title>{game.Title}</Title>
				<NodeTextWrapper>
					<GameLoadScreen gameLoading={gameLoading} gameTitle={game.Title} handleGameLoading={handleGameLoading} />
				</NodeTextWrapper>
			</PageWrapper>) :
			(<PageWrapper padding={'1rem'}>
				<Title>{game.Title}</Title>
				<ScrollMarker id="scrollMarker"></ScrollMarker>
				<GameScreenWrapper>
					<GameMenuBar points={points} resetGame={resetGame}/>
					<NodeTextWrapper>
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
	// return currentNode !== undefined && currentNode.ID !== -99 ? (
	// 	<PageWrapper padding={'1rem'}>
	// 		<Title>{game.Title}</Title>
	// 		<ScrollMarker id="scrollMarker"></ScrollMarker>
	// 			<NodeTextWrapper>
	// 				<GameMenuBar points={points}/>
	// 				<GameNodeText nodeText={nodeText} status={mood}/>
	// 				<div id='optionWrapper'>
	// 					{currentNode.NodeOptions.map((option) => {
	// 						return verifyMoodAndInventory(option);
	// 					})}
	// 				</div>
	// 				<GameNodeInput handleInputChange={handleInputChange} handleUserInput={handleUserInput} userInput={userInput} />
	// 				<ErrorTerminal color={theme.console_error}>Error@Console ~ % {errorMessage}</ErrorTerminal>
	// 			</NodeTextWrapper>
	// 	</PageWrapper>
	// ) : (
	// 	<h2>there was a problem loading...</h2>
	// );
};

export default GameTemplate;
