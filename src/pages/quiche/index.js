import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/quiche.png')} />
        <Text style={styles.paragraph}>
          Quiche de Legumes
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (8 porções):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 pacote de massa folhada (400g).</Text>
      <Text style={styles.topicos}>- 3 ovos.</Text>
      <Text style={styles.topicos}>- 1 lata de creme de leite.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de brócolis cozido e picado.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de queijo mussarela ralado.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de queijo provolone ralado.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de tomate seco picado.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de cheiro-verde picado.</Text>
      <Text style={styles.topicos}>- 1 colher (chá) de sal.</Text>
      <Text style={styles.topicos}>- Pimenta-do-reino e noz-moscada ralada a gosto.</Text>
      <Text style={styles.topicos}>- 3 colheres (sopa) de queijo parmesão ralado.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Forre o fundo e a lateral de uma fôrma de fundo removível canelada de 24cm de diâmetro com a massa folhada, apertando com os dedos.</Text>

      <Text style={styles.topicos}>2. Corte o excesso de massa da lateral com uma faca e fure o fundo da fôrma com garfo.</Text>

        <Text style={styles.topicos}>3. Bata os ovos com o creme de leite usando um garfo ou batedor manual.</Text>

        <Text style={styles.topicos}>4. Acrescente o brócolis, os queijos, o tomate seco, o cheiro-verde, o sal, pimenta e noz-moscada.</Text>

        <Text style={styles.topicos}>5. Misture bem e distribua sobre a massa na fôrma.</Text>

        <Text style={styles.topicos}>6. Polvilhe com o parmesão e leve ao forno médio, preaquecido, por 30 minutos ou até firmar e dourar.</Text>

        <Text style={styles.topicos}>7.  Desenforme morna e sirva.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1b2cd',
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
    color: '#7d6094',
    marginLeft: 10,
    flex: 1
    
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
    color: '#7d6094',
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
