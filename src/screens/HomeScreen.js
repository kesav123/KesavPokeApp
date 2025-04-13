
import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, ActivityIndicator,Text,SafeAreaView } from 'react-native';
import { fetchPokemonList, fetchPokemonDetails } from '../api/pokemonApi';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import styles from './styles/HomeScreenStyles';
import colors from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchText, setSearchText] = useState('');


  const loadPokemon = useCallback(async () => {
    try {
      setLoading(true);
      const list = await fetchPokemonList(offset);
      const detailedPokemon = await Promise.all(
        list.map(async (pokemon) => await fetchPokemonDetails(pokemon.url))
      );
      setPokemonList([...pokemonList, ...detailedPokemon]);

      setOffset(offset + 20);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [offset, pokemonList]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFilteredPokemonList(pokemonList); 
    } else {
      const filtered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPokemonList(filtered);
    }
  };
  const displayedData = searchText.trim() === '' ? pokemonList : filteredPokemonList;

  return (
 <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Trainer's Guide</Text>
    </View>
      <SearchBar value={searchText} onChangeText={handleSearch} />
      {loading && pokemonList.length === 0 ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={displayedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              onPress={(pokemon) => navigation.navigate('Detail', { pokemon })}
            />
          )}
          numColumns={2}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

