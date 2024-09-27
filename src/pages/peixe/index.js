import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/peixe.png')} />
        <Text style={styles.paragraph}>
          Peixe Grelhado
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 2 filés de pescada (cerca de 90 g cada)</Text>
      <Text style={styles.topicos}>- ¼ de xícara (chá) de fubá (ou farinha de trigo)</Text>
      <Text style={styles.topicos}>- 2 colheres (chá) de azeite</Text>
      <Text style={styles.topicos}>- sal</Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Tire os filés da geladeira 10 minutos antes de grelhar.  </Text>
      <Text style={styles.topicos}>2. Seque bem os filés com papel-toalha e tempere com sal a gosto. </Text>
      <Text style={styles.topicos}>3. Coloque o fubá num prato raso, passe os dois lados dos filés de peixe no fubá e bata bem para tirar o excesso.</Text>
      <Text style={styles.topicos}>4.  Regue a frigideira com o azeite e coloque os filés, um ao lado do outro, com o lado mais plano (onde estava a pele) para baixo. Deixe grelhar, sem mexer, até que eles estejam bem dourados e soltos da frigideira, por cerca de 4 minutos.</Text>
      <Text style={styles.topicos}>5. Com uma espátula de peixe, vire os filés com cuidado para não quebrar (se preferir, utilize um garfo como apoio) e deixe grelhar por apenas 1 minuto do outro lado </Text>

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
