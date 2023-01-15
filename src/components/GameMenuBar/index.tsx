import React, {useState} from 'react';
import GameMenuItem from "../GameMenuItem";
import {MdOutlineVideogameAsset} from "react-icons/md";
import {MenuWrapper, Points} from "./styles";

interface MenuProps {
    id: string;
    title: string;
    points: number;
    inventoryItems: string[];
    functions: Map<string, Function>;
}

const GameMenuBar:React.FC<MenuProps> = (props) => {
    const [gameTitle] = useState<string[]>([props.title]);
    const [fileReset] = useState<string[]>(["reset"]);
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
        <MenuWrapper id={props.id} >
            <MdOutlineVideogameAsset />
            <GameMenuItem menuText={"Game"} isClickable={false} items={gameTitle} functions={props.functions} toggleMenuShow={toggleMenuShow}/>
            <GameMenuItem menuText={"File"} isClickable={true} items={fileReset} functions={props.functions} toggleMenuShow={toggleMenuShow}/>
            <GameMenuItem menuText={"Inventory"} isClickable={false} items={props.inventoryItems} functions={props.functions} toggleMenuShow={toggleMenuShow}/>
            <Points>{`Points: ${props.points}`}</Points>
        </MenuWrapper>
    );
}
export default GameMenuBar;