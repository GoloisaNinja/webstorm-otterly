import { combineReducers } from "@reduxjs/toolkit";
import {gamesSlice} from "./features/games/gamesSlice";

const rootReducer = combineReducers({
    games: gamesSlice.reducer,
})

export type RootState = ReturnType<any>
export default rootReducer