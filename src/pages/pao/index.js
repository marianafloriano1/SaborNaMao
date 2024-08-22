import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bread.png')} />
        <Text style={styles.paragraph}>
          Pãozinho De Batata Doce
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1 batata doce pequena cozida e amassada.</Text>
      <Text style={styles.topicos}>- 2 colheres de sopa de queijo ralado.</Text>
      <Text style={styles.topicos}>- 2 colheres de sopa de goma de tapioca.</Text>
      
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Misture tudo e modele as bolinhas.</Text>

      <Text style={styles.topicos}>2. Pincele azeite e leve pra assar em forno convencional ou airfryer por 20 minutos a 180°C.</Text>

      <Text style={styles.topicos}>3. Sirva e aproveite!</Text>

      <Text style={styles.sectionTitle}>Atenção!</Text>

      <Text style={styles.topicos}>- Pode oferecer ao bebê a partir de 1 ano!</Text>
      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1dbcf',
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
    color: '#609f84',
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
    color: '#609f84',
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
