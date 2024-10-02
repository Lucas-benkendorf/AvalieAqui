import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imagesContainer}>
        <Image
          source={{ uri: 'https://sm.ign.com/t/ign_br/screenshot/default/deathstranding_tnrz.960.jpg' }} 
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://preview.redd.it/algumas-capas-de-jogos-feitas-pela-i-a-v0-pi8e2m0w68tb1.jpg?width=452&format=pjpg&auto=webp&s=39fb71cb57b0c2cff61214de0006d0c26b65f2f9' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/d/d4/Capa_do_jogo_Redfall.jpg?20210630015055' }}
          style={styles.image}
        />
      </View>

      
      <Text style={styles.title}>Avalie Aqui</Text>
      
     
      <Text style={styles.description}>
        Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.
      </Text>
      
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('List')} 
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 120,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
