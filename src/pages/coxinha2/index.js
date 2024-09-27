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
          <Image style={styles.img} source={require('../../img/coxinha2.png')} />
          <Text style={styles.paragraph}>
            Coxinha
          </Text>
        </View>

        <Text style={styles.ingredientes}>Ingredientes (+/- 70 porções):</Text>
        <Text style={styles.coisa}>Massa:</Text>
        <Text style={styles.topicos}>- 1 litro de água</Text>
        <Text style={styles.topicos}>- 2 envelopes de caldo de galinha</Text>
        <Text style={styles.topicos}>- 1/2 colher sopa de sal</Text>
        <Text style={styles.topicos}>- 500 g farinha trigo</Text>
        <Text style={styles.topicos}>- 1/2 xícara de óleo soja</Text>
        <Text style={styles.coisa}>Recheio:</Text>
        <Text style={styles.topicos}>- 1 peito de frango desfiado</Text>
        <Text style={styles.topicos}>- Cheiro verde</Text>
        <Text style={styles.topicos}>- 1 cebola cortada</Text>
        <Text style={styles.topicos}>- 1 tomate picado</Text>
        <Text style={styles.coisa}>Para empanar:</Text>
        <Text style={styles.topicos}>- Farinha de rosca</Text>
        <Text style={styles.topicos}>- leite</Text>


        <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <Text style={styles.topicos}>1. Coloque a água, o caldo de galinha, sal e óleo no fogo até ferver.</Text>
        <Text style={styles.topicos}>2. Acrescente a farinha de trigo e mexa até virar uma mistura homogênea.</Text>
        <Text style={styles.topicos}>3. Deixe cozinhar por 5 minutos e continue mexendo. </Text>
        <Text style={styles.topicos}>4. Refogue o peito de frango com a cebola, tomate e cheiro verde.</Text>
        <Text style={styles.topicos}>5. Faça bolinhas, recheie com o frango e faça o formato de coxinha, passe no leite e depois na farinha de rosca.</Text>
        <Text style={styles.topicos}>6. Frite em óleo quente.</Text>
 
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