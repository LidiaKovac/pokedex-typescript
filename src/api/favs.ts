export const addToFavs = async (pokemonName: string) => {
  const res = await fetch("http://localhost:3001/favs", {
    method: "POST",
    body: JSON.stringify({name: pokemonName}),
  });
  const response = await res.json();
  console.log(response);
};
