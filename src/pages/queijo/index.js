import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bolinha_queijo.png')} />
        <Text style={styles.paragraph}>
          Bolinha de Queijo na Air Fryer
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 400 g de queijo ralado grosso de fácil derretimento.</Text>
      <Text style={styles.topicos}>- 4 colheres de sopa de amido de milho.</Text>
      <Text style={styles.topicos}>- 1 ovo.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de sal.</Text>
      <Text style={styles.topicos}>- 1 cebola picada.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de azeite.</Text>
      <Text style={styles.topicos}>- 1 lata de milho verde (escorrido).</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Em um recipiente grande, adicione todos os ingredientes e misture bem, com as mãos, até formar uma massa lisinha e que não grude.</Text>

      <Text style={styles.topicos}>2. Pegue pequenas porções da massa e forme bolinhas.</Text>

        <Text style={styles.topicos}>3. Transfira para a air fryer, preaquecida a 180 ºC, por cerca de 20 minutos ou até dourarem.</Text>

        <Text style={styles.topicos}>4. Agora é só servir.</Text>

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
