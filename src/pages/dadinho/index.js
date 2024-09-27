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
          <Image style={styles.img} source={require('../../img/tapioca.png')} />
          <Text style={styles.paragraph}>
            Dadinho de Tapioca
          </Text>
        </View>

        <Text style={styles.ingredientes}>Ingredientes (23 Unidades):</Text>
        <Text style={styles.topicos}>- 500 g de farinha de tapioca granulada</Text>
        <Text style={styles.topicos}>- 500 g de queijo coalho ralado</Text>
        <Text style={styles.topicos}>- pimenta-do-reino branca a gosto</Text>
        <Text style={styles.topicos}>- 1 litro de leite líquido integral</Text>
        <Text style={styles.topicos}>- sal a gosto</Text>
        <Text style={styles.topicos}>- 1 pote de geleia agridoce de pimenta para acompanhar</Text>

         <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <Text style={styles.topicos}>1. Aqueça o leite em uma panela.</Text>
        <Text style={styles.topicos}>2. Quando o leite estiver bem quente, desligue o fogo, adicione o queijo coalho ralado e continue mexendo.</Text>
        <Text style={styles.topicos}>3. Logo em seguida adicione a farinha de tapioca granulada e continue mexendo.</Text>
        <Text style={styles.topicos}>4. Adicione o sal e pimenta a gosto.</Text>
        <Text style={styles.topicos}>5. Pare de mexer quando todos os ingredientes estiverem bem misturados.</Text>
        <Text style={styles.topicos}>6. Despeje em uma forma coberta com papel filme (pvc), cubra em cima também e leve para a geladeira por duas horas.</Text>
        <Text style={styles.topicos}>7. Depois retire da geladeira, corte em quadradinhos (dadinhos) e frite aos poucos em óleo quente ou coloque no forno até dourar.</Text>
        <Text style={styles.topicos}>8. Sirva em seguida acompanhado da geleia de pimenta agridoce.</Text>
       
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