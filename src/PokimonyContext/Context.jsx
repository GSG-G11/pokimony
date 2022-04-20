/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Context = React.createContext();

function Pokemoncontext({ children }) {
  const [searchText, setSearchText] = useState('');
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  return (
    <div>
      <Context.Provider value={{ searchText, setSearchText, allPokemons, setAllPokemons, loadMore, setLoadMore }}>
        { children }
      </Context.Provider>
    </div>
  );
}

export { Pokemoncontext, Context };
