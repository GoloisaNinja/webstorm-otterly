import React, {useEffect} from 'react';
import {withTheme} from "styled-components";
import { nanoid } from 'nanoid';
import {GameLoadScreenWrapper} from "./styles";

interface GameLoadingScreenProps {
    gameLoading: boolean;
    gameTitle: string;
    handleGameLoading():void
    theme: {};
}

const GameLoadScreen: React.FC<GameLoadingScreenProps> = (props) => {
    const loadingTextArray: string[] = [
        "BOOT SEQUENCE INITIATED...",
        "CHECKING RAM...",
        "64K RAM SYSTEM 38911 BASIC BYTES FREE",
        "CHECKING HARD DISK...",
        "HARD DISK FOUND...",
        "LOADING SYSTEM BIOS...",
        "BIOS LOADED SUCCESSFULLY",
        "OTTER OS VERSION 1.4 FOUND",
        "JOYSTICK PORT NOT DETECTED...",
        "ENGAGING RIDICULOUSNESS ENGINE...",
        "MAX RIDICULOUSNESS ACHIEVED",
        `${props.gameTitle} REQUESTED...`,
        "RESOLVING OTTERS...",
        "READY...",
    ]
    function populateLoadScreenLoadingText(): void {
        const loadElement = document.getElementById("loadWrapper")!;
        let delay = 0;
        for (let text of loadingTextArray) {
            let textElement: HTMLParagraphElement = document.createElement("p");
            textElement.setAttribute("key", `${nanoid(5)}`);
            textElement.innerHTML = text;
            setTimeout(() => {
                loadElement.appendChild(textElement);
            }, delay);
            delay += 1000;
        }
        setTimeout(() => {
            props.handleGameLoading();
        }, 15000)
    }
    useEffect(() => {
        if (document !== undefined) {
            populateLoadScreenLoadingText();
        }
    },[])
    return(
        <GameLoadScreenWrapper id="loadWrapper"></GameLoadScreenWrapper>
    )
}
export default withTheme(GameLoadScreen);