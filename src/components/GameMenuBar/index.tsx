import React, {useContext} from 'react';
import { ThemeContext} from "styled-components";
import { FaLinux } from "react-icons/fa";
import {MenuWrapper, MenuButton, Points} from "./styles";

interface MenuProps {
    points: number,
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <MenuWrapper>
            <FaLinux color={theme.console_green}/>
            <MenuButton color={theme.console_green}>File</MenuButton>
            <MenuButton color={theme.console_green}>Inventory</MenuButton>
            <Points color={theme.console_green}>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default GameMenuBar;