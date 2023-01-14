import React, {useEffect} from 'react';
import {nanoid} from "nanoid";
import {DropContentWrapper, GameMenuItemWrapper, ItemWrapper, MenuButton} from "./styles";

interface MenuItemProps {
    menuText: string;
    isClickable: boolean;
    items: string[];
    resetGame(): void;
    toggleMenuShow(el: string): void
}
const GameMenuItem: React.FC<MenuItemProps> = (props) => {
    function addEventListenerToButton(el: Element): void {
        el.addEventListener("click", () => {
            props.resetGame();
            props.toggleMenuShow(`${props.menuText}-drop-content`);
        })
    }
    function populateItems(): void {
        let itemElementsToBeCreated: string = "p";
        let itemId: string = "menuItem";
        if (props.isClickable) {
            itemElementsToBeCreated = "button";
            itemId = "btnItem";
        }
        const itemsParentElement = document.getElementById(`${props.menuText}-items`)!;
        for (let item of props.items) {
            let newItem = document.createElement(itemElementsToBeCreated);
            newItem.setAttribute("id", `${itemId}`);
            newItem.setAttribute("key", `${nanoid(5)}`)
            newItem.innerHTML = item;
            if (props.isClickable) {
                addEventListenerToButton(newItem);
            }
            itemsParentElement.appendChild(newItem);
        }
    }
    useEffect(() => {
        populateItems();
    },[])

    return (
        <GameMenuItemWrapper id={`${props.menuText}-dropdown`}>
            <MenuButton onClick={() => props.toggleMenuShow(`${props.menuText}-drop-content`)}>{props.menuText}</MenuButton>
            <DropContentWrapper className={"content-dropdown"} id={`${props.menuText}-drop-content`}>
                <ItemWrapper id={`${props.menuText}-items`}></ItemWrapper>
            </DropContentWrapper>
        </GameMenuItemWrapper>
    );
}
export default GameMenuItem;