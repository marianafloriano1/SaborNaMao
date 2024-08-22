import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/torta.png')} />
        <Text style={styles.paragraph}>
          Torta Salgada
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (8 porções):</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 12 colheres de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 3 ovos inteiros.</Text>
      <Text style={styles.topicos}>- 2 copos de leite.</Text>
      <Text style={styles.topicos}>- 100 g de mussarela ralada (opcional).</Text>
      <Text style={styles.topicos}>- 1 copo de óleo.</Text>
      <Text style={styles.topicos}>- sal a gosto.</Text>
      <Text style={styles.topicos}>- 1 colher de fermento.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Bata todos os ingredientes no liquidificador.</Text>
      <Text style={styles.topicos}>2. Depois coloque a metade da massa em uma forma untada e coloque o recheio. </Text>
      <Text style={styles.topicos}>3. Depois coloque o resto da massa.</Text>
      <Text style={styles.topicos}>4. Leve para assar até ficar dourado.</Text>
      <Text style={styles.topicos}>5. Recheio a gosto (ex frango, sardinha, etc).</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8a0',
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
    color: '#dfc265',
    marginLeft: 30,
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
    color: '#dfc265',
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
