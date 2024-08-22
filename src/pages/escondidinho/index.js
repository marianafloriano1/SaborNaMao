import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pure-de-batata.png')} />
        <Text style={styles.paragraph}>
          Escondidinho de Carne Moída
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 1 kg de batata.</Text>
      <Text style={styles.topicos}>- 200 g de queijo mussarela.</Text>
      <Text style={styles.topicos}>- 1 cebola.</Text>
      <Text style={styles.topicos}>- sal.</Text>
      <Text style={styles.topicos}>- cheiro-verde a gosto.</Text>
      <Text style={styles.topicos}>- 2 colheres de manteiga.</Text>
      <Text style={styles.topicos}>- 500 g de carne moída.</Text>
      <Text style={styles.topicos}>- azeite.</Text>
      <Text style={styles.topicos}>- 1 dente de alho amassado.</Text>
      <Text style={styles.topicos}>- pimenta branca a gosto.</Text>
      <Text style={styles.topicos}>- 1/2 copo de leite.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Descasque as batatas, corte ao meio e cozinhe com água e sal.</Text>
      <Text style={styles.topicos}>2. Depois de cozidas, amasse as batatas, adicione o leite e a manteiga, mexa bem até formar um purê e reserve.</Text>
      <Text style={styles.topicos}>3. Em uma panela, adicione 1 fio de azeite, a cebola, o alho e refogue a carne moída.</Text>
      <Text style={styles.topicos}>4. Tempere com sal, pimenta branca, cheiro-verde e cozinhe até secar a água que se formar na panela.</Text>
      <Text style={styles.topicos}>5. Forre um refratário com a metade do purê de batatas.</Text>
      <Text style={styles.topicos}>6. Acrescente uma camada de queijo e uma camada de carne moída.</Text>
      <Text style={styles.topicos}>7. Repita o processo e finalize com queijo ralado por cima.</Text>
      <Text style={styles.topicos}>8. Leve ao forno por 40 minutos.</Text>
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
