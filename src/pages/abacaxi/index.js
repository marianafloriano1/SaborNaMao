import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/abacaxi.png')} />
        <Text style={styles.paragraph}>
          Suco De Abacaxi com Hortelã
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1/2 xícara (chá) de abacaxi em cubos sem o miolo.</Text>
        <Text style={styles.topicos}>- 3/4 de xícara (chá) de água.</Text>
        <Text style={styles.topicos}>- 5 folhas de hortelã.</Text>
        <Text style={styles.topicos}>- açúcar e gelo a gosto.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. No liquidificador, junte o abacaxi, a água e as folhas de hortelã (se quiser adicione açúcar).</Text>

      <Text style={styles.topicos}>2. Bata até ficar liso.</Text>

      <Text style={styles.topicos}>3. Transfira para um copo, acrescente cubos de gelo e sirva a seguir.</Text>
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
