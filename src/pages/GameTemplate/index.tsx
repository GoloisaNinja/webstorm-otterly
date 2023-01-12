import React, {useState, useEffect, ReactElement, useContext, useCallback} from 'react';
import { ThemeContext} from "styled-components";
import { useParams } from 'react-router-dom';
import GameLibrary from '../../gameLibrary';
import { INode, IOptions } from '../../interfaces/Node';
import GameNodeText from '../../components/GameNodeText';
import GameNodeInput from "../../components/GameNodeInput";
import GameMenuBar from "../../components/GameMenuBar";
import { PageWrapper } from '../../components/PageWrapper';
import {
	ScrollMarker,
	NodeTextWrapper,
	Title,
	NodeOptions,
	ErrorTerminal,
} from './styles';

const GameTemplate: React.FC = () => {
	const defaultErrorMessage: string = '<null>';
	const theme = useContext(ThemeContext);
	const params = useParams();
	const gameId = parseInt(params.id!);
	const [game, setGame] = useState(GameLibrary.getGameById(gameId));
	const [currentNode, setCurrentNode] = useState<INode>();
	const [userInput, setUserInput] = useState('');
	const [mood, setMood] = useState('unknown');
	const [nodeText, setNodeText] = useState("");
	const [points, setPoints] = useState(0);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

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

	function updateMood(status: string | null, nodeIndex: number): void {
		const newMood = status === null || nodeIndex === 1 ? "unknown" : status;
		setMood(newMood);
	}

	function getNextNode(): INode | undefined {
		let nextNode: number | undefined;
		let node: INode;
		let mood: string | undefined | null;
		const optionIndex: number | undefined = currentNode?.NodeOptions.findIndex((option) => option.Command === userInput.toLowerCase().trim());
		if (optionIndex !== -1 && optionIndex !== undefined) {
			nextNode = currentNode?.NodeOptions[optionIndex].NextNode;
			mood = currentNode?.NodeOptions[optionIndex].Mood;
		}
		if (nextNode !== undefined) {
			// first make a call to update mood based on some of the above info
			if (mood !== undefined) {
				updateMood(mood, nextNode);
			}
			// then we can get the node and return it
			node = game.getNodeById(nextNode);
			return node;
		}
		return undefined;
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
			const node: INode | undefined = getNextNode();
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
			return <NodeOptions color={theme.console_green} key={option.ID}>{option.Text}</NodeOptions>;
		}
		return null;
	}

	return currentNode !== undefined && currentNode.ID !== -99 ? (
		<PageWrapper padding={'1rem'}>
			<Title>{game.Title}</Title>
			<ScrollMarker id="scrollMarker"></ScrollMarker>
				<NodeTextWrapper>
					<GameMenuBar points={points}/>
					<GameNodeText nodeText={nodeText} status={mood}/>
					<div id='optionWrapper'>
						{currentNode.NodeOptions.map((option) => {
							return verifyMoodAndInventory(option);
						})}
					</div>
					<GameNodeInput handleInputChange={handleInputChange} handleUserInput={handleUserInput} userInput={userInput} />
					<ErrorTerminal color={theme.console_error}>Error@Console ~ % {errorMessage}</ErrorTerminal>
				</NodeTextWrapper>
		</PageWrapper>
	) : (
		<h2>there was a problem loading...</h2>
	);
};

export default GameTemplate;
