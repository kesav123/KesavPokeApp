import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
  };

  const removeFavorite = (pokemonId) => {
    setFavorites(favorites.filter(pokemon => pokemon.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
};
