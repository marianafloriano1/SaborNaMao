import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/feijoes.png')} />
        <Text style={styles.paragraph}>
          Feijoada
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (8 porções):</Text>
      <View style={styles.ingredientsList}>
         <Text style={styles.topicos}>- 1 kg de feijão preto.</Text>
      <Text style={styles.topicos}>- 2 línguas defumadas ou salgadas.</Text>
      <Text style={styles.topicos}>- 1/2 kg de costelinha de porco salgada.</Text>
      <Text style={styles.topicos}>- 1/2 kg de linguiça calabresa defumada.</Text>
      <Text style={styles.topicos}>- 1/4 kg de toucinho defumado.</Text>
      <Text style={styles.topicos}>- 1 rabo de porco salgado.</Text>
      <Text style={styles.topicos}>- 4 folhas de louro.</Text>
      <Text style={styles.topicos}>- 1/2 xícara de óleo ou banha de porco.</Text>
      <Text style={styles.topicos}>- Água o quanto baste.</Text>
      <Text style={styles.topicos}>- 1/2 kg de lombo de porco salgado.</Text>
      <Text style={styles.topicos}>- 2 paios.</Text>
      <Text style={styles.topicos}>- 2 pés de porco salgados.</Text>
      <Text style={styles.topicos}>- 2 orelhas de porco salgadas.</Text>
      <Text style={styles.topicos}>- 3 dentes de alho picados.</Text>
      <Text style={styles.topicos}>- Pimenta malagueta amassada (opcional).</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Escolha o feijão e deixe de molho por 12 horas.</Text>
      <Text style={styles.topicos}>2. Lave bem as carnes salgadas, corte em pedaços e deixe de molho em água por 12 horas, trocando a água pelo menos duas vezes.</Text>
      <Text style={styles.topicos}>3. Coloque o feijão para cozinhar em bastante água com as folhas de louro.</Text>
      <Text style={styles.topicos}>4. Em uma panela à parte, cozinhe por ½ hora as carnes salgadas, escorra a água e reserve.</Text>
      <Text style={styles.topicos}>5. Quando o feijão estiver começando a amolecer, coloque as carnes, a lingüiça e o paio e deixe ferver em fogo brando até estar tudo bem cozido (leva algum tempo: de 2 a 3 horas).</Text>
      <Text style={styles.topicos}>6. Esquente o óleo ou banha de porco e refogue os temperos.</Text>
      <Text style={styles.topicos}>7. Coloque uma concha do feijão, amasse bem e deixe ferver despeje na feijoada e deixe ferver por mais 30 minutos.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8a0',
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
    color: '#dfc265',
    marginLeft: 30,
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
    color: '#dfc265',
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
