import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pasta.png')} />
        <Text style={styles.paragraph}>
          Macarrão
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (6 porções):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 pacote de macarrão tipo parafuso (500g).</Text>
      <Text style={styles.topicos}>- 3 litros de água.</Text>
      <Text style={styles.topicos}>- 3 colheres (sopa) de óleo.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de sal.</Text>
      <Text style={styles.topicos}>- 1 cebola picada.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de azeite.</Text>
      <Text style={styles.topicos}>- 1 lata de milho verde (escorrido).</Text>
      <Text style={styles.topicos}>- 1 vidro pequeno de champignon (230g).</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de azeitonas pretas sem caroço.</Text>
      <Text style={styles.topicos}>- 1 lata de ervilha (escorrida).</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de cebolinha picada.</Text>
      <Text style={styles.topicos}>- Sal e pimenta-do-reino a gosto.</Text>
      <Text style={styles.topicos}>- 300g de queijo branco cortado em cubos.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Cozinhe o macarrão na água com o óleo e o sal por 20 minutos ou até ficar "al dente".</Text>

      <Text style={styles.topicos}>2. Escorra e reserve. Em uma panela, em fogo médio, frite a cebola no azeite até dourar.</Text>

        <Text style={styles.topicos}>3. Acrescente o milho, o champignon e as azeitonas. Deixe refogar por 5 minutos. Junte a ervilha e a cebolinha.</Text>

        <Text style={styles.topicos}>4. Tempere com sal e pimenta e retire do fogo.</Text>

      <Text style={styles.topicos}>5. Coloque o macarrão cozido em um refratário e adicione o molho, misturando bem.</Text>
      
      <Text style={styles.topicos}>6. Despeje o queijo em cubos e leve ao forno médio, preaquecido, por 10 minutos. Sirva em seguida.</Text>

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
