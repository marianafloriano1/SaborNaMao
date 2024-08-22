import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/papinha.png')} />
        <Text style={styles.paragraph}>
          Papinha De Carne, Batata e Abóbora
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1 colher de sobremesa de óleo.</Text>
      <Text style={styles.topicos}>- 1/2 cebola picada.</Text>
      <Text style={styles.topicos}>- 1 dente de alho pequeno.</Text>
      <Text style={styles.topicos}>- 2 colheres de sopa de carne moída.</Text>
      <Text style={styles.topicos}>- 1 batata pequena cortada em cubos.</Text>
      <Text style={styles.topicos}>- 1 inhame pequeno cortado em cubos.</Text>
      <Text style={styles.topicos}>- 2 colheres de abóbora cortada em cubos.</Text>
      
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Em uma panela, aqueça o óleo e refogue a cebola, o alho e a carne moída.</Text>

      <Text style={styles.topicos}>2. Em seguida, acrescente a batata, o inhame e abóbora.</Text>

      <Text style={styles.topicos}>3. Cubra com água, tampe a panela e cozinhe até que todos os ingredientes estejam bem macios e com um pouco de caldo.</Text>

      <Text style={styles.topicos}>3. Amasse todos os ingredientes com um garfo e sirva.</Text>

      <Text style={styles.sectionTitle}>Atenção!</Text>

      <Text style={styles.topicos}>- Para saber a consistência ideal dos alimentos para cada fase de seu bebê, consulte um médico pediatra ou um nutricionista.</Text>

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
