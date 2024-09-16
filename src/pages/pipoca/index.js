import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      

     <ScrollView showsVerticalScrollIndicator={false}>


<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
  <FontAwesome name="arrow-circle-left" size={28} color="#ff8f7e" />
</TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.paragraph}>
          Pipoca
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 copo de 200ml de milho.</Text>
        <Text style={styles.topicos}>- 1/2 colher de sobremesa de margarina.</Text>
        <Text style={styles.topicos}>- 5 colheres de sopa de óleo.</Text>
      </View>

      
      <Text style={styles.sectionTitle}>Opcional:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- Sal a gosto</Text>
        <Text style={styles.topicos}>- Caldo em pó (bacon, carne)</Text>
      </View>

      
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Coloque o óleo e a margarina em uma panela (funda ou própria para pipoca).</Text>
      <Text style={styles.topicos}>2. Deixe fritar até escurecer um pouco (isso é o que dá o gosto de manteiga na pipoca).</Text>
      <Text style={styles.topicos}>3. Coloque o milho e feche bem com a tampa da panela.</Text>
      <Text style={styles.topicos}>4. Deixe em fogo forte.</Text>
      <Text style={styles.topicos}>5. NÃO MEXA A PANELA (é isso que faz estourar todos os grãos).</Text>
      <Text style={styles.topicos}>6. Quando estiver estourando pouco, desligue para não queimar.</Text>
      <Text style={styles.topicos}>7. Coloque o sal e o caldo em pó, trocando da panela para a tigela para distribuir bem.</Text>
    
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdede9', 
    height: 900
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff8f7e',
    marginLeft: 55,
    marginTop: 90,
    marginBottom: 40
  },

  seta: {
    position: 'absolute',
    right: 10,
    top: 85,
    zIndex: 1,
    left: 15
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff8f7e',
    marginTop: 10,
    marginLeft:20
  },
  ingredientsList: {
    marginBottom: 20,
  },
  topicos: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
    marginLeft: 10
  },
});
