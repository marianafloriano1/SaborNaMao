import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/farofa.png')} />
        <Text style={styles.paragraph}>
          Farofa De Ovo
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 300 g de farinha de mandioca.</Text>
      <Text style={styles.topicos}>- 4 colheres de manteiga.</Text>
      <Text style={styles.topicos}>- 5 ovos.</Text>
      <Text style={styles.topicos}>- 1 colher de sal.</Text>
      <Text style={styles.topicos}>- 1 cebola.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Corte em pedacinhos a cebola.</Text>
      <Text style={styles.topicos}>2. Coloque em uma frigideira junto com a manteiga.</Text>
      <Text style={styles.topicos}>3. Deixa dourar.</Text>
      <Text style={styles.topicos}>4. Adicione o sal e o ovo e mexa até fritar.</Text>
      <Text style={styles.topicos}>5. Acrescente aos poucos a farinha.</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb9a',
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
    color: '#e48a55',
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
    color: '#e48a55',
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
