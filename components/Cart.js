import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartComponent = () => {
  // Sample product list
  const initialProducts = [
    { id: '1', name: 'Cappuccino', price: 4.53 },
    { id: '2', name: 'Macchiato', price: 2.95 },
    { id: '3', name: 'Latte', price: 5.56 },
  ];

  // State for products and cart
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  // Add item to the cart or increase quantity if already in the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Update quantity if product already exists in the cart
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add product to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from the cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  // Calculate total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Render product item
  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>Price: ${item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render cart item
  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Total: ${item.price * item.quantity}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFromCart(item)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
      <Text style={styles.header}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      )}
      {cart.length > 0 && (
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
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
  productItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#FF5733',
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalSection: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#008CBA',
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartComponent;
