import { Reducer } from "@reduxjs/toolkit";
import { SELECT_POKEMON, SET_LOADING_FALSE, SET_LOADING_TRUE, SET_POKEMON } from "../actions";

const initialState: IPokemonState = {
  data: [],
  prev: "",
  next: "",
  selectedPokemon: null,
  loading: true
};
export const pokemonReducer: Reducer<IPokemonState, PokemonAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_LOADING_TRUE: 
      return {
        ...state, 
        loading: true
      }
    case SET_POKEMON:
      const payload = action.payload as PokemonCompleteResponse;
      return {
        ...state,
        data: payload.results,
        prev: payload.previous,
        next: payload.next,
        loading: false
      };
    case SELECT_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload as Pokemon,
        loading: false
      };
    default:
      return state;
  }
};
