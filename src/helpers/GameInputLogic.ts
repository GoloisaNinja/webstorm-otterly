import {
    addPlayType,
    addToInventory, AfterActionState, CommandOption,
    PlayType,
    setDied,
    setErrorMessage,
    setMood,
    setNode,
    setPoints,
    setStoryArc
} from "../features/games/gamesSlice";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import {INode, IGame} from "../interfaces/Node";
import GameReset from "./GameReset";
import AfterActionLogic from "./AfterActionLogic";
import {InputCheck} from "./InputCheck";
import {ScrollTextNodeToTop} from "./ScrollTextNodeToTop";

interface GameInputLogicProps {
    userInput: string;
    setUserInput: Function;
    game: IGame;
    node: INode;
    validCO: CommandOption[];
    dispatch: Dispatch<AnyAction>;
    setShow: Function;
    errorMessage: string;
    afterAction: AfterActionState;
    points: number
}

const GameInputLogic = ({ userInput, setUserInput, game, node, validCO, dispatch, setShow, errorMessage, afterAction, points }: GameInputLogicProps) => {
    let inputOutcome = InputCheck({ userInput, node, validCO });
    if (!inputOutcome.goodInput) {
        dispatch(setErrorMessage("command not recognized..."))
        return;
    }
    if (inputOutcome.selectedOption !== null) {
        let selectedOption = inputOutcome.selectedOption
        if (selectedOption.AfterAction !== undefined) {
            AfterActionLogic({game, afterAction, points, dispatch, setUserInput})
            return
        }
        if (selectedOption.NextNode === 1) {
            GameReset({dispatch, setUserInput})
            return
        }
        if (selectedOption.StoryArc !== undefined) {
            dispatch(setStoryArc(selectedOption.StoryArc))
        }
        if (selectedOption.PlayType !== undefined) {
            dispatch(addPlayType(selectedOption.PlayType as keyof PlayType))
        }
        if (selectedOption.DeathNode !== undefined) {
            dispatch(setDied())
        }
        if (selectedOption.Inventory.length) {
            dispatch(addToInventory(selectedOption.Inventory))
            setShow(true);
        }
        if (selectedOption.Mood.length) {
            dispatch(setMood(selectedOption.Mood));
        }
        dispatch(setNode(selectedOption.NextNode));
    } else {
        dispatch(setNode(inputOutcome.optionIsNullNextNode!))
    }
    if (errorMessage !== `null`) {
        dispatch(setErrorMessage(`null`))
    }
    dispatch(setPoints())
    setUserInput("")
    ScrollTextNodeToTop()
}
export default GameInputLogic