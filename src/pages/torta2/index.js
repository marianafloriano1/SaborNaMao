import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pie.png')} />
        <Text style={styles.paragraph}>
          Torta de Legumes e Ricota
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (6 porções):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 xícara (chá) de leite.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de óleo.</Text>
      <Text style={styles.topicos}>- 4 ovos.</Text>
      <Text style={styles.topicos}>- Sal a gosto.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de farinha de trigo integral.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de fermento em pó químico.</Text>
      <Text style={styles.topicos}>- Margarina e farinha de trigo para untar.</Text>
      <Text style={styles.topicos}>- Queijo parmesão ralado a gosto para polvilhar.</Text>

      <Text style={styles.sectionTitle}>Recheio:</Text>
     <Text style={styles.topicos}>- 1 abobrinha picada.</Text>
     <Text style={styles.topicos}>- 1 cenoura cozida picada.</Text>
     <Text style={styles.topicos}>- 2 xícaras (chá) de brócolis cozido picado.</Text>
     <Text style={styles.topicos}>- 1 tomate sem sementes picado.</Text>
     <Text style={styles.topicos}>- 1 cebola em rodelas finas.</Text>
     <Text style={styles.topicos}>- 1/2 berinjela em cubos cozida.</Text>
     <Text style={styles.topicos}>- 2 colheres (sopa) de manjericão picado.</Text>
     <Text style={styles.topicos}>- 4 colheres (sopa) de manteiga.</Text>
     <Text style={styles.topicos}>- 2 dentes de alho picados.</Text>
     <Text style={styles.topicos}>- Sal e pimenta-do-reino a gosto.</Text>

      <Text style={styles.sectionTitle}>Creme:</Text>
     <Text style={styles.topicos}>- 1 xícara (chá) de ricota amassada.</Text>
     <Text style={styles.topicos}>- 1 lata de creme de leite.</Text>
     <Text style={styles.topicos}>- 1 copo de requeijão cremoso (200g).</Text>
     <Text style={styles.topicos}>- Sal a gosto.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Para o recheio, em uma tigela, misture a abobrinha, a cenoura, o brócolis, o tomate, a cebola, a berinjela e o manjericão.</Text>

      <Text style={styles.topicos}>2. Em uma panela, derreta a manteiga e refogue o alho por 2 minutos.</Text>

        <Text style={styles.topicos}>3. Despeje sobre os legumes, misture e tempere com sal e pimenta.</Text>

        <Text style={styles.topicos}>4. Para o creme, bata os ingredientes no liquidificador e reserve.</Text>

        <Text style={styles.topicos}>5. Para a massa, bata no liquidificador o leite, o óleo, os ovos, sal, as farinhas e o fermento.</Text>

        <Text style={styles.topicos}>6. Espalhe metade da massa em uma fôrma de 25cm x 35cm untada e enfarinhada.</Text>

        <Text style={styles.topicos}>7. Espalhe os legumes sobre a massa e cubra com o creme de ricota.</Text>

        <Text style={styles.topicos}>8. Cubra com a massa restante, polvilhe com parmesão e leve ao forno médio (180º C), preaquecido, por 40 minutos ou até dourar. Sirva.</Text>

        
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1b2cd',
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
    color: '#7d6094',
    marginLeft: 10,
    flex: 1
    
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
    color: '#7d6094',
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
