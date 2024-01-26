import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { Store } from "./store";
import { fetchPokemon, fetchPokemonByName } from "../api/pokemon";

export const SET_POKEMON = "SET_POKEMON";
export const SELECT_POKEMON = "SELECT_POKEMON";

export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";

// Async Actions
export const setPokemonAction = (): ThunkAction<
  Promise<void>,
  Store,
  {},
  PokemonAction | UnknownAction
> => {
  return async (dispatch, getState) => {
    // getState().pokemon.selected
    dispatch({
      type: SET_LOADING_TRUE,
    });
    const pokemon = await fetchPokemon();
    dispatch({
      type: SET_POKEMON,
      payload: pokemon,
    });
  };
};

export const selectPokemonAction = (
  name: string
): ThunkAction<Promise<void>, Store, {}, PokemonAction | UnknownAction> => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOADING_TRUE,
    });
    const pkmn = await fetchPokemonByName(name);
    dispatch({
      type: SELECT_POKEMON,
      payload: pkmn,
    });
  };
};
