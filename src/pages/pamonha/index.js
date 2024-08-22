import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pamonha.png')} />
        <Text style={styles.paragraph}>
        Pamonha Salgada
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 10 espigas de milho com as palhas.</Text>
      <Text style={styles.topicos}>- 200 ml de óleo.</Text>
      <Text style={styles.topicos}>- 1 Pitada de açúcar.</Text>
      <Text style={styles.topicos}>- 10 Tiras de queijo qualho.</Text>
      <Text style={styles.topicos}>- 1 Colher de sopa de sal.</Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Descasque o milho, separando as palhas boas, maiores e limpas.</Text>
      <Text style={styles.topicos}>2. Rale as espigas ou retire os grão cortando com uma faca e bata no liquidificador para chegar ao mesmo efeito de milho ralado.</Text>
      <Text style={styles.topicos}>3. Coe o milho ralado em uma peneira grossa.</Text>
      <Text style={styles.topicos}>4. Acrescente o óleo bastante quente, o sal e o açúcar.</Text>
      <Text style={styles.topicos}>5. Pegue a palha limpa e sem defeitos, dobre-a formando um copinho.</Text>
      <Text style={styles.topicos}>6. Coloque a tira do queijo no meio da massa.</Text>
      <Text style={styles.topicos}>7. Pegue outra palha para fechar o copinho, da mesma maneira.</Text>
      <Text style={styles.topicos}>8. Amarre com tiras da própria palha, com liga de borracha ou barbante.</Text>
      <Text style={styles.topicos}>9. Deixe as pamonhas em água fervente por 30 minutos e pronto.</Text>
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