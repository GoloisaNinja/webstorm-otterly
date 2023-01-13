import React, {useEffect} from 'react';
import { nanoid } from 'nanoid';
import {GameLoadScreenWrapper} from "./styles";

interface GameLoadingScreenProps {
    gameLoading: boolean;
    gameTitle: string;
    handleGameLoading():void
}

const GameLoadScreen: React.FC<GameLoadingScreenProps> = (props) => {
    const loadingTextArray: string[] = [
        "BOOT SEQUENCE INITIATED...",
        "CHECKING RAM...",
        "64KB RAM FOUND 58KB USABLE",
        "CHECKING HARD DISK...",
        "HARD DISK FOUND...",
        "LOADING SYSTEM BIOS...",
        "BIOS LOADED SUCCESSFULLY",
        "OTTER OS VERSION 1.4 FOUND",
        "ENGAGING RIDICULOUSNESS ENGINE...",
        "MAX RIDICULOUSNESS ACHIEVED",
        `${props.gameTitle} REQUESTED...`,
        "GAME FOUND...",
        "JOYSTICK PORT NOT DETECTED...",
        "RESOLVING OTTERS...",
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
export default GameLoadScreen;