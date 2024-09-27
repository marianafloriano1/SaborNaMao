import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/coelhinho.png')} />
        <Text style={styles.paragraph}>
          Bobó de Camarão
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 250 gramas de chocolate meio amargo em pedaços</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de chocolate branco picado</Text>
      <Text style={styles.topicos}>- gota de corante comestível (anilina) variado a gosto </Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Derreta o chocolate meio amargo no micro-ondas por 3 minutos na potência média. </Text>
      <Text style={styles.topicos}>2. Retire do forno e mexa até acabar de derreter. </Text>
      <Text style={styles.topicos}>3. Transfira para um refratário limpo e bem seco, e mexa o chocolate até que, ao encostar um pouco nos lábios, dê a sensação de frio. </Text>
      <Text style={styles.topicos}>4. Preencha formas para pirulito no formato de coelhinhos com o chocolate derretinho e coloque o palito para no lugar indicado.</Text>
      <Text style={styles.topicos}>5. Leve à geladeira e deixe secar até a forma ficar opaca. </Text>
      <Text style={styles.topicos}>6. Retire a forma da geladeira e desenforme com cuidado. </Text>
      <Text style={styles.topicos}>7. Deixe secar completamente. </Text>
      <Text style={styles.topicos}>8. Derreta o chocolate branco no banho-maria e retire do fogo. </Text>
      <Text style={styles.topicos}>9. Use o chocolate branco para fazer os detalhes do coelho. </Text>
<Text style={styles.topicos}>9. Deixe secar na temperatura ambiente por 1 hora.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#e0b9df',
    padding: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
 fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    color: '#c780c5',
    
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 30,
  },
  ingredientes:{
    marginTop: 50,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#c780c5',
  },
  topicos:{
  
  }
});