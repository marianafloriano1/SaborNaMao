import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pancakes.png')} />
        <Text style={styles.paragraph}>
          Panquequinha De Maçã
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1 ovo.</Text>
      <Text style={styles.topicos}>- 2 colheres de sopa de farinha de aveia.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de água filtrada.</Text>
      <Text style={styles.topicos}>- 2 colheres de sopa de purê de maçã ou maçã ralada .</Text>
      
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Misture todos os ingredientes com um garfo.</Text>

      <Text style={styles.topicos}>2. Unte uma frigideira com azeite, deixe aquecer em fogo baixo e despeje a mistura.</Text>

      <Text style={styles.topicos}>3. Quando dourar de um lado, vire e deixe dourar do outro. </Text>

      <Text style={styles.topicos}>4. Sirva e aproveite!</Text>

      <Text style={styles.sectionTitle}>Atenção!</Text>

      <Text style={styles.topicos}>- Adequado a partir de 6 meses.</Text>
      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1dbcf',
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
    color: '#609f84',
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
    color: '#609f84',
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
