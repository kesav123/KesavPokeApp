import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/DetailScreenStyle';
import { getTypeColor } from '../utils/typeColors';

const DetailScreen = ({ route }) => {
  const { pokemon } = route.params;
  const bgColor = getTypeColor(pokemon.types[0].type.name);
  const [activeTab, setActiveTab] = useState('About');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
        <TouchableOpacity>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{pokemon.name}</Text>

        <View style={styles.typeContainer}>
          {pokemon.types.map((typeInfo, index) => (
            <View
              key={index}
              style={[
                styles.typeBadge,
                { backgroundColor: getTypeColor(typeInfo.type.name) },
              ]}
            >
              <Text style={styles.typeText}>{typeInfo.type.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.pokeId}>#{String(pokemon.id).padStart(3, '0')}</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['About', 'Base Stats'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* About Section */}
      {activeTab === 'About' && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Height:</Text>
              <Text style={styles.detailValue}>{pokemon.height / 10}m</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Weight:</Text>
              <Text style={styles.detailValue}>{pokemon.weight / 10}kg</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Abilities</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailValue}>
                {pokemon.abilities.map((ability, index) => ability.ability.name).join(', ')}
              </Text>
            </View>
          </View>
        </>
      )}

      {/* Stats Section */}
      {activeTab === 'Base Stats' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Base Stats</Text>
          {pokemon.stats.map((stat, index) => (
            <View key={index} style={styles.statRow}>
              <Text style={styles.statLabel}>{stat.stat.name}:</Text>
              <View style={styles.statBarContainer}>
                <View style={styles.statBar}>
                  <View
                    style={[
                      styles.statFill,
                      { width: `${(stat.base_stat / 150) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.statValue}>{stat.base_stat}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default DetailScreen;
