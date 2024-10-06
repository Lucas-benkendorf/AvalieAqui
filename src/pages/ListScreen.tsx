import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AvaliationScreen from './AvaliationScreen';

const ListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://192.168.3.5:3000/products');  
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchProducts();
  }, []);

  
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E53935" />
        <Text>Carregando produtos...</Text>
      </View>
    );
  }

  
  const handleAvaliar = (productId) => {
    navigation.navigate('Avaliation', { productId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productType}>Marca: {item.brand}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAvaliar(item.id)}
              >
                <Text style={styles.buttonText}>Avaliar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productType: {
    fontSize: 14,
    color: '#777',
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935',
  },
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ListScreen;
