import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Favourities = () => {
  const initialOrders = [
    { id: '1', name: 'Cappuccino', description: 'Description of Cappuccino' },
    { id: '2', name: 'Macchiato', description: 'Description of Macchiato' },
    { id: '3', name: 'Latte', description: 'Description of Latte' },
  ];
  const [orders, setOrders] = useState(initialOrders);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (order) => {
    if (favorites.some((fav) => fav.id === order.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== order.id));
    } else {
      setFavorites([...favorites, order]);
    }
  };
  const renderOrderItem = ({ item }) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderName}>{item.name}</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteActive]}
          onPress={() => toggleFavorite(item)}
        >
          <Text style={styles.favoriteText}>
            {isFavorite ? 'Unfavourite' : 'Favourite'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render the favorites section
  const renderFavorites = () => {
    if (favorites.length === 0) {
      return <Text>No favorites yet.</Text>;
    }
    return (
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
      <Text style={styles.header}>Favorites</Text>
      {renderFavorites()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  orderItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  orderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  favoriteActive: {
    backgroundColor: 'gold',
  },
  favoriteText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Favourities;
