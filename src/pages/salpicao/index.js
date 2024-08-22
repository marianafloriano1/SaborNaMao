import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/salpicao.png')} />
        <Text style={styles.paragraph}>
          Salpicão De Frango
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 500 g de peito de frango cozido e desfiado.</Text>
      <Text style={styles.topicos}>- 1 lata de ervilha.</Text>
      <Text style={styles.topicos}>- 200 g de uva passa.</Text>
      <Text style={styles.topicos}>- Maionese a gosto.</Text>
      <Text style={styles.topicos}>- Batata palha a gosto.</Text>
      <Text style={styles.topicos}>- 2 cenouras grandes raladas.</Text>
      <Text style={styles.topicos}>- 1 lata de milho verde.</Text>
      <Text style={styles.topicos}>- 1 maçã.</Text>
      <Text style={styles.topicos}>- Cheiro-verde a gosto.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Misture todos os ingredientes em uma vasilha grande, menos a batata palha.</Text>
      <Text style={styles.topicos}>2. Depois de tudo misturado, forre com a batata palha.</Text>
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
