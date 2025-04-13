import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/PokemonCardStyles';
import { getTypeColor } from '../utils/typeColors';

const PokemonCard = ({ pokemon, onPress }) => {

  const primaryType = pokemon.types?.[0]?.type?.name ?? 'normal';

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: getTypeColor(primaryType) }]}
      onPress={() => onPress(pokemon)}
    >
      <Image
        source={{ uri: pokemon.sprites?.front_default }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>

      <View style={styles.typeContainer}>
        {pokemon.types.map((typeObj, index) => (
          <View key={index} style={styles.typeBadge}>
            <Text style={styles.typeText}>{typeObj.type.name}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
