import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext, ThemeProvider } from "styled-components";
import {gameDark, gameLight} from "../../styles/theme";
import { useParams } from 'react-router-dom';
import GameLibrary from '../../gameLibrary';
import {IGame, INode} from '../../interfaces/Node';
import GameNotFound from "../../components/GameNotFound";
import GameLoadScreen from "../../components/GameLoadScreen";
import GameNodeText from '../../components/GameNodeText';
import GameNodeInput from "../../components/GameNodeInput";
import GameMenuBar from "../../components/GameMenuBar";
import Spinner from "../../components/Spinner";
import { PageWrapper } from '../../components/PageWrapper';
import {
	ScrollMarker,
	LoadingTextWrapper,
	NodeTextWrapper,
	ErrorTerminal,
	GameScreenWrapper,
} from './styles';
import GameOptions from "../../components/GameOptions";

const GameTemplate: React.FC = () => {
	const defaultErrorMessage: string = '<null>';
	const theme = useContext(ThemeContext);
	const params = useParams();
	const gameId = parseInt(params.id!);
	const [gameLoading, setGameLoading] = useState(true);
	const [game, setGame] = useState<IGame>();
	const [currentGameTheme, setCurrentGameTheme] = useState<any>();
	const [currentNode, setCurrentNode] = useState<INode>();
	const [userInput, setUserInput] = useState('');
	const [mood, setMood] = useState('unknown');
	const [inventory, setInventory] = useState(["empty"]);
	const [nodeText, setNodeText] = useState("");
	const [points, setPoints] = useState(0);
	const [options, setOptions] = useState<string[]>([]);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

	function toggleTheme(): void {
		let currentTheme = localStorage.getItem("game-theme")!;
		if (currentTheme === "game-light") {
			setCurrentGameTheme(gameDark);
			localStorage.setItem("game-theme", "game-dark")
		} else {
			setCurrentGameTheme(gameLight)
			localStorage.setItem("game-theme", "game-light")
		}
	}

	function assessValidOptions(node: INode) {
		if (node.ID === 1) {
			let newNodeOptions: string[] = node.NodeOptions.map((option) => option.Text);
			setOptions(newNodeOptions);
		} else {
			let newNodeOptions: string[] = node.NodeOptions.map((option) => option.Text);
			setOptions(newNodeOptions);
		}
	}

	function resetGame(): void {
		if (game!.ID !== -99) {
			const startingNode: INode = game!.getNodeById(1);
			setCurrentNode(startingNode);
			assessValidOptions(startingNode);
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
				let firstNode: INode = game.getNodeById(1);
				setCurrentNode(firstNode);
				assessValidOptions(firstNode);
				let themeToUse = gameDark;
				if (localStorage.getItem("game-theme") !== null) {
					let gameTheme = localStorage.getItem("game-theme");
					if (gameTheme === "game-light") {
						themeToUse = gameLight;
					}
				} else {
					localStorage.setItem("game-theme", "game-dark");
				}
				setCurrentGameTheme(() => themeToUse);
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

	// type for getNextNode function
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
				assessValidOptions(node);
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

	function checkMenuDropDowns(): void {
		const dropdowns = document.querySelectorAll(".content-dropdown")!
		for (let i = 0; i < dropdowns.length; i++) {
			if (dropdowns[i].classList.contains("show")) {
				dropdowns[i].classList.toggle("show");
			}
		}
	}

	// menuItemMap for toggleMenuShow function to determine what other menus
	// should be check for show props
	let menuItemMap = new Map<string, string[]>([
		["Game-drop-content", ["File-drop-content", "Inventory-drop-content"]],
		["File-drop-content",["Game-drop-content", "Inventory-drop-content"]],
		["Inventory-drop-content",["Game-drop-content", "File-drop-content"]]
	]);

	function toggleMenuShow(id: string): void {
		const clickedElement = document.getElementById(id)!;
		const menuItemElements = menuItemMap.get(id)!;
		for (let elId of menuItemElements) {
			let el = document.getElementById(elId)!;
			if (el.classList.contains("show")) {
				el.classList.toggle("show");
			}
		}
		clickedElement.classList.toggle("show");
	}
	const menuFunctionMap: Map<string, Function> = new Map([
		["theme", toggleTheme],
		["reset", resetGame],
		["toggle", toggleMenuShow]
	])
	return currentNode === undefined ?
		(<PageWrapper padding={"1rem"}>
			<Spinner show={true} color={theme.console_green}/>
		</PageWrapper>) : currentNode.ID === -99 || game!.ID === -99 ?
			(<PageWrapper padding={"1rem"}>
				<GameNotFound />
			</PageWrapper>) : gameLoading ?
			(<PageWrapper padding={'1rem'}>
				<ThemeProvider theme={currentGameTheme}>
				<LoadingTextWrapper>
					<GameLoadScreen gameLoading={gameLoading}
									gameTitle={game!.Title}
									handleGameLoading={handleGameLoading}
					/>
				</LoadingTextWrapper>
				</ThemeProvider>
			</PageWrapper>) :
			(<PageWrapper padding={'1rem'}>
				<ThemeProvider theme={currentGameTheme}>
				<ScrollMarker id="scrollMarker"></ScrollMarker>
				<GameScreenWrapper>
					<GameMenuBar id="menu-bar"
								 title={game!.Title}
								 points={points}
								 inventoryItems={inventory}
								 functions={menuFunctionMap}
					/>
					<NodeTextWrapper onClick={() => checkMenuDropDowns()}>
						<GameNodeText nodeText={nodeText} status={mood}/>
						<GameOptions options={options} />
						<GameNodeInput handleInputChange={handleInputChange}
									   handleUserInput={handleUserInput}
									   userInput={userInput}
						/>
						<ErrorTerminal>Error@Console ~ % {errorMessage}</ErrorTerminal>
					</NodeTextWrapper>
				</GameScreenWrapper>
				</ThemeProvider>
			</PageWrapper>);
};

export default GameTemplate;
