import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/nhoque.png')} />
        <Text style={styles.paragraph}>
          Nhoque De Banana-Da-Terra
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 2 bananas-da-terra.</Text>
        <Text style={styles.topicos}>- 1/4 de xícara de chá de amido de milho.</Text>
        <Text style={styles.topicos}>- Sal a gosto.</Text>
        <Text style={styles.topicos}>- Pimenta a gosto.</Text>
        <Text style={styles.topicos}>- Manteiga e azeite para grelhar.</Text>

      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Sem descascar, disponha as bananas inteiras em uma assadeira.</Text>
      <Text style={styles.topicos}>2.Leve ao forno para assar em temperatura baixa por cerca de 20 minutos. É normal que as cascas escureçam.</Text>
      <Text style={styles.topicos}>3. Retire as bananas do forno e aguarde amornar.</Text>
      <Text style={styles.topicos}>4. Com as bananas ainda mornas, retire as cascas e amasse as frutas em um recipiente.</Text>
      <Text style={styles.topicos}>5. Adicione o amido, acerte o sal e a pimenta e misture bem.</Text>
      <Text style={styles.topicos}>6. Polvilhe uma bancada com amido, corte a massa em pedaços pequenos e modele os nhoques.</Text>
      <Text style={styles.topicos}>7. Em uma frigideira quente, adicione a manteiga e o azeite.</Text>
      <Text style={styles.topicos}>8. Grelhe os nhoques dos dois lados, deixando criar uma casca crocante.</Text>
      <Text style={styles.topicos}>9. Agora é só servir. Bom apetite.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb8cd',
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
    color: '#6E789C',
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
    color: '#6E789C',
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
