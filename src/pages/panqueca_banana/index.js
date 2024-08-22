import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/panquecaa.png')} />
        <Text style={styles.paragraph}>
          Panquequinha De Banana
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1 banana madura pequena.</Text>
      <Text style={styles.topicos}>- 1 ovo.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Amasse a banana em uma tigela.</Text>

      <Text style={styles.topicos}>2. Adicione o ovo e misture até misturar bem.</Text>

      <Text style={styles.topicos}>3. Lubrifique levemente uma frigideira antiaderente e aqueça em fogo médio.</Text>

      <Text style={styles.topicos}>4. Coloque 1-2 colheres de sopa de massa na panela.</Text>

      <Text style={styles.topicos}>5. Assim que as panquecas estiverem cozidas o suficiente para que você possa colocar uma nadadeira de panqueca por baixo sem quebrar as panquecas, vire e cozinhe o outro lado até dourar.</Text>

      <Text style={styles.topicos}>6. Sirva e aproveite!</Text>

      <Text style={styles.sectionTitle}>Atenção!</Text>

      <Text style={styles.topicos}>- Adequado a partir de 6 meses.</Text>
      
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
