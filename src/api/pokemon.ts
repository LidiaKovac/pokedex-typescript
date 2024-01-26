export const fetchPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemonRes: PokemonResponse = await res.json();
  const pokemon = [];
  for (const pkmn of pokemonRes.results) {
    const final = await fetchPokemonByName(pkmn.name)
    pokemon.push(final);
  }
  return {
    next: pokemonRes.next,
    previous: pokemonRes.previous,
    results: pokemon,
    count: pokemonRes.count,
  } as PokemonCompleteResponse;
};


export const fetchPokemonByName = async(name:string):Promise<Pokemon> => {
    const resSingle = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const finalPkmn = await resSingle.json();
    return finalPkmn
}