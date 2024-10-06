import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default const AvaliationScreen = () => {
  const route = useRoute();
  const { productId } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliar Produto</Text>
      <Text style={styles.subtitle}>ID do Produto: {productId}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua avaliação"
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar Avaliação" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

