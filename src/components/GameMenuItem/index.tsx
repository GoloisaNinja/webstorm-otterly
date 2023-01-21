import React, {useEffect} from 'react';
import {withTheme} from "styled-components";
import {nanoid} from "nanoid";
import {DropContentWrapper, GameMenuItemWrapper, ItemWrapper, MenuButton} from "./styles";

interface Theme {};
interface MenuItemProps {
    menuText: string;
    isClickable: boolean;
    items: string[];
    functions: Map<string, Function>;
    theme: Theme;
}
const GameMenuItem: React.FC<MenuItemProps> = (props) => {
    const toggleShow = props.functions.get("toggle")!;
    const reset = props.functions.get("reset")!;
    const toggleTheme = props.functions.get("theme")!;

    function handleToggleShow(): void  {
        const instanceDropId = `${props.menuText}-drop-content`;
        toggleShow(instanceDropId);
    }
    function resetAndCloseMenu(): void {
        reset();
        handleToggleShow()
    }
    function themeChangeAndCloseMenu(): void  {
        toggleTheme();
        handleToggleShow();
    }
    function setDynamicListener(eType: string, el: Element): void  {
        el.addEventListener("click", function(e) {
            switch((e.target! as HTMLButtonElement).innerHTML) {
                case "theme":
                    themeChangeAndCloseMenu();
                    break;
                case "reset":
                    resetAndCloseMenu();
                    break;
                default: console.log('was not an expected button')
            }
        })
    }
    function populateItems(): void {
        let itemsAlreadyPopulated: string[] = [];
        let itemElementsToBeCreated: string = "p";
        const itemsParentElement = document.getElementById(`${props.menuText}-items`)!;
        let itemId: string = "menuItem";
        if (props.isClickable) {
            itemElementsToBeCreated = "button";
            itemId = `btnItem`;
            setDynamicListener("click", itemsParentElement)
        }
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
            newItem.setAttribute("id", `${itemId}-${item}`);
            newItem.setAttribute("key", `${nanoid(5)}`)
            newItem.innerHTML = item;
            itemsParentElement.appendChild(newItem);

        }
    }
    useEffect(() => {
        populateItems();
    },[props.items])

    return (
        <GameMenuItemWrapper id={`${props.menuText}-dropdown`} >
            <MenuButton onClick={() => handleToggleShow()}
            >{props.menuText}
            </MenuButton>
            <DropContentWrapper className={"content-dropdown"}
                                id={`${props.menuText}-drop-content`}
                                >
                <ItemWrapper id={`${props.menuText}-items`}></ItemWrapper>
            </DropContentWrapper>
        </GameMenuItemWrapper>
    );
}
export default withTheme(GameMenuItem);