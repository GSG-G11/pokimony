/* eslint-disable no-undef */
import React, { useEffect, useContext } from 'react';
import Card from './Card';
import { Context } from '../../PokimonyContext/Context';

function Cards() {
  const { searchText, allPokemons, setAllPokemons, loadMore, setLoadMore } = useContext(Context);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const dataObj = await response.json();
        setAllPokemons((currentList) => [...currentList, dataObj]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };


  const filteredPokemons = () => {
    let filteredPokemon = allPokemons;
    if (searchText.length !== 0) {
      filteredPokemon = filteredPokemon.filter((pokemon) => {
        const result = pokemon.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return result;
      });
    }
    return filteredPokemon;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="cards-holder">
      <div className="cards-list">
        {filteredPokemons().map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            results={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
          />
        ))}
      </div>
      <div className="btn">
        <button
          type="button"
          onClick={() => getAllPokemons()}
          className="load-more"
        >
          load more
        </button>
      </div>
    </div>
  );
}

export default Cards
