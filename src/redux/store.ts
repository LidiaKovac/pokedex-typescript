import { Action, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type Store = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch & ThunkDispatch<Store, {}, {type: string, payload: any}>
type DispatchFunction = () => AppDispatch
export const useAsyncDispatch: DispatchFunction = useDispatch

