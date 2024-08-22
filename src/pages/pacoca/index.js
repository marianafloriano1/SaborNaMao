import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pacoca.png')} />
        <Text style={styles.paragraph}>
        Paçoca
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 500 g de amendoim torrado e moído com pele.</Text>
      <Text style={styles.topicos}>- 1 Caixa de leite condensado.</Text>
      <Text style={styles.topicos}>- 1 Pacote de bolacha maisena.</Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
     <Text style={styles.topicos}>1. Torre o amendoim por aproximadamente 20 minutos.</Text>
     <Text style={styles.topicos}>2. Bata no liquidificador até que fique todo triturado.</Text>
     <Text style={styles.topicos}>3. Coloque em uma vasilha grande para que possa misturar todos os ingredientes bem.</Text>
     <Text style={styles.topicos}>4. Bata a bolacha também no liquidificador, misture ao amendoim.</Text>
     <Text style={styles.topicos}>5. Coloque o leite condensado aos poucos, mexendo bem, até que fique uma massa bem dura.</Text>
     <Text style={styles.topicos}>6. Espalhe em uma forma média untada com margarina, apertando bem com as mãos.</Text>
     <Text style={styles.topicos}>7. Deixe descansar por 20 minutos e corte os quadradinhos ou no formato.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d698a6',
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
    color: '#be6e80',
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
    color: '#be6e80',
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