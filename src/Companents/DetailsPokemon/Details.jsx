import React from 'react';

import { Context } from '../../PokimonyContext/Context';
import './Details.css';


function Details(props) {

  const { allPokemons } = React.useContext(Context);
  const id = +props.match.params.id;

  const filterPokemonsById = (id) => {
    let filteredPokemon = allPokemons;
    filteredPokemon = filteredPokemon.filter((pokemon) => pokemon.id === id);
    return filteredPokemon;
  };

  console.log(filterPokemonsById(id)? filterPokemonsById(id) : null)

  return (
    <>
      { filterPokemonsById(id).length === 1 ?  ( filterPokemonsById(id).map((pokemon) => 
      <div className="product-details" key={pokemon.id}>
        <div className="product-details-img">
        <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="product-details-info">
        <h1 className="details-title">{pokemon.name}</h1>
        <p className="detail-description"> pokemon moves is {pokemon.moves.map(e => e.move.name + ', ').slice(1, 9)}.</p>
        <img src={pokemon.sprites.back_shiny} alt="img" className="sub-img"/> 
        <img src={pokemon.sprites.back_default} alt="img" className="sub-img"/> 
        <img src={pokemon.sprites.front_shiny} alt="img" className="sub-img"/> 
        <h5 className="total"> Pokemon base_experience is {pokemon.base_experience}</h5>
        </div>
      </div>))  : null } 
    </>


  );
}

export default Details;
