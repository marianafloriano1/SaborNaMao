import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bombom.png')} />
        <Text style={styles.paragraph}>
          Bombom De Banana Vegano
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 2 bananas.</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de mel (ou xilitol).</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de leite em pó (ou Whey).</Text>
        <Text style={styles.topicos}>- Canela a gosto.</Text>
        <Text style={styles.topicos}>- Chocolate 70% o quanto bastar.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um recipiente, amassa bem as bananas e transfira para uma panela.</Text>
      <Text style={styles.topicos}>2. Adicione o mel, o leite em pó, misture, ligue o fogo baixo e mexa.</Text>
      <Text style={styles.topicos}>3. Acrescente a canela, misture e deixe cozinhar até reduzir pela metade.</Text>
      <Text style={styles.topicos}>4. Desligue o fogo, transfira para uma travessa e deixe esfriar.</Text>
      <Text style={styles.topicos}>5. Corte em quadradinhos (ou em outro formato que preferir).</Text>
      <Text style={styles.topicos}>6. Derreta o chocolate no micro-ondas (ou em banho-maria) e banhe cada bombom.</Text>
      <Text style={styles.topicos}>7. Leve para a geladeira para o chocolate endurecer.</Text>
      <Text style={styles.topicos}>8. Sirva em seguida. Bom apetite!</Text>
      
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
