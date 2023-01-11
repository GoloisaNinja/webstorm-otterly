import React, { useState, useEffect, useRef, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import GameLibrary from '../../gameLibrary';
import { INode, IOptions } from '../../interfaces/Node';
import { PageWrapper } from '../../components/PageWrapper';
import {
	GameGridWrapper,
	MoodWrapper,
	InventoryWrapper,
	NodeTextWrapper,
	PointsWrapper,
	Title,
	NodeOptions,
	InputWrapper,
	TerminalSpan,
	StyledInput,
	ErrorTerminal,
} from './styles';

const GameTemplate: React.FC = () => {
	const defaultErrorMessage: string = '<null>';
	const params = useParams();
	const gameId = parseInt(params.id!);
	const [game, setGame] = useState(GameLibrary.getGameById(gameId));
	const [currentNode, setCurrentNode] = useState<INode>();
	const [userInput, setUserInput] = useState('');
	const [mood, setMood] = useState('');
	const [points, setPoints] = useState(0);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
	const nodeText: React.RefObject<HTMLParagraphElement> = useRef(null);
	const moodText: React.RefObject<HTMLParagraphElement> = useRef(null);

	useEffect(() => {
		function startGame(): void {
			if (game !== undefined) {
				setCurrentNode(game.getNodeById(1));
			}
		}
		startGame();
	}, [game]);

	useEffect(() => {
		if (nodeText.current !== null && currentNode !== undefined) {
			nodeText.current.innerHTML = currentNode.Text;
		}
	}, [currentNode]);

	function handleUserInput(): void {
		try {
			const optionIndex = currentNode?.NodeOptions.findIndex(
				(option) => option.Command === userInput.toLowerCase().trim()
			);
			if (optionIndex !== -1 && optionIndex !== undefined) {
				const nextNode = currentNode?.NodeOptions[optionIndex].NextNode;
				const mood = currentNode?.NodeOptions[optionIndex].Mood;
				if (nextNode !== undefined) {
					const node: INode = game.getNodeById(nextNode);
					if (
						moodText.current !== null &&
						mood !== null &&
						mood !== undefined
					) {
						moodText.current.innerHTML = mood;
						setMood(mood);
					}
					if (errorMessage !== '') {
						setErrorMessage(defaultErrorMessage);
					}
					const newScore = points + node.EarnedPoints;
					setPoints(newScore);
					if (nextNode === 1) {
						setPoints(0);
					}
					setCurrentNode(node);
					setUserInput('');
				}
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
			return <NodeOptions key={option.ID}>{option.Text}</NodeOptions>;
		}
		return null;
	}

	return currentNode !== undefined && currentNode.ID !== -99 ? (
		<PageWrapper padding={'1rem'}>
			<Title>{game.Title}</Title>
			<GameGridWrapper>
				<PointsWrapper>
					<h2>Points:</h2>
					<p>{points}</p>
				</PointsWrapper>
				<MoodWrapper>
					<h2>Current Mood:</h2>
					<p ref={moodText}></p>
				</MoodWrapper>
				<InventoryWrapper>
					<h2>Inventory:</h2>
				</InventoryWrapper>
				<NodeTextWrapper>
					<p ref={nodeText}></p>
					<div id='optionWrapper'>
						{currentNode.NodeOptions.map((option) => {
							return verifyMoodAndInventory(option);
						})}
					</div>
					<InputWrapper>
						<TerminalSpan>{`enter command: `}</TerminalSpan>
						<StyledInput
							autoFocus
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							onKeyDown={(e) =>
								e.key === 'Enter' && handleUserInput()
							}></StyledInput>
					</InputWrapper>
					<ErrorTerminal>Error@Console ~ % {errorMessage}</ErrorTerminal>
				</NodeTextWrapper>
			</GameGridWrapper>
		</PageWrapper>
	) : (
		<h2>there was a problem loading...</h2>
	);
};

export default GameTemplate;
