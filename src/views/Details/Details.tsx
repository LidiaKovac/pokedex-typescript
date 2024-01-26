import { useEffect, useState } from "react";
import { Store, useAsyncDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectPokemonAction } from "../../redux/actions";
import { useParams } from "react-router-dom";

export const Details = () => {
  const dispatch = useAsyncDispatch();
  const pokemon = useSelector((state: Store) => state.pokemon.selectedPokemon);
  const params = useParams();
  
  useEffect(() => {
    if (params.name) {
      dispatch(selectPokemonAction(params.name));
    }
  }, []);
  return (
    <div className="details__wrap">
      <h1>{pokemon?.name}</h1>
    </div>
  );
};
