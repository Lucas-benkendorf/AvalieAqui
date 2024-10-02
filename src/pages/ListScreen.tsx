import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const products = require('../../assets/db.json').products;

const ListScreen = () => {
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
              <TouchableOpacity style={styles.button}>
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
