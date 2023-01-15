import React, {useEffect} from 'react';
import {nanoid} from "nanoid";
import {DropContentWrapper, GameMenuItemWrapper, ItemWrapper, MenuButton} from "./styles";

interface MenuItemProps {
    menuText: string;
    isClickable: boolean;
    items: string[];
    toggleMenuShow(el: string): void
    functions: Map<string, Function>;
}
const GameMenuItem: React.FC<MenuItemProps> = (props) => {

    function listenerFactory(el: Element, neededFunction: string) {
        let f = props.functions.get(neededFunction);
            el.addEventListener("click", () => {
                if (f !== undefined) {
                    f();
                }
                props.toggleMenuShow(`${props.menuText}-drop-content`)
            })
    }

    function populateItems(): void {
        let itemsAlreadyPopulated: string[] = [];
        let itemElementsToBeCreated: string = "p";
        let itemId: string = "menuItem";
        if (props.isClickable) {
            itemElementsToBeCreated = "button";
            itemId = "btnItem";
        }
        const itemsParentElement = document.getElementById(`${props.menuText}-items`)!;
        let lastChildChecked = itemsParentElement.children.length - 1;
        while (lastChildChecked !== -1) {
            let child = itemsParentElement.children[lastChildChecked]
            if (!props.items.includes(child.innerHTML)) {
                itemsParentElement.removeChild(child);
            } else {
                itemsAlreadyPopulated.push(child.innerHTML);
            }
            lastChildChecked--
        }

        const cleanItemsToAdd: string[] = props.items.filter((item) => !itemsAlreadyPopulated.includes(item))

        for (let item of cleanItemsToAdd) {
            let newItem = document.createElement(itemElementsToBeCreated);
            newItem.setAttribute("id", `${itemId}`);
            newItem.setAttribute("key", `${nanoid(5)}`)
            newItem.innerHTML = item;
            if (props.isClickable) {
                listenerFactory(newItem, item)
            }
            itemsParentElement.appendChild(newItem);
        }
    }
    useEffect(() => {
        populateItems();
    },[props.items])

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