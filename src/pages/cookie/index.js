import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/cookies.png')} />
        <Text style={styles.paragraph}>
          Cookies
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- Meia xícara de (chá) de mateiga derretida (100g).</Text>
        <Text style={styles.topicos}>- Meia xícara de (chá) de açúcar mascavo.</Text>
        <Text style={styles.topicos}>- 3 colheres de (sopa) de açúcar.</Text>
        <Text style={styles.topicos}>- 1 ovo.</Text>
        <Text style={styles.topicos}>- Meia colher de (chá) de essência de baunilha.</Text>
        <Text style={styles.topicos}>- Meia colher de (chá) de fermento em pó.</Text>
        <Text style={styles.topicos}>- 100g de gotas de chocolate ao leite.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um recipiente, misture bem, com uma colher ou fuê a manteiga, o açúcar mascavo, açúcar, ovo e a essência de baunilha até obter uma mistura cremosa e clara. Acrescente a farinha de trigo, o fermento em pó e metade das gotas de chocolate ao leite.</Text>
      <Text style={styles.topicos}>2. Leve à geladeira por 10 minutos.</Text>
      <Text style={styles.topicos}>3. Modele os cookies com o auxílio de 2 colheres e coloque em uma assadeira, deixando um espaço entre eles.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdd7d1',
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
    color: '#ff8f7e',
    marginLeft: 10,
    
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
    color: '#ff8f7e',
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
