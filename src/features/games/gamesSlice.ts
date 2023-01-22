import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../rootReducer";
import {IGame, INode} from "../../interfaces/Node";

export type CommandOption = {
    command: string,
    optionString: string,
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
    errorMessage: "<null>",
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
        resetGame: (state) => {
            state.mood = "unknown"
            state.validCO = null
            state.inventory = ["empty"]
            state.points = 0
            state.errorMessage = "<null>"
        },
        gameCleanUp: (state) => {
            state.game = null
            state.node = null
            state.mood = "unknown"
            state.gameLoading = true
            state.validCO = null
            state.inventory = ["empty"]
            state.points = 0
            state.errorMessage = "<null>"
        }
    }
})

export const { addGame, setGame, setNode, setMood, setGameLoading, setPoints, setValidCO, addToInventory, setErrorMessage, resetGame, gameCleanUp } = gamesSlice.actions;
export const gamesSelector = (state: RootState) => state.games
