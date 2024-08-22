import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/picole.png')} />
        <Text style={styles.paragraph}>
          Picolé de iogurte com frutas
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- Iogurte natural.</Text>
      <Text style={styles.topicos}>- Frutas em pedacinho (morango, manga, kiwi, abacate…).</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Coloque o iogurte e as frutas em forminhas de picolé.</Text>
        <Text style={styles.topicos}>2. Coloque no freezer por no minímo 2 horas</Text>
        <Text style={styles.topicos}>3. Sirva</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6dbb2',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#92ab79',
    marginLeft: 10,
    flex: 1,
    
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#92ab79',
    marginTop: 10,
  },
  ingredientsList: {
    marginBottom: 20,
  },
  topicos: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },
});
