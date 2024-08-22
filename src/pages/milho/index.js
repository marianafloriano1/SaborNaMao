import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/milho.png')} />
        <Text style={styles.paragraph}>
        Milho Cozido
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 5 espigas de milho-verde, cortadas ao meio (1 kg).</Text>
      <Text style={styles.topicos}>- 2 litros de água.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de manteiga sem sal.</Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em uma panela de pressão, coloque o milho e a água.</Text>
      <Text style={styles.topicos}>2. Tampe a panela e cozinhe por 15 minutos, em fogo médio, após o início da fervura.</Text>
      <Text style={styles.topicos}>3. Desligue o fogo e espere a pressão ceder.</Text>
      <Text style={styles.topicos}>4. Abra a panela, escorra a água do cozimento e retire o milho.</Text>
      <Text style={styles.topicos}>5. Unte uma assadeira grande de buraco no meio com óleo e açúcar (de preferência cristal).</Text>
      <Text style={styles.topicos}>6. Espalhe a manteiga no milho ainda quente, polvilhe o sal, e sirva em seguida.</Text>

      <Text style={styles.sectionTitle}>Dica:</Text>
      <Text style={styles.topicos}>Para facilitar na hora de servir, com o auxílio de uma faca, corte os grãos de milho da espiga e sirva em pratinhos individuais.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d698a6',
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
    color: '#be6e80',
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
    color: '#be6e80',
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