import { FC } from "react";
import "./SinglePokemon.scss";
import { Link } from "react-router-dom";
import { addToFavs } from "../../api/favs";
interface ISinglePokemonProps {
  pokemon: Pokemon;
}
export const SinglePokemon: FC<ISinglePokemonProps> = ({ pokemon }) => {
  return (
    <div className="single-pokemon__wrap">
      <img
        src={pokemon.sprites.other?.["official-artwork"].front_default}
        alt=""
      />
      <div className="pokemon__info">
        <div className="info__area">
          <h3>{pokemon.name}</h3>
          <ul>
            {pokemon.abilities.slice(0, 2).map((ab) => (
              <li>{ab.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="info__details">
          <Link to={"/pokemon/" + pokemon.name}>Dettagli</Link>
          <button onClick={() => addToFavs(pokemon.name)}>💙</button>
        </div>
      </div>
    </div>
  );
};
