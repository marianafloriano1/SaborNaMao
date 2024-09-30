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
          <Image style={styles.img} source={require('../../img/bolo2.png')} />
          <Text style={styles.paragraph}>
            Bolo de Chocolate
          </Text>
        </View>

        <Text style={styles.ingredientes}>Ingredientes:</Text>
        <Text style={styles.coisa}>Massa:</Text>
        <Text style={styles.topicos}>- 4 ovos</Text>
        <Text style={styles.topicos}>- 2 colheres (sopa) de manteiga</Text>
        <Text style={styles.topicos}>- 2 xícaras (chá) de açúcar</Text>
        <Text style={styles.topicos}>- 1 xícara (chá) de leite</Text>
        <Text style={styles.topicos}>- 4 colheres (sopa) de chocolate em pó</Text>
        <Text style={styles.topicos}>- 3 xícaras (chá) de farinha de trigo</Text>
        <Text style={styles.topicos}>- 2 colheres (sopa) de fermento</Text>
    
        <Text style={styles.coisa}>Calda:</Text>
        <Text style={styles.topicos}>- 2 colheres (sopa) de manteiga</Text>
        <Text style={styles.topicos}>- 2 latas de creme de leite com soro</Text>
        <Text style={styles.topicos}>- 7 colheres (sopa) de chocolate em pó</Text>
        <Text style={styles.topicos}>- 3 colheres (sopa) de açúcar</Text>

        <Text style={styles.ingredientes}>Utensílios:</Text>
        <Text style={styles.topicos}>- Forma de bolo, caso não tenha pode usar uma assadeira</Text>


        <Text style={styles.ingredientes}>Modo de preparo da Massa:</Text>
        <Text style={styles.topicos}>1. Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.</Text>
        <Text style={styles.topicos}>2. Adicione o fermento e misture com uma espátula delicadamente.</Text>
        <Text style={styles.topicos}>3. Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.</Text>

        <Text style={styles.ingredientes}>Modo de preparo da Calda:</Text>
        <Text style={styles.topicos}>1. Em uma panela, aqueça a manteiga e misture o chocolate em pó até que esteja homogêneo.</Text>
        <Text style={styles.topicos}>2. Acrescente o creme de leite e misture bem até obter uma consistência cremosa.</Text>
        <Text style={styles.topicos}>3. Desligue o fogo e acrescente o açúcar.</Text>

         <Text style={styles.ingredientes}>Modo de preparo do Bolo:</Text>
        <Text style={styles.topicos}>1. Desunte o bolo em um prato ou outro tipo de apoio.</Text>
        <Text style={styles.topicos}>2. Caso não saia fácil, passe uma faca em torno da assadeira.</Text>
        <Text style={styles.topicos}>3. Espere esfriar um pouco e derrame a calda como preferir</Text>
        <Text style={styles.topicos}>4. Caso queira decorar compre granulado ou algum enfeite para bolo em casa de festa e não esqueça das velas!</Text>
       
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