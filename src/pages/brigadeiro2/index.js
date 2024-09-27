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
          <Image style={styles.img} source={require('../../img/brigadeiro2.png')} />
          <Text style={styles.paragraph}>
            Brigadeiro
          </Text>
        </View>

        <Text style={styles.ingredientes}>IngredienteS (+/- 30 brigadeiros):</Text>
        <Text style={styles.topicos}>- 1 caixa de leite condensado</Text>
        <Text style={styles.topicos}>- 7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó</Text>
        <Text style={styles.topicos}>- 1 colher (sopa) de margarina sem sal</Text>
        <Text style={styles.topicos}>- chocolate granulado</Text>

        <Text style={styles.ingredientes}>Materiais:</Text>
        <Text style={styles.topicos}>1. Panela.</Text>
        <Text style={styles.topicos}>2. Espatula ou colher.</Text>
        <Text style={styles.topicos}>3. Prato fundo ou tijela.</Text>

        <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <Text style={styles.topicos}>1. Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.</Text>
        <Text style={styles.topicos}>2. Cozinhe em fogo baixo e mexa até que o brigadeiro comece a desgrudar da panela.</Text><Text style={styles.aviso}> Não pare de mexer antes de alcançar o ponto.</Text>
        <Text style={styles.topicos}>3. Deixe esfriar. </Text>
        <Text style={styles.topicos}>4. Coloque um pouco de granulado no prato fundo.</Text>
        <Text style={styles.topicos}>5. Passe um pouco de manteiga na mão.</Text>
        <Text style={styles.topicos}>6. Com uma colher de café pegue o brigadeiro e faça pequenas bolas com as maos.</Text>
        <Text style={styles.topicos}>7. Pase a bolinha no granulado.</Text>
        <Text style={styles.topicos}>8. Se quiser pode colocar as bolinhas em formas próprias para brigadeiros.</Text>
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
  aviso:{
    fontSize: 10,
    marginBottom: 10,
    color: '#f14992',
    fontWeight: 'bold',
  }
});