import Card from './Card';
import React , { useState, useEffect, useContext } from 'react';
import { Context } from '../../PokimonyContext/Context';

const Cards = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=2',
  );
  const { searchText } = useContext(Context);

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

  const filteredPokemons = () => {
    let filteredPokemons = allPokemons;
    if (searchText.length !== 0)
      filteredPokemons = filteredPokemons.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      )
    return filteredPokemons;
  };

  console.log(filteredPokemons());

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="cards-holder">
      <div className="cards-list">
        {filteredPokemons().map((pokemon, i) => (
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
