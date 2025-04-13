const typeColors = {
    grass: '#9BCC50',
    fire: '#FD7D24',
    water: '#4592C4',
    bug: '#729F3F',
    normal: '#A4ACAF',
    electric: '#EED535',
    ground: '#AB9842',
    fairy: '#FDB9E9',
    poison: '#B97FC9',
    fighting: '#D56723',
    psychic: '#F366B9',
    rock: '#A38C21',
    ghost: '#7B62A3',
    ice: '#51C4E7',
    dragon: '#F16E57',
    dark: '#707070',
    steel: '#9EB7B8',
    flying: '#3DC7EF',
  };

  export const getTypeColor = (type) => typeColors[type] || '#ddd';
