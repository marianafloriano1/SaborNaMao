import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/melancia.png')} />
        <Text style={styles.paragraph}>
          Suco De Melancia com Limão
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 xícara (chá) de melancia em cubos sem sementes.</Text>
        <Text style={styles.topicos}>- caldo de 1 limão.</Text>
        <Text style={styles.topicos}>- 3/4 de xícara (chá) de água.</Text>
        <Text style={styles.topicos}>- açúcar e cubos de gelo a gosto.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. No liquidificador, junte a melancia, a água e o caldo de limão (se quiser adicione açúcar a gosto).</Text>

      <Text style={styles.topicos}>2. Bata até ficar liso.</Text>
      <Text style={styles.topicos}>3. Transfira para um copo e acrescente cubos de gelo a gosto. </Text>
      <Text style={styles.topicos}>4. Sirva a seguir.</Text>

      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc19a',
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
    color: '#d6705d',
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
    color: '#d6705d',
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
