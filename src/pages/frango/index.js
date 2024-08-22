import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/frango-assado.png')} />
        <Text style={styles.paragraph}>
          Frango Assado com Batatas
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (8 porções):</Text>
      <View style={styles.ingredientsList}>
          <Text style={styles.topicos}>- 1 frango inteiro, cortado em pedaços.</Text>
      <Text style={styles.topicos}>- sal a gosto.</Text>
      <Text style={styles.topicos}>- orégano a gosto.</Text>
      <Text style={styles.topicos}>- 6 dentes de alho amassado e picado.</Text>
      <Text style={styles.topicos}>- pimenta-do-reino a gosto.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de vinagre.</Text>
          <Text style={styles.sectionTitle}>Batatas: </Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de vinagre.</Text>
      <Text style={styles.topicos}>- orégano a gosto.</Text>
      <Text style={styles.topicos}>- sal a gosto.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de maionese bem cheias.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Coloque o frango em uma travessa e tempere com o alho, sal, pimenta-do-reino, orégano e o vinagre.</Text>
      <Text style={styles.topicos}>2. Deixe marinar por cerca de 2 horas dentro da geladeira.</Text>
      <Text style={styles.topicos}>3. Coloque as batatas em uma panela com água e leve para ferver.</Text>
      <Text style={styles.topicos}>4. Não cozinhar demais, deixar bem firmes.</Text>
      <Text style={styles.topicos}>5. Escorra a água e misture o sal, o orégano e a maionese.</Text>
      <Text style={styles.topicos}>6. Unte uma forma com óleo.</Text>
      <Text style={styles.topicos}>7. Coloque o frango e por cima as batatas.</Text>
      <Text style={styles.topicos}>8. Leve ao forno médio por cerca de 1 hora e 30 minutos a 2 horas, ou até que fiquem dourados.</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8a0',
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
    color: '#dfc265',
    marginLeft: 30,
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
    color: '#dfc265',
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
