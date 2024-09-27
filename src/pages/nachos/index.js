import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      style={styles.container} 
      source={require('../../img/pag.png')} 
    >
      <View style={styles.content}>
        <View style={styles.row}>
          <Image style={styles.img} source={require('../../img/nachos.png')} />
          <Text style={styles.paragraph}>
            Guacamole
          </Text>
        </View>

        <Text style={styles.ingredientes}>Ingredientes:</Text>
        <Text style={styles.topicos}>- 1 abacate brasileiro médio (ou 4 avocados)</Text>
        <Text style={styles.topicos}>- 1 cebola pequena</Text>
        <Text style={styles.topicos}>- 1 maço de coentro</Text>
        <Text style={styles.topicos}>- suco de 1 limão grande</Text>
        <Text style={styles.topicos}>- sal a gosto</Text>
        <Text style={styles.topicos}>- 1 tomate grande sem sementes</Text>
        <Text style={styles.topicos}>- 2 dentes de alho bem socados</Text>
        <Text style={styles.topicos}>- 1 pimenta malagueta sem sementes</Text>
        <Text style={styles.topicos}>- azeite extra virgem</Text>
        <Text style={styles.topicos}>- Nachos</Text>


         <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <Text style={styles.topicos}>1. Amasse o abacate com um garfo, acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um purê.</Text>
        <Text style={styles.topicos}>2. Pique a cebola, o tomate e o coentro. Pique bem a pimenta.</Text>
        <Text style={styles.topicos}>3. Acrescente os ingredientes picados ao "purê" de abacate.</Text>
        <Text style={styles.topicos}>4. Adicione o sal e pimenta a gosto.</Text>
        <Text style={styles.topicos}>5. Sirva em pequenas porções com uma boa quantidade de nachos.</Text>
       
       
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.85)' 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    color: '#f14992',
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#f14992',
  },
  topicos: {
    fontSize: 15,
    marginBottom: 10,
    color: '#000', 
  },

  coisa:{
    fontSize: 17,
    marginBottom: 16,
    color: '#f14992',
  }
});