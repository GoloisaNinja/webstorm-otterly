import React, {useState, useEffect, useContext, useCallback} from 'react';
import {ThemeContext, ThemeProvider} from "styled-components";
import {gameDark, gameLight} from "../../styles/theme";
import {useSelector, useDispatch} from "react-redux";
import {
    gamesSelector,
    setGame,
    setNode,
    setNodeToAfterActionReport,
    setMood,
    setPoints,
    addToInventory,
    setErrorMessage,
    setGameLoading,
    setStoryArc,
    addPlayType,
    setDied,
    resetGame,
    gameCleanUp,
    PlayType
} from "../../features/games/gamesSlice";
import {useParams} from 'react-router-dom';
import { BuildAfterActionINode } from "../../helpers/AfterActionINode";
import {IOptions} from "../../interfaces/Node";
import GameNotFound from "../../components/GameNotFound";
import GameLoadScreen from "../../components/GameLoadScreen";
import GameNodeText from '../../components/GameNodeText';
import GameOptions from "../../components/GameOptions";
import GameNodeInput from "../../components/GameNodeInput";
import GameMenuBar from "../../components/GameMenuBar";
import Spinner from "../../components/Spinner";
import Modal from "../../components/Modal";
import InventoryAdded from "../../components/InventoryAdded";
import {PageWrapper} from '../../components/PageWrapper';
import {
    ScrollMarker,
    LoadingTextWrapper,
    NodeTextWrapper,
    ErrorTerminal,
    GameScreenWrapper,
} from './styles';

const GameTemplate: React.FC = () => {
    const theme = useContext(ThemeContext);
    const params = useParams();
    const gameId = parseInt(params.id!);
    const dispatch = useDispatch();
    const {game, node, mood, validCO, errorMessage, gameLoading, points, inventory, afterAction} = useSelector(gamesSelector)
    const [currentGameTheme, setCurrentGameTheme] = useState<any>(gameDark);
    const [userInput, setUserInput] = useState("");
    const [show, setShow] = useState<boolean>(false);
    const startGame = useCallback(() => {
        dispatch(setGame(gameId));
        if (game !== null && game !== undefined) {
            dispatch(setNode(1))
        }
    }, [dispatch, gameId, game])

    useEffect(() => {
        startGame()
        let themeToUse = gameDark;
        if (localStorage.getItem("game-theme") !== null) {
            let gameTheme = localStorage.getItem("game-theme");
            if (gameTheme === "game-light") {
                themeToUse = gameLight;
            }
        } else {
            localStorage.setItem("game-theme", "game-dark");
        }
        setCurrentGameTheme(() => themeToUse);

        return () => {
            dispatch(gameCleanUp())
        }
    }, [gameId, startGame])

    function showInventoryAdded(): void {
        setShow(true);
    }

    function handleShow(): void {
        setShow(false)
    }

    function scrollToNodeTextStart(): void {
        const yPos = document.getElementById("scrollMarker")!.getBoundingClientRect().top;
        const yPosOffset = yPos + window.scrollY - 95;
        setTimeout(() => {
            window.scroll({left: 0, top: yPosOffset, behavior: "smooth"});
        }, 325)

    }

    function handleGameReset(): void {
        dispatch(resetGame())
        dispatch(setNode(1))
        setUserInput("")
        scrollToNodeTextStart()
    }

    type UserInputCheck = {
        goodInput: boolean,
        selectedOption: IOptions | null,
        optionIsNullNextNode: number | null,
    }

    function inputCheck(): UserInputCheck {
        let command = userInput.toLowerCase().trim();
        const defaultBadInput: UserInputCheck = {
            goodInput: false,
            selectedOption: null,
            optionIsNullNextNode: null,
        }
        const goodInputDynamic: UserInputCheck = {
            goodInput: true,
            selectedOption: null,
            optionIsNullNextNode: null,
        }
        if (node.CodeNode) {
            if (command.length !== node.CodeLength) {
                return defaultBadInput
            } else {
                if (command === validCO[0].command) {
                    goodInputDynamic.selectedOption = node.NodeOptions[validCO[0].pos]
                    return goodInputDynamic
                } else {
                    goodInputDynamic.optionIsNullNextNode = node.CodeFailedNextNode
                    return goodInputDynamic
                }
            }
        }
        for (let i = 0; i < validCO.length; i++) {
            if (validCO[i].command === command) {
                goodInputDynamic.selectedOption = node.NodeOptions[validCO[i].pos]
                return goodInputDynamic
            }
        }
        return defaultBadInput
    }
    function handleAfterAction(): void {
        const aaINode = BuildAfterActionINode({game, afterAction, points});
        dispatch(setMood("GAME OVER..."))
        dispatch(setNodeToAfterActionReport(aaINode))
        setUserInput("")
        scrollToNodeTextStart()

    }
    function handleInput(): void {
        let inputOutcome = inputCheck();
        if (!inputOutcome.goodInput) {
            dispatch(setErrorMessage("command not recognized..."))
            return;
        }
        if (inputOutcome.selectedOption !== null) {
            let selectedOption = inputOutcome.selectedOption
            if (selectedOption.AfterAction !== undefined) {
                handleAfterAction()
                return
            }
            if (selectedOption.NextNode === 1) {
                handleGameReset()
                return
            }
            if (selectedOption.StoryArc !== undefined) {
                dispatch(setStoryArc(selectedOption.StoryArc))
            }
            if (selectedOption.PlayType !== undefined) {
                dispatch(addPlayType(selectedOption.PlayType as keyof PlayType))
            }
            if (selectedOption.DeathNode !== undefined) {
                dispatch(setDied())
            }
            if (selectedOption.Inventory.length) {
                dispatch(addToInventory(selectedOption.Inventory))
                showInventoryAdded();
            }
            if (selectedOption.Mood.length) {
                dispatch(setMood(selectedOption.Mood));
            }
            dispatch(setNode(selectedOption.NextNode));
        } else {
            dispatch(setNode(inputOutcome.optionIsNullNextNode!))
        }
        if (errorMessage !== `null`) {
            dispatch(setErrorMessage(`null`))
        }
        dispatch(setPoints())
        setUserInput("")
        scrollToNodeTextStart()
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setUserInput(e.target.value);
    }

    function handleGameLoading(): void {
        dispatch(setGameLoading(false))
        setTimeout(() => {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        }, 500)
    }

    function toggleTheme(): void {
        let currentTheme = localStorage.getItem("game-theme")!;
        if (currentTheme === "game-light") {
            setCurrentGameTheme(gameDark);
            localStorage.setItem("game-theme", "game-dark")
        } else {
            setCurrentGameTheme(gameLight)
            localStorage.setItem("game-theme", "game-light")
        }
    }

    function checkMenuDropDowns(): void {
        const dropdowns = document.querySelectorAll(".content-dropdown")!
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains("show")) {
                dropdowns[i].classList.toggle("show");
            }
        }
    }

    let menuItemMap = new Map<string, string[]>([
        ["Game-drop-content", ["File-drop-content", "Inventory-drop-content"]],
        ["File-drop-content", ["Game-drop-content", "Inventory-drop-content"]],
        ["Inventory-drop-content", ["Game-drop-content", "File-drop-content"]]
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

    const menuFunctionMap: Map<string, Function> = new Map([
        ["theme", toggleTheme],
        ["reset", handleGameReset],
        ["toggle", toggleMenuShow]
    ])

    return game === null && node === null ?
        (<PageWrapper padding={"1rem"}>
            <Spinner show={true} color={theme.console_green}/>
        </PageWrapper>) : game === undefined || node === null ?
            (<PageWrapper padding={"1rem"}>
                <GameNotFound/>
            </PageWrapper>) : gameLoading ? (<PageWrapper padding={'1rem'}>
                <ThemeProvider theme={currentGameTheme}>
                    <LoadingTextWrapper>
                        <GameLoadScreen gameLoading={gameLoading}
                                        gameTitle={game!.Title}
                                        handleGameLoading={handleGameLoading}
                        />
                    </LoadingTextWrapper>
                </ThemeProvider>
            </PageWrapper>) : (<PageWrapper padding={'1rem'}>
                <ThemeProvider theme={currentGameTheme}>
                    <ScrollMarker id="scrollMarker"></ScrollMarker>
                    <GameScreenWrapper>
                        <GameMenuBar id="menu-bar"
                                     title={game!.Title}
                                     points={points}
                                     functions={menuFunctionMap}
                        />
                        <NodeTextWrapper onClick={() => checkMenuDropDowns()}>
                            <GameNodeText nodeText={node.Text} status={mood}/>
                            <GameOptions options={node.NodeOptions}/>
                            <GameNodeInput handleInputChange={handleInputChange}
                                           handleUserInput={handleInput}
                                           userInput={userInput}
                            />
                            <ErrorTerminal>Error@Console ~ % {errorMessage}</ErrorTerminal>
                        </NodeTextWrapper>
                    </GameScreenWrapper>

                {show && <Modal childComponent={<InventoryAdded details={inventory[inventory.length - 1]}
                                                                handleShow={handleShow}/>}/>}
                </ThemeProvider>
            </PageWrapper>);
};
export default GameTemplate;