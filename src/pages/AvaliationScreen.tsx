import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AvaliationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleSubmit = () => {
    Alert.alert('Feedback enviado!', `Nome: ${name}\nEmail: ${email}\nExperiência: ${experience}\nRecomendaria: ${recommend ? 'Sim' : 'Não'}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Nos dê seu Feedback</Text>
      <Text style={styles.subtitle}>Sua opinião é importante para nós. Por favor, compartilhe sua experiência.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva sua experiência..."
        value={experience}
        onChangeText={setExperience}
        multiline
      />
      
      <Text style={styles.subtitle}>Compartilhe sua experiência</Text>
      
      <View style={styles.experienceButtons}>
        {['Feliz', 'Bom', 'Médio', 'Ruim'].map((label) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.experienceButton,
              selectedExperience === label && styles.selectedButton,
            ]}
            onPress={() => setSelectedExperience(label)}
          >
            <Text>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.checkboxContainer}>
        
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRecommend(!recommend)}
        >
          <View style={[styles.checkboxSquare, recommend && styles.checkedSquare]} />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Recomendaria para outras pessoas?</Text>
      </View>
      
      <Button title="Enviar Feedback" onPress={handleSubmit} color="#1E90FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  experienceButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  experienceButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedButton: {
    backgroundColor: '#d0d0d0',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSquare: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
  },
  checkedSquare: {
    backgroundColor: '#000',
  },
  checkboxLabel: {
    fontSize: 16,
  },
});
