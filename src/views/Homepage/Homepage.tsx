import { useEffect } from "react";
import "./Homepage.scss";
import { Store, useAsyncDispatch } from "../../redux/store";
import { setPokemonAction } from "../../redux/actions";
import { useSelector } from "react-redux";
import { SinglePokemon } from "../../components/SinglePokemon/SinglePokemon";
import { Loader } from "../../components/Loader/Loader";
export const Homepage = () => {
  const dispatch = useAsyncDispatch();
  const pokemon = useSelector((state: Store) => state.pokemon.data);
  const loading = useSelector((state:Store) => state.pokemon.loading)
  useEffect(() => {
    dispatch(setPokemonAction());
  }, []);
  return (
    <div className="homepage__wrap">
      {loading && <Loader/>}
      {pokemon.map((pkmn) => (
        <SinglePokemon pokemon={pkmn} />
      ))}
    </div>
  );
};
