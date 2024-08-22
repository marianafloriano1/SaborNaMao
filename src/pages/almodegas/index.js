import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/almondegas.png')} />
        <Text style={styles.paragraph}>
          Almondegas De Carne De Jaca
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 cebola.</Text>
        <Text style={styles.topicos}>- 1 tomate.</Text>
        <Text style={styles.topicos}>- 4 dente de alho.</Text>
        <Text style={styles.topicos}>- Sal a gosto.</Text>
        <Text style={styles.topicos}>- Pimenta-do-reino a gosto.</Text>
        <Text style={styles.topicos}>- Ervas a gosto.</Text>
        <Text style={styles.topicos}>- 300 g de carne de jaca desfiada/cozida.</Text>
        <Text style={styles.topicos}>- 1 colher de sobremesa de chia.</Text>
        <Text style={styles.topicos}>- 2/3 de xícara de chá de farinha de baru.</Text>
        <Text style={styles.topicos}>- Farinha para empanar.</Text>
        <Text style={styles.topicos}>- 500 ml de molho de tomate.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um processador ou liquidificador, coloque a cebola, o tomate, o alho, o sal, a pimenta, as ervas e bata bem.</Text>
      <Text style={styles.topicos}>2. Adicione a carne de jaca e triture um pouco.</Text>
      <Text style={styles.topicos}>3. Transfira para uma tigela e adicione a chia, a farinha de baru e misture.</Text>
      <Text style={styles.topicos}>4. Modele bolinhas de almôndega e passe na farinha para empanar.</Text>
      <Text style={styles.topicos}>5. Coloque as almôndegas no molho de tomate e deixe por dez minutos descansando.</Text>
      <Text style={styles.topicos}>6. Adicione o molho de tomate: Coloque o molho de tomate por cima da mistura de arroz.</Text>
      <Text style={styles.topicos}>7. Cozinhe por dez minutos e está pronto.</Text>
      <Text style={styles.topicos}>8. Bom apetite.</Text>
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
