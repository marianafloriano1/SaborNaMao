import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
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
          Batata Frita no forno)
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1/2 copo de água.</Text>
      <Text style={styles.topicos}>-2 colheres de sopa de orégano.</Text>
      <Text style={styles.topicos}>-1 kg de batata inglesa.</Text>
      <Text style={styles.topicos}>-1/4 de copo de azeite de oliva.</Text>
      <Text style={styles.topicos}>- 1/2 colher de sopa de sal.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
    <Text style={styles.topicos}>1. Lave bem as batatas e cozinhe-as com casca, até que você consiga espetar um garfo sem rachá-las.</Text>
      <Text style={styles.topicos}>2. Deixe esfriar, e então descasque.</Text>
      <Text style={styles.topicos}>3. Corte em rodelas, palitos ou cubinhos (como preferir).</Text>
       <Text style={styles.topicos}>4. Bata no liquidificador os ingredientes (exceto a batata) até ficarem bem misturados.</Text>
       <Text style={styles.topicos}>5. Coloque este líquido em uma tigela.</Text>
       <Text style={styles.topicos}>6. Passe os pedaços de batatas neste líquido, retirando o excesso de preparo que vier junto com as batatas.</Text>
       <Text style={styles.topicos}>7. Coloque-os lado a lado em uma forma untada (não é preciso deixar espaço entre os pedaços, mas não coloque um em cima do outro) leve ao forno quente até dourar.</Text>
       <Text style={styles.topicos}>8. Sirva em seguida</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
    backgroundColor: '#fdede9', 
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
    marginLeft: 50,
    marginTop: 80,
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
