import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/peru.png')} />
        <Text style={styles.paragraph}>
          Peru à Brasileira
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
          <Text style={styles.topicos}>- 1 peru de 4 kg.</Text>
      <Text style={styles.topicos}>- 750 ml de vinho branco seco.</Text>
      <Text style={styles.topicos}>- 1 xícara de margarina ou manteiga.</Text>
      <Text style={styles.topicos}>- 5 dentes de alho.</Text>
      <Text style={styles.topicos}>- Sal.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de mostarda.</Text>
      <Text style={styles.topicos}>- 3 xícaras de caldo de galinha.</Text>
      <Text style={styles.topicos}>- 2 cebolas.</Text>
      <Text style={styles.topicos}>- Molho de pimenta.</Text>
      <Text style={styles.sectionTitle}>Recheio:</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de cebolinha.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de farinha de rosca.</Text>
      <Text style={styles.topicos}>- 1 caldo de galinha em pó.</Text>
      <Text style={styles.topicos}>- 1/2 xícara de azeite de oliva.</Text>
      <Text style={styles.topicos}>- 2 cebolas raladas.</Text>
      <Text style={styles.topicos}>- Pimenta do reino.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de salsinha.</Text>
      <Text style={styles.topicos}>- 1 banana em cubos.</Text>
      <Text style={styles.topicos}>- 1/2 xícara de óleo.</Text>
      <Text style={styles.topicos}>- 2 xícaras de farinha de milho.</Text>
      <Text style={styles.topicos}>- Miúdos de Peru.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
     <Text style={styles.topicos}>1. Bata no liquidificador: 1 xícara de vinho, 1 xícara de caldo de galinha, a cebola em pedaços, alho, mostarda, molho de pimenta, a margarina ou manteiga e o sal.</Text>
     <Text style={styles.topicos}>2. Coloque em um refratário e acrescente o restante do vinho e do caldo de galinha, misture bem e reserve.</Text>
        <Text style={styles.topicos}>3. Em fogo baixo refogue os miúdos cortados em pedaços menores da mistura de óleo e azeite, até mudarem de cor.</Text>
        <Text style={styles.topicos}>4. Adicione o milho, o caldo de galinha, as bananas, as farinha peneiradas e a pimenta, sem parar de mexer, até formar uma farofa solta e úmida.</Text>
        <Text style={styles.topicos}>5. Retire do fogo, acrescente o tempero verde e recheie o peru.</Text> 
        <Text style={styles.topicos}>6. Coloque o peru na assadeira sem untar.</Text>
        <Text style={styles.topicos}>7. Fure o peru com um garfo e coloque o molho reservado.</Text>
        <Text style={styles.topicos}>8. Feche com palito de churrasco e amarre as pernas de peru.</Text>
        <Text style={styles.topicos}>9. Cubra com papel alumínio e leve ao forno por volta de 1 hora e meia, regando constantemente com o molho da assadeira.</Text>
        <Text style={styles.topicos}>10. Retire o papel alumínio para dourar por mais 1 hora e meia aproximadamente, continue regando com o molho.</Text> 
        <Text style={styles.topicos}>11. Coloque no refratário de servir e decore com farofa e tempero verde.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb9a',
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
    color: '#e48a55',
    marginLeft: 10,
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
    color: '#e48a55',
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
