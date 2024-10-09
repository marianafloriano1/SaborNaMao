import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function TutorialScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Bem-vindo ao Sabor na Mão!</Text>
        
        <Text style={styles.subtitle}>Como usar o aplicativo:</Text>

        <View style={styles.section}>
         
          <Text style={styles.text}>
            1. Navegue pelas categorias de receitas usando as setas. 
          </Text>
        </View>

        <View style={styles.section}>
      
          <Text style={styles.text}>
            2. Toque em uma receita para ver os detalhes e os ingredientes.
          </Text>
        </View>

        <View style={styles.section}>
  
          <Text style={styles.text}>
            3. Salve suas receitas favoritas para acessá-las facilmente.
          </Text>
        </View>

        <View style={styles.section}>
        
          <Text style={styles.text}>
            4. Explore nossas dicas de alimentação saudável nas seções especiais.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcede8',
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8F7E',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FF8F7E',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
