import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/copo-de-vinho.png')} />
        <Text style={styles.paragraph}>
        Quentão
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 1 Copo de açúcar</Text>
      <Text style={styles.topicos}>- Cravo</Text>
      <Text style={styles.topicos}>- 1/2 Litro de água</Text>
      <Text style={styles.topicos}>- Canela em rama</Text>
      <Text style={styles.topicos}>- 1 Litro de vinho tinto seco</Text>
      <Text style={styles.topicos}>- 1/2 Maçã (verde ou vermelha) descascada e cortada em fatias</Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Queime a metade do açúcar com o cravo e a canela.</Text>
      <Text style={styles.topicos}>2. Acrescente o vinho, já misturado com a água.</Text>
      <Text style={styles.topicos}>3. Junte a maçã e o açúcar restante.</Text>
      <Text style={styles.topicos}>4. Deixe cozinhar um pouco e sirva bem quente.</Text>

          <Text style={styles.sectionTitle}>Dica:</Text>
      <Text style={styles.topicos}>- Copo termico de isopor para servir em festas sem queimar a mão</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d698a6',
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
    color: '#be6e80',
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
    color: '#be6e80',
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