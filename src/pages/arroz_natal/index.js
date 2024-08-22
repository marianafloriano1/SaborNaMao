import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/arroz_natal.png')} />
        <Text style={styles.paragraph}>
          Arroz de Forno Natalino
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
          <Text style={styles.topicos}>3 xícaras de arroz cozido.</Text>
      <Text style={styles.topicos}>1 peito de frango cozido e desfiado.</Text>
      <Text style={styles.topicos}>1 cebola média picada em rodelas.</Text>
      <Text style={styles.topicos}>1/2 xícara de batata palha.</Text>
      <Text style={styles.topicos}>2 colheres (sopa) de molho de tomate.</Text>
      <Text style={styles.topicos}>sal a gosto.</Text>
      <Text style={styles.topicos}>1 lata de seleta de legumes (milho, ervilha, batata, cenoura etc).</Text>
      <Text style={styles.topicos}>2 tomates picados em cubos.</Text>
      <Text style={styles.topicos}>1 copo de requeijão.</Text>
      <Text style={styles.topicos}>1/2 xícara de queijo mussarela ralado.</Text>
      <Text style={styles.topicos}>1 colher (sopa) de óleo.</Text>
      <Text style={styles.topicos}>pimenta-do-reino a gosto.</Text>
      <Text style={styles.topicos}>Salsa e cebolinha a gosto.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Misture o conteúdo da lata de seleta de legumes com o arroz cozido, sem levar ao fogo e reserve.</Text>
         <Text style={styles.topicos}>2. Refogue a cebola no óleo, junte o tomate picado, o peito de frango desfiado e as 2 colheres de molho de tomate.</Text>

 <Text style={styles.topicos}>3. Tempere com sal e pimenta-do-reino a gosto.</Text>
<Text style={styles.topicos}>4. Em um refratário faça uma camada de arroz, uma de requeijão e uma de molho e repita novamente a mesma sequência, terminando com a última camada de arroz..</Text>
<Text style={styles.topicos}>5. Sobre as camadas prontas, espalhar a batata palha e o queijo ralado.</Text>
<Text style={styles.topicos}>6. Levar ao forno médio por no máximo 15 minutos ou no micro-ondas na potência alta por no máximo 6 minutos.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb9a',
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
    color: '#e48a55',
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
    color: '#e48a55',
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
