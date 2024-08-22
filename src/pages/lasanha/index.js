import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/lasanha.png')} />
        <Text style={styles.paragraph}>
          Lasanha
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (5 porções):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 pacote de massa fresca para lasanha (500g).</Text>
      <Text style={styles.topicos}>- 300g de queijo mussarela fatiado.</Text>
      <Text style={styles.topicos}>- 50g de queijo parmesão ralado.</Text>

      <Text style={styles.sectionTitle}>Ingredientes Molho:</Text>
      <Text style={styles.topicos}>- 4 colheres (sopa) de azeite.</Text>
      <Text style={styles.topicos}>- 1 cebola picada.</Text>
      <Text style={styles.topicos}>- 2 dentes de alho picados.</Text>
      <Text style={styles.topicos}>- 1/2 pimentão amarelo picado.</Text>
      <Text style={styles.topicos}>- 1 cenoura picada.</Text>
      <Text style={styles.topicos}>- 200g de vagem picada.</Text>
      <Text style={styles.topicos}>- 1 abobrinha italiana picada.</Text>
      <Text style={styles.topicos}>- 1 berinjela picada.</Text>
      <Text style={styles.topicos}>- 200g de ervilha fresca congelada.</Text>
      <Text style={styles.topicos}>- 2 latas de tomate pelado picado.</Text>
      <Text style={styles.topicos}>- Sal e manjericão a gosto.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Para o molho, aqueça uma panela com o azeite, em fogo médio, e frite a cebola, o alho e o pimentão por 2 minutos.</Text>
      <Text style={styles.topicos}>2. Adicione a cenoura, a vagem, a abobrinha, a berinjela, a ervilha e refogue por 5 minutos.</Text>
        <Text style={styles.topicos}>3. unte o tomate pelado, sal e cozinhe até encorpar. Misture manjericão e desligue. </Text>
        <Text style={styles.topicos}>4. Em um refratário médio, intercale camadas de molho, de massa, de molho e de mussarela, terminando em molho.</Text>
      <Text style={styles.topicos}>5. Polvilhe com o parmesão e leve ao forno médio, preaquecido, por 30 minutos ou até gratinar. Retire e sirva.</Text>
      
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
