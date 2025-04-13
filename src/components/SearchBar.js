import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles/SearchBarStyles';
import LinearGradient from 'react-native-linear-gradient';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <LinearGradient
      colors={['#6c92bd', '#3c5aa6']}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Search Pokémon"
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
      />
    </LinearGradient>
  );
};

export default SearchBar;
// This component is a search bar for filtering Pokémon by name.
// It uses a linear gradient background and a text input field.