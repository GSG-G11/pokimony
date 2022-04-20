import Card from './Card';
import { useState, useEffect } from 'react';
const Cards = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=2',
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="cards-holder">
      <div className="cards-list">
        {allPokemons.map((pokemon, i) => (
          <Card
            key={pokemon.id}
            results={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </div>
      <div className="btn">
        <button onClick={() => getAllPokemons()} className="load-more">
          load more
        </button>
      </div>
    </div>
  );
};

export default Cards;
