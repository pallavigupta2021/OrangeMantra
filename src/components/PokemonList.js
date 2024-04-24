import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemonListQuery } from '../services/pokemon';
import './PokemonList.css'; 

const PokemonList = () => {
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4 poke-react-title">Poke React</h2>
      <ul className="list-group">
        {pokemonList.results.map((pokemon) => (
          <li key={pokemon.name} className="list-group-item">
            <Link to={`/pokemon/${pokemon.name}`} className="link">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
