// PokemonDetailsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from '../services/pokemon';
import './PokemonList.css';

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const { data: pokemon, error, isLoading } = useGetPokemonByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4 poke-react-title">{pokemon.name}</h2>
      {pokemon && (
        <><div className="row justify-content-center"> {/* Centering the image */}
                  <div className="col-md-6 text-center"> {/* Adjusting column size and text alignment */}
                      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="img-fluid" /> {/* img-fluid for responsiveness */}
                  </div>
              </div><ul className="list-group mt-3">
                      <li className="list-group-item d-flex justify-content-between"> <b>Name:</b> <span>{pokemon.name}</span></li>
                      <li className="list-group-item d-flex justify-content-between"><b>Height:</b> <span>{pokemon.height}</span></li>
                      <li className="list-group-item d-flex justify-content-between"><b>Weight:</b> <span>{pokemon.weight}</span></li>
                      <li className="list-group-item d-flex justify-content-between"><b>Types:</b>
                          <span>
                              {pokemon.types.map((type, index) => (
                                  <span key={index}>{type.type.name} {index !== pokemon.types.length - 1 && ', '}</span>
                              ))}
                          </span>
                      </li>
                  </ul></>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
