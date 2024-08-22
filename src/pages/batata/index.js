import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/batatas.png')} />
        <Text style={styles.paragraph}>
          Batata Frita (no forno)
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1/2 copo de água.</Text>
      <Text style={styles.topicos}>-2 colheres de sopa de orégano.</Text>
      <Text style={styles.topicos}>-1 kg de batata inglesa.</Text>
      <Text style={styles.topicos}>-1/4 de copo de azeite de oliva.</Text>
      <Text style={styles.topicos}>- 1/2 colher de sopa de sal.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
    <Text style={styles.topicos}>1. Lave bem as batatas e cozinhe-as com casca, até que você consiga espetar um garfo sem rachá-las.</Text>
      <Text style={styles.topicos}>2. Deixe esfriar, e então descasque.</Text>
      <Text style={styles.topicos}>3. Corte em rodelas, palitos ou cubinhos (como preferir).</Text>
       <Text style={styles.topicos}>4. Bata no liquidificador os ingredientes (exceto a batata) até ficarem bem misturados.</Text>
       <Text style={styles.topicos}>5. Coloque este líquido em uma tigela.</Text>
       <Text style={styles.topicos}>6. Passe os pedaços de batatas neste líquido, retirando o excesso de preparo que vier junto com as batatas.</Text>
       <Text style={styles.topicos}>7. Coloque-os lado a lado em uma forma untada (não é preciso deixar espaço entre os pedaços, mas não coloque um em cima do outro) leve ao forno quente até dourar.</Text>
       <Text style={styles.topicos}>8. Sirva em seguida</Text>
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
