import React, {useState, useEffect, useContext, useCallback} from 'react';
import {ThemeContext, ThemeProvider} from "styled-components";
import {gameDark, gameLight} from "../../styles/theme";
import {useSelector, useDispatch} from "react-redux";
import {
    gamesSelector,
    setGame,
    setNode,
    setGameLoading,
    gameCleanUp,
} from "../../features/games/gamesSlice";
import {useParams} from 'react-router-dom';
import GameInputLogic from "../../helpers/GameInputLogic";
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
    const {
        game,
        node,
        mood,
        validCO,
        errorMessage,
        gameLoading,
        points,
        inventory,
        afterAction
    } = useSelector(gamesSelector)
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

    function handleShow(): void {
        setShow(false)
    }

    function handleInput(): void {
        GameInputLogic({
            userInput,
            setUserInput,
            game,
            node,
            validCO,
            dispatch,
            setShow,
            errorMessage,
            afterAction,
            points
        })
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
        ["reset", setUserInput],
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