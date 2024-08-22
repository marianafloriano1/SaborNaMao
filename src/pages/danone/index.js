import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/iogurt.png')} />
        <Text style={styles.paragraph}>
          Danoninho
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 10 morangos.</Text>
      <Text style={styles.topicos}>- 1 pacote de gelatina incolor.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de biomassa de banana verde.</Text>
      <Text style={styles.topicos}>- 1 pote de iogurte natural.</Text>
       <Text style={styles.topicos}>- 1 colher (sopa) de mel.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Higienize os morangos e bata-os no liquidificador com o iogurte, a biomassa de banana verde, o mel e reserve.</Text>

        <Text style={styles.topicos}>2. Hidrate a gelatina conforme instruções da embalagem e bata no liquidificador junto com os demais ingredientes.</Text>

        <Text style={styles.topicos}>3. Distribua em pequenas fôrmas e leve para geladeira por, no mínimo, 3 horas.</Text>
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
