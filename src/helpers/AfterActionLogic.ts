import {AfterActionState, setMood, setNodeToAfterActionReport} from "../features/games/gamesSlice";
import {IGame} from "../interfaces/Node";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import {BuildAfterActionINode} from "./AfterActionINode";
import {ScrollTextNodeToTop} from "./ScrollTextNodeToTop";

interface AfterActionLogicProps {
    game: IGame;
    afterAction: AfterActionState;
    points: number;
    dispatch: Dispatch<AnyAction>
    setUserInput: Function
}
const AfterActionLogic = ({ game, afterAction, points, dispatch, setUserInput }: AfterActionLogicProps) => {
    const aaINode = BuildAfterActionINode({game, afterAction, points});
    dispatch(setMood("GAME OVER..."))
    dispatch(setNodeToAfterActionReport(aaINode))
    setUserInput("")
    ScrollTextNodeToTop()
}
export default AfterActionLogic