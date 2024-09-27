import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/camarao.png')} />
        <Text style={styles.paragraph}>
          Bobó de Camarão
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 1 kg de camarão fresco</Text>
      <Text style={styles.topicos}>- 3 dentes de alho picados e amassados</Text>
      <Text style={styles.topicos}>- pimenta-do-reino</Text>
      <Text style={styles.topicos}>- 3 cebolas (1 cortada em rodelas e 2 raladas)</Text>
      <Text style={styles.topicos}>- 6 colheres (sopa) de azeite de oliva</Text>
      <Text style={styles.topicos}>- 1 maço de cheiro-verde picado</Text>
      <Text style={styles.topicos}>- 2 pimentões verdes bem picadinhos</Text>
      <Text style={styles.topicos}>- sal</Text>
      <Text style={styles.topicos}>- suco de 1 limão</Text>
      <Text style={styles.topicos}>- 1 kg de mandioca (prefira as que já vem embaladas e descascadas, é mais prático)</Text>
      <Text style={styles.topicos}>- 1 folha de louro</Text>
      <Text style={styles.topicos}>- 2 vidros de leite de coco</Text>
      <Text style={styles.topicos}>- 2 latas de molho pronto de tomate</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de azeite de dendê</Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Lave os camarões e tempere com sal, alho, pimenta e limão, deixe marinar.</Text>
      <Text style={styles.topicos}>2. Pegue uma panela com água e cozinhe a mandioca em pedacinhos, com louro e a cebola em rodelas.</Text>
      <Text style={styles.topicos}>3. Quando estiver mole, acrescente um vidro de leite de coco.</Text>
      <Text style={styles.topicos}>4. Deixe esfriar um pouco e bata no liquidificador.</Text>
      <Text style={styles.topicos}>5. Esquente o azeite de oliva, junte a cebola ralada e deixe dourar.</Text>
      <Text style={styles.topicos}>6. Acrescente os camarões e frite.</Text>
      <Text style={styles.topicos}>7. Adicione as 2 latas de pomarola, o cheiro-verde, o pimentão e deixe cozinhar por alguns minutos.</Text>
      <Text style={styles.topicos}>8. Junte na mesma panela, a mandioca batida no liquidificador, outro vidro de leite de coco e o azeite de dendê.</Text>
      <Text style={styles.topicos}>9. Deixe levantar fervura e está pronto.</Text>

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