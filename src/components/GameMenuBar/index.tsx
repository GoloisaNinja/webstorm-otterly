import React, {useContext} from 'react';
import { ThemeContext} from "styled-components";
import GameMenuItem from "../GameMenuItem";
import {MdOutlineVideogameAsset} from "react-icons/md";
import {MenuWrapper, Points} from "./styles";

interface MenuProps {
    id: string;
    title: string;
    points: number,
    resetGame(): void
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const theme = useContext(ThemeContext);
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
    return (
        <MenuWrapper id={props.id} color={theme.main_purple}>
            <MdOutlineVideogameAsset />
            <GameMenuItem menuText={"Game"} isClickable={false} items={[`${props.title}`]} resetGame={props.resetGame} toggleMenuShow={toggleMenuShow}/>
            <GameMenuItem menuText={"File"} isClickable={true} items={["reset"]} resetGame={props.resetGame} toggleMenuShow={toggleMenuShow}/>
            <GameMenuItem menuText={"Inventory"} isClickable={false} items={["test"]} resetGame={props.resetGame} toggleMenuShow={toggleMenuShow}/>
            <Points color={theme.console_green}>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default GameMenuBar;