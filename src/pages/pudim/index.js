import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pudim.png')} />
        <Text style={styles.paragraph}>
          Pudim na Air Fryer
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 75g De leite condensado (5 colheres de sopa).</Text>
        <Text style={styles.topicos}>- 1 Gema.</Text>
        <Text style={styles.topicos}>- 35ml leite (3 colheres de sopa).</Text>
        <Text style={styles.topicos}>- Essência de baunilha.</Text>
        <Text style={styles.topicos}>- 50g Açúcar cristal.</Text>
        <Text style={styles.topicos}>- 20ml De água.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um bowl coloque uma gema.</Text>

      <Text style={styles.topicos}>2. Em seguida adicione o leite condensado e mexa até ficar homogênio.</Text>

      <Text style={styles.topicos}>3. Adicione o leite e a essência de baunilha, e mexa até incorporar na mistura e reserve.</Text>
      <Text style={styles.topicos}>4. Em uma frigideira ou panela coloque o açúcar e deixa derreter.</Text>

      <Text style={styles.topicos}>5. Quando derreter coloque a água com cuidado e mexa até ficar com uma coloração dourada. </Text>

      <Text style={styles.topicos}>6. Com a calda de caramelo ainda quente espalhe na forma e espere caramelo esfriar.</Text>

      <Text style={styles.topicos}>7. Depois de frio acrescente a mistura reservada na forma junto a calda.</Text>
      
      <Text style={styles.topicos}>8. Coloque a forma dentro de uma maior, acrescente água até a metade e cubra com papel aluminío.</Text>

      <Text style={styles.topicos}>9. Agora leve para assar na Air Fryer por 20 minutos na temperatura de 180°C.</Text>

      <Text style={styles.topicos}>10. Agora espera esfriar, desenforme e está pronto para servir.</Text>

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
