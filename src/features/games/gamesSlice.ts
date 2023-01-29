import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../rootReducer";
import {IGame, INode} from "../../interfaces/Node";

export interface PlayType {
    reckless: number;
    intelligent: number;
    aggressive: number;
    passive: number;

}
export interface AfterActionState {
    nodesCompleted: number;
    selectedStoryArc: string;
    dominantPlayType: PlayType;
    died: boolean;
}

const AfterActionInitialState = {
    nodesCompleted: 0,
    selectedStoryArc: "",
    dominantPlayType: {
        reckless: 0,
        intelligent: 0,
        aggressive: 0,
        passive: 0,
    },
    died: false,
}

export type CommandOption = {
    command: string,
    optionString: string,
    pos: number,
}
interface GamesState {
    games: IGame[];
    game: IGame | null | undefined;
    gameLoading: boolean,
    node: INode | null;
    mood: string;
    validCO: CommandOption[] | null;
    inventory: string[];
    points: number;
    errorMessage: string;
    afterAction: AfterActionState
}

const initialState: GamesState = {
    games: [],
    game: null,
    gameLoading: true,
    node: null,
    mood: "unknown",
    validCO: null,
    inventory: ["empty"],
    points: 0,
    errorMessage: "null",
    afterAction: AfterActionInitialState,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addGame: (state, {payload}: PayloadAction<IGame>) => {
            state.games = [...state.games, payload]
        },
        setGame: (state, {payload}: PayloadAction<number>) => {
            let selectedGame: IGame | undefined = undefined
            let gameIndex = state.games.findIndex((game) => game.ID === payload)
            if (gameIndex !== -1) {
                selectedGame = state.games[gameIndex]
            }
            state.game = selectedGame;
        },
        setNode: (state, {payload}: PayloadAction<number>) => {
            let node: INode | undefined | null = state.game!.Nodes.find((node) => node.ID === payload)
            if (node === undefined) {
                node = null;
            }
            state.node = node;
            state.afterAction.nodesCompleted++;
        },
        setNodeToAfterActionReport: (state, {payload}: PayloadAction<INode>) => {
            state.node = payload
        },
        setGameLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.gameLoading = payload
        },
        setPoints: (state) => {
            let newPointTotal: number = 0;
            if (state.node !== null && state.node.ID !== 1) {
                newPointTotal = state.points + state.node.EarnedPoints
            }
            state.points = newPointTotal
        },
        setMood: (state, {payload}: PayloadAction<string>) => {
            state.mood = payload
        },
        setValidCO: (state, {payload}: PayloadAction<CommandOption[]>) => {
            state.validCO = payload
        },
        addToInventory: (state, {payload}: PayloadAction<string>) => {
            let updatedInventory: string[] = []
            if (state.inventory.includes("empty")) {
                updatedInventory = [payload]
            } else {
                updatedInventory = [...state.inventory, payload]
            }
            state.inventory = updatedInventory
        },
        setErrorMessage: (state, {payload}: PayloadAction<string>) => {
            state.errorMessage = payload
        },
        setStoryArc: (state, {payload}: PayloadAction<string>) => {
            state.afterAction.selectedStoryArc = payload;
        },
        addPlayType: (state, {payload}: PayloadAction<keyof PlayType>) => {
            let newCount = state.afterAction.dominantPlayType[payload] + 1;
            state.afterAction.dominantPlayType = {...state.afterAction.dominantPlayType, [payload]: newCount}
        },
        setDied: (state) => {
            state.afterAction.died = true;
        },
        resetGame: (state) => {
            state.mood = "unknown"
            state.validCO = null
            state.inventory = ["empty"]
            state.points = 0
            state.errorMessage = "null"
            state.afterAction = AfterActionInitialState
        },
        gameCleanUp: (state) => {
            state.game = null
            state.node = null
            state.mood = "unknown"
            state.gameLoading = true
            state.validCO = null
            state.inventory = ["empty"]
            state.points = 0
            state.errorMessage = "null"
            state.afterAction = AfterActionInitialState
        }
    }
})

export const { addGame, setGame, setNode, setNodeToAfterActionReport, setMood, setGameLoading, setPoints, setValidCO, addToInventory, setErrorMessage, setStoryArc, addPlayType, setDied, resetGame, gameCleanUp } = gamesSlice.actions;
export const gamesSelector = (state: RootState) => state.games
