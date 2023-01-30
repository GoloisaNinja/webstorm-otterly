import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {gamesSelector} from "../../features/games/gamesSlice";
import { withTheme } from "styled-components";
import GameMenuItem from "../GameMenuItem";
import {MdOutlineVideogameAsset} from "react-icons/md";
import {MenuWrapper, Points} from "./styles";

interface MenuProps {
    id: string;
    title: string;
    points: number;
    functions: Map<string, Function>;
    theme: {};
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const [gameTitle] = useState<string[]>([props.title]);
    const [fileReset] = useState<string[]>(["theme","reset"]);
    const {inventory} = useSelector(gamesSelector);
    return (
        <MenuWrapper id={props.id} >
            <MdOutlineVideogameAsset />
            <GameMenuItem menuText={"Game"} isClickable={false} items={gameTitle} functions={props.functions} />
            <GameMenuItem menuText={"File"} isClickable={true} items={fileReset} functions={props.functions} />
            <GameMenuItem menuText={"Inventory"} isClickable={false} items={inventory} functions={props.functions} />
            <Points>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default withTheme(GameMenuBar);