import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/cupcake.png')} />
        <Text style={styles.paragraph}>
          Cupcake de Morango
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (massa):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 1/2 pacotes (300 g) de manteiga sem sal.</Text>
      <Text style={styles.topicos}>- 1 1/2 xícaras de chá de açúcar.</Text>
      <Text style={styles.topicos}>-6 ovos.</Text>
      <Text style={styles.topicos}>-1 colher de sopa de fermento em pó.</Text>
      <Text style={styles.topicos}>-3 1/2 xícaras de farinha de trigo.</Text>
      <Text style={styles.topicos}>- Meia colher de (chá) de fermento em pó.</Text>
      <Text style={styles.topicos}>- 100g de gotas de chocolate ao leite.</Text>
      <Text style={styles.topicos}>-Geleia de morango (recheio).</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
    <Text style={styles.topicos}>1. Massa: Bata a manteiga com o açúcar ate obter creme claro e fofo. Junte os ovos, um a um, batendo sempre ate obter um creme homogêneo.</Text>

    <Text style={styles.topicos}>2. Acrescente a farinha peneirada com o fermento e misture delicadamente.</Text>

    <Text style={styles.topicos}>3. Nas formas próprias para cupcakes com as cavidades forrada com forminhas de papel, distribua a massa, sobre esta coloque 1 colher de chá de geleia de morango e cubra com um pouco de massa.</Text>

    <Text style={styles.topicos}>4. Leve para assar em forno médio (180ºC), pré-aquecido. Deixe esfriar.</Text> 

      <Text style={styles.topicos}>5. Cobertura: Bata a manteiga até ficar cremosa. </Text>
      <Text style={styles.topicos}>6. Adicione o leite condensado em fio até obter um creme fofo.</Text>
      <Text style={styles.topicos}>7. Acrescente o achocolatado sabor morango e bata muito bem.</Text>
      <Text style={styles.topicos}>8. Coloque no saco de confeiteiro e decore os cupcakes.</Text> 
      <Text style={styles.topicos}>9. Se preferir jogue por cima da cobertura M&M's ou confetes, as crianças adoram.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdd7d1',
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
    color: '#ff8f7e',
    marginLeft: 10,
    
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
    color: '#ff8f7e',
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
