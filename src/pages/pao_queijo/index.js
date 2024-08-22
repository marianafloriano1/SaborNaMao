import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pao_de_queijo.png')} />
        <Text style={styles.paragraph}>
          Pão De Quando Vegano
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 xícara de chá de batata cozida.</Text>
        <Text style={styles.topicos}>- 2 xícaras de chá de polvilho doce.</Text>
        <Text style={styles.topicos}>- 1/2 xícara de chá de polvilho azedo.</Text>
        <Text style={styles.topicos}>- 1/2 xícara de chá de água morna.</Text>
        <Text style={styles.topicos}>- 1/3 de xícara de chá de azeite.</Text>
        <Text style={styles.topicos}>- Sal a gosto.</Text>

      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um recipiente, coloque a batata cozida e amasse bem com um garfo até ficar um purê bem macio.</Text>
      <Text style={styles.topicos}>2. Adicione os ingredientes líquidos: o azeite e a água morna. Misture.</Text>
      <Text style={styles.topicos}>3. Acrescente o polvilho doce, o salgado e o sal. Misture bem com as mãos.</Text>
      <Text style={styles.topicos}>4. Misture até a massa ficar homogênea, firme e que estica um pouco sem despedaçar.</Text>
      <Text style={styles.topicos}>5. Pegue porções da massa e molde em bolinhas pequenas.</Text>
      <Text style={styles.topicos}>6. Em uma forma untada com óleo, disponha as bolinhas com uma distância entre elas e leve ao forno preaquecido a 230 ºC por cerca de 15 minutos.</Text>
      <Text style={styles.topicos}>7. Agora é só servir. Bom apetite!</Text>
      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb8cd',
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
