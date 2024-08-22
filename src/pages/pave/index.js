import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pave.png')} />
        <Text style={styles.paragraph}>
          Pavê de Chocolate
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 2 latas de leite condensado.</Text>
      <Text style={styles.topicos}>- 8 colheres (sopa) de chocolate em pó.</Text>
      <Text style={styles.topicos}>- 1 pacote de biscoito maisena (200g).</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Coloque o leite condensado e o chocolate em pó no liquidificador e bata em velocidade alta por 3 minutos ou até ficar com aspecto cremoso.</Text> 
      <Text style={styles.topicos}>2. Transfira para uma tigela e leve à geladeira por 2 horas.</Text>
      <Text style={styles.topicos}>3. Para a montagem, em um refratário pequeno, faça camadas de creme de chocolate e de biscoito maisena até terminarem os ingredientes, finalizando em creme.</Text> 
      <Text style={styles.topicos}>4. Cubra e leve à geladeira por mais 4 horas.</Text> 
      <Text style={styles.topicos}>5. Retire e sirva, se desejar, decorado com raspas de chocolate.</Text>
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
