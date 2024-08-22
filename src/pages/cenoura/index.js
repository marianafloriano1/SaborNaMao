import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/cenoura.png')} />
        <Text style={styles.paragraph}>
          Suco De Cenoura com Laranja (opcional)
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 4 laranjas médias (opcional).</Text>
        <Text style={styles.topicos}>- açúcar a gosto.</Text>
        <Text style={styles.topicos}>- 2 cenouras pequenas.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Coloque as cenouras e as laranjas na geladeira para que fiquem bem geladas.</Text>

      <Text style={styles.topicos}>2. Esprema as laranjas em um espremedor e coloque o suco em um liquidificador.</Text>
      <Text style={styles.topicos}>3. Lave bem e raspe as cenouras, corte em rodelas e acrescente ao suco de laranja. </Text>
      <Text style={styles.topicos}>4. Bata para incorporar bem os ingredientes e adicione açúcar conforme o gosto.</Text>
      <Text style={styles.topicos}>5. Sirva.</Text>
      <Text style={styles.topicos}>6. Quem preferir o suco sem o bagaço das laranjas é só passar por uma peneira ou utilizar uma centrifuga.</Text>

      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc19a',
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
    color: '#d6705d',
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
    color: '#d6705d',
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
