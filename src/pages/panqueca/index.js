import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/panqueca.png')} />
        <Text style={styles.paragraph}>
          Panqueca Americana
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 Ovo.</Text>
        <Text style={styles.topicos}>- 1 Colher de açúcar.</Text>
        <Text style={styles.topicos}>- 3/4 Colheres de leite.</Text>
        <Text style={styles.topicos}>- 4 Colheres de farinha de trigo.</Text>
        <Text style={styles.topicos}>- Essência de baunilha</Text>
        <Text style={styles.topicos}>- Fermento</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em uma tigela coloque o ovo e o açúcar e mexe bem.</Text>

      <Text style={styles.topicos}>2. Depois acrescente o leite e a essência de baunilha.</Text>

      <Text style={styles.topicos}>3. Adicione a farinha de trigo e o fermento e mexe até virar uma mistura homogenia.</Text>
      <Text style={styles.topicos}>4. Em uma frigideira ligada em fogo baixo vai colocando a mistura até ficar da forma de uma panqueca.</Text>

      <Text style={styles.topicos}>5. Quando dourar um lado vire e espera dourar o outro também. </Text>

      <Text style={styles.topicos}>6. Sirva como preferir (acrescentando chocolate derretido, ou mel e frutas e varias outras possibilidades).</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8c7cc',
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
    color: '#6E789C',
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
    color: '#6E789C',
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
