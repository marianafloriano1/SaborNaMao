import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bolochoco.png')} />
        <Text style={styles.paragraph}>
          Bolo de Caneca
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 2 ovos</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de açúcar.</Text>
      <Text style={styles.topicos}>- 3 colheres (sopa) de manteiga ou margarina em temperatura ambiente.</Text>
      <Text style={styles.topicos}>- 3 colheres (sopa) de leite.</Text>
      <Text style={styles.topicos}>- 3 colheres (sopa) de achocolatado em pó.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 1/2 colher (chá) de fermento em pó.</Text>
      <Text style={styles.topicos}>- Margarina e farinha de trigo para untar.</Text>
      <Text style={styles.sectionTitle}>Calda:</Text>
      <Text style={styles.topicos}>- 5 colheres (sopa) de açúcar.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de achocolatado em pó.</Text>
      <Text style={styles.topicos}>- 1 colher (chá) de margarina.</Text>
       <Text style={styles.topicos}>- 1 colher (sopa) de leite.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Em uma tigela, misture com uma colher de pau os ovos, o açúcar, a manteiga e o leite. </Text>
        <Text style={styles.topicos}>2. Adicione a farinha e o achocolatado peneirados e misture até homogeneizar.</Text> 
        <Text style={styles.topicos}>3. Acrescente o fermento e misture delicadamente.</Text>
        <Text style={styles.topicos}>4. Despeje a massa até a metade da capacidade de uma caneca de 250ml e leve ao forno micro-ondas, em temperatura média, por 3 minutos.</Text> 
        <Text style={styles.topicos}>5. Deixe descansar por 5 minutos.</Text> 
        <Text style={styles.topicos}>6. Misture todos os ingredientes da calda em uma tigela e leve ao microondas, em potência média, por 3 minutos. </Text>
        <Text style={styles.topicos}>7. Despeje nas canecas e sirva.</Text> 
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
