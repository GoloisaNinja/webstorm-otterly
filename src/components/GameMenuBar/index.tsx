import React, {useState} from 'react';
import { withTheme } from "styled-components";
import GameMenuItem from "../GameMenuItem";
import {MdOutlineVideogameAsset} from "react-icons/md";
import {MenuWrapper, Points} from "./styles";

interface Theme {};
interface MenuProps {
    id: string;
    title: string;
    points: number;
    //inventoryItems: string[];
    functions: Map<string, Function>;
    theme: Theme;
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const [gameTitle] = useState<string[]>([props.title]);
    const [fileReset] = useState<string[]>(["theme","reset"]);

    return (
        <MenuWrapper id={props.id} >
            <MdOutlineVideogameAsset />
            <GameMenuItem menuText={"Game"} isClickable={false} items={gameTitle} functions={props.functions} />
            <GameMenuItem menuText={"File"} isClickable={true} items={fileReset} functions={props.functions} />
            <GameMenuItem menuText={"Inventory"} isClickable={false} items={["test"]} functions={props.functions} />
            <Points>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default withTheme(GameMenuBar);