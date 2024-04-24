import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_POKEMON_API_BASE_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: () => 'pokemon/',
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
