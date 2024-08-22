import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/cuscuz.png')} />
        <Text style={styles.paragraph}>
          Cuscuz Marroquino Com Legumes
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 xícara de chá de água.</Text>
        <Text style={styles.topicos}>- 1/2 xícara de chá de Cuscuz Marroquino.</Text>
        <Text style={styles.topicos}>- 1/4 xícara de chá de salsinha (picada).</Text>
        <Text style={styles.topicos}>- 1/2 xícara de chá de cenoura (e outros legumes de sua preferência).</Text>
        <Text style={styles.topicos}>- Raspas de 1 limão.</Text>
        <Text style={styles.topicos}>- 1/2 colher de chá de sal.</Text>
        <Text style={styles.topicos}>- Pimenta a gosto.</Text>

      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Ferva a água com sal e pimenta do reino.</Text>
      <Text style={styles.topicos}>2. Desligue o fogo e adicione o cuscuz marroquino.</Text>
      <Text style={styles.topicos}>3. Tampe a panela e deixe descansar por 5 minutos.</Text>
      <Text style={styles.topicos}>4. Tire a tampa, adicione a salsinha, cenoura, raspas de limão e misture bem.</Text>
      <Text style={styles.topicos}>5. Se necessário corrija o sal e pimenta do reino.</Text>
      <Text style={styles.topicos}>6. Agora é só servir. Bom apetite!</Text>
      
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
