import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/churrasco.png')} />
        <Text style={styles.paragraph}>
          Churrasco
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Preparação:</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- Escolha e Compra da Carne (como fraudinha, picanha ou uma de sua preferência.</Text>
      <Text style={styles.topicos}>- Tempero (como o sal grosso).</Text>
      </View>
     <Text style={styles.sectionTitle}>Preparação do Fogo:</Text>
      <Text style={styles.topicos}>1. Coloque o carvão na churrasqueira.</Text>
      <Text style={styles.topicos}>2. Despeje álcool sobre o carvão. </Text>
      <Text style={styles.topicos}>3. Acenda o carvão com um palito de fósforo.</Text>
    
      <Text style={styles.sectionTitle}>Assando a Carne:</Text>
      <Text style={styles.topicos}>1.  Coloque a carne na grelha sobre o carvão, evitando que a gordura pingue diretamente no carvão.</Text>
      <Text style={styles.topicos}>2. Vire a carne conforme necessário para garantir que ela cozinhe de forma uniforme. </Text>
      <Text style={styles.topicos}>3. Verifique o ponto da carne (mal passada, ao ponto, bem passada) com um termômetro de carne ou testando com o toque.</Text>
      <Text style={styles.topicos}>3. Fatie a carne conforme o gosto e sirva.</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8a0',
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
    color: '#dfc265',
    marginLeft: 30,
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
    color: '#dfc265',
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
