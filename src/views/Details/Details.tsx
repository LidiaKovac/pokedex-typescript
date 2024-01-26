import { useEffect, useState } from "react";
import { Store, useAsyncDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectPokemonAction } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import * as _ from "lodash";
import "./Details.scss"
export const Details = () => {
  const dispatch = useAsyncDispatch();
  const pokemon = useSelector((state: Store) => state.pokemon.selectedPokemon);
  const params = useParams();
  const [movesByLevel, setMovesBylevel] = useState<MovesByLevel>({});

  useEffect(() => {
    if (params.name) {
      dispatch(selectPokemonAction(params.name));
    }
  }, []);
  useEffect(() => {
    setMovesBylevel(
      _.groupBy(
        pokemon?.moves,
        (move) => move.version_group_details[0].level_learned_at
      )
    );
  }, [pokemon?.name]);
  return (
    <>
      {pokemon ? (
        <main>
          <h1>{pokemon.name}</h1>
          <div className="details__header">
            <img
              src={
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                "http://placehold.it/300x300"
              }
              alt=""
            />
            <img
              src={
                "pokemon.sprites.other?.['official-artwork']?.front_shiny || 'http://placehold.it/300x300'"
              }
              alt=""
            />
            <div className="details__info">
              <h3>Types:</h3>
              <ul>
                {pokemon.types.map((type) => (
                  <li>{type.type.name}</li>
                ))}
              </ul>
              <h3>Abilities:</h3>
              <ul>
                {pokemon.abilities.map((ab) => (
                  <li>{ab.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="details__stats">
              <h3>Stats:</h3>
              <table>
                <thead>
                  <td>Stat</td>
                  <td>#</td>
                </thead>
                <tbody>
                  {pokemon.stats.map((stat) => (
                    <tr>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h2>Moves:</h2>
          <div className="details__moves">
            <h3>Can always learn:</h3>
            <ul className="moves__list moves__list--big">
              {movesByLevel["0"]?.map((move) => (
                <li>{move.move.name}</li>
              ))}
            </ul>
            {Object.keys(movesByLevel).slice(1)?.map((level) => {
              return (
                <div className="moves__byLevel">
                  <h3>Learned at LVL{level}</h3>
                  <ul className="moves__list">
                    {movesByLevel[level]?.map((move) => (
                      <li>{move.move.name}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            {/* {movesByLevel.map(level => {
              return <div className="moves__byLevel">
              <h3 >Learned at LVL{ level }</h3>
              <ul className="moves__list">
                {Object.keys(movesByLevel)[level]?.map(move => move.)}
                <li >
                  { move.move.name }
                </li>
              </ul>
            </div>
            })} */}
            {/*  */}
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};
