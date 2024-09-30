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
          <Image style={styles.img} source={require('../../img/beijinho.png')} />
          <Text style={styles.paragraph}>
            Beijinho
          </Text>
        </View>

        <Text style={styles.ingredientes}>Ingredientes (23 Unidades):</Text>
        <Text style={styles.topicos}>- 1 lata de leite condensado (395 g)</Text>
        <Text style={styles.topicos}>- 1 xícara (chá) de coco seco ralado (cerca de 80 g)</Text>
        <Text style={styles.topicos}>- ⅓ de xícara (chá) de leite</Text>
        <Text style={styles.topicos}>- 1 colher (sopa) de manteiga</Text>
        <Text style={styles.topicos}>- manteiga para untar as mãos</Text>
        <Text style={styles.topicos}>- 23 cravos-da-índia</Text>
     
        <Text style={styles.ingredientes}>Utensílios:</Text>
        <Text style={styles.topicos}>- Forma de papel para brigadeiros</Text>

         <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <Text style={styles.topicos}>1. Coloque o leite condensado, o leite e a manteiga numa panela pequena e leve ao fogo baixo. Mexa com uma espátula até a manteiga derreter.</Text>
        <Text style={styles.topicos}>2. Acrescente ½ xícara (chá) do coco ralado e continue mexendo por cerca de 20 minutos, até o doce engrossar, no ponto de enrolar – mexa raspando bem os fundos e lateral da panela com a espátula para não queimar. Atenção para o ponto: incline levemente a panela para verificar, a massa de beijinho deve descolar do fundo da panela.</Text>
        <Text style={styles.topicos}>3. Transfira o beijinho para um prato fundo (ou travessa) e deixe esfriar completamente em temperatura ambiente antes de enrolar.</Text>
        <Text style={styles.topicos}>4. Em um prato fundo coloque o restante do coco ralado. Para modelar os beijinhos: unte as mãos com um pouco de manteiga e enrole uma porção de beijinho formando uma bolinha. Passe pelo coco ralado seco, cobrindo bem toda a superfície do doce. Coloque o doce numa forminha e espete com um cravo. Repita com o restante.</Text>
       
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