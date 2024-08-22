import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bolinho.png')} />
        <Text style={styles.paragraph}>
          Bolinho De Arroz
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 2 xícaras (chá) de arroz cozido.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de leite.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de fermento em pó.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de queijo ralado.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de cheiro-verde picado.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de amido de milho.</Text>
      <Text style={styles.topicos}>- 3 ovos</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um recipiente, misture todos os ingredientes até criar uma massa firme e encorpada.</Text>
         <Text style={styles.topicos}>2. Molde os bolinhos e frite-os no óleo quente, até que fiquem dourados.</Text>

 <Text style={styles.topicos}>3. Escorra sobre papel toalha.</Text>

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
