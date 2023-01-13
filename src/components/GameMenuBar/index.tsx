import React, {useContext} from 'react';
import { ThemeContext} from "styled-components";
import GameMenuItem from "../GameMenuItem";
import {MdOutlineVideogameAsset} from "react-icons/md";
import {MenuWrapper, MenuButton, Points} from "./styles";

interface MenuProps {
    points: number,
    resetGame(): void
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <MenuWrapper>
            <MdOutlineVideogameAsset />
            <GameMenuItem menuText={"File"} isClickable={true} items={["reset"]} resetGame={props.resetGame} />
            <MenuButton color={theme.console_green}>Inventory</MenuButton>
            <Points color={theme.console_green}>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default GameMenuBar;