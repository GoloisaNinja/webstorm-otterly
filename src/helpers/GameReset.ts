import {resetGame, setNode} from "../features/games/gamesSlice";
import {ScrollTextNodeToTop} from "./ScrollTextNodeToTop";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

interface GameResetProps {
    setUserInput: Function;
    dispatch: Dispatch<AnyAction>;
}

const GameReset = ({ dispatch, setUserInput }: GameResetProps): void => {
    dispatch(resetGame())
    dispatch(setNode(1))
    setUserInput("")
    ScrollTextNodeToTop()
}
export default GameReset