import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/coxinha.png')} />
        <Text style={styles.paragraph}>
          Coxinha de Frango
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 colher de sopa de manteiga.</Text>
        <Text style={styles.topicos}>- 25 ml de leite.</Text>
        <Text style={styles.topicos}>- 1 batata média cozida e amassada.</Text>
        <Text style={styles.topicos}>- 50g de farinha de trigo.</Text>
        <Text style={styles.topicos}>- tempero a gosto.</Text>
        <Text style={styles.topicos}>- Meio peito de frango.</Text>
        <Text style={styles.topicos}>- Requeijão (opcional).</Text>
        <Text style={styles.topicos}>- Farinha de rosca ou farinha panko.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em uma panela coloque a manteiga e deixe derreter.</Text>
      <Text style={styles.topicos}>2. Acrescente o leite, e a batata amassada e mexa bem.</Text>
      <Text style={styles.topicos}>3. Adicione os temperos a gosto.</Text>
      <Text style={styles.topicos}>4. Coloque a farinha e mexa por aproximadamente 3 minutos e desligue a panela.</Text>
      <Text style={styles.topicos}>5. Ainda quente sove com uma espatula a massa e depois que esfriar sove mais com a mão, e reserve. </Text>
      <Text style={styles.topicos}>6. Corte meio peito de frango em cubos e tempere á gosto</Text>
      <Text style={styles.topicos}>7. Leve o frango em uma frigideira quente e espere fritar.</Text>
      <Text style={styles.topicos}>8. Desfie o frango com auxilio de garfos.</Text>
      <Text style={styles.topicos}>9. Depois de desfiado misture o frango com o requeijão.(opcional)</Text>
      <Text style={styles.topicos}>10. Pegue a massa reservada, abra na mão, coloque o recheio no meio e vai moldando a sua coxinha.</Text>
      <Text style={styles.topicos}>11. Passe a sua coxinha com cuidado na farinha de rosca ou farinha panko e leve para fritar em óleo bem quente até ficar dourada.</Text>
      <Text style={styles.topicos}>12. Está pronto a sua coxinha! Aproveite!</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8c7cc',
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
