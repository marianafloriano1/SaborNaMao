import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pudim2.png')} />
        <Text style={styles.paragraph}>
          Cuscus
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de azeite</Text>
      <Text style={styles.topicos}>- 1 lata ou caixa de molho de tomate</Text>
      <Text style={styles.topicos}>- 1 lata de ervilha</Text>
      <Text style={styles.topicos}>- 1 pimentão</Text>
      <Text style={styles.topicos}>- cheiro-verde a gosto</Text>
      <Text style={styles.topicos}>- 1 tablete de caldo de legumes ou do seu sabor preferido</Text>
      <Text style={styles.topicos}>- 3 ovos cozidos</Text>
      <Text style={styles.topicos}>- 1 cebola picada</Text>
      <Text style={styles.topicos}>- 2 latas de água</Text>
      <Text style={styles.topicos}>- 1 lata de milho verde</Text>
      <Text style={styles.topicos}>- 2 latas de sardinha ou atum</Text>
      <Text style={styles.topicos}>- sal</Text>
      <Text style={styles.topicos}>- 3 xícaras de farinha de milho grossa</Text>
      <Text style={styles.topicos}>- tomate para decorar</Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Refogue no azeite, a cebola, o pimentão, as azeitonas, a ervilha, o milho verde, o molho de tomate, o cheiro-verde, a sardinha, os temperos e o tablete de caldo.</Text>
      <Text style={styles.topicos}>2. Coloque a água, deixe ferver, coloque a farinha de milho e cozinhe. </Text>
      <Text style={styles.topicos}>3. Unte a forma com azeite, e coloque os ovos, os tomates e a sardinha por baixo.</Text>
      <Text style={styles.topicos}>4.  Coloque a massa na forma, deixe esfriar e desenforme.</Text>

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
