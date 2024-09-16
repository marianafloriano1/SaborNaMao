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
          Cachorro quente(no forno)
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 2 xícaras (chá) de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 2 ovos.</Text>
      <Text style={styles.topicos}>- 100 g de queijo parmesão ralado.</Text>
      <Text style={styles.topicos}>- 2 xícaras (chá) de leite.</Text>
      <Text style={styles.topicos}>- 1 e 1/2 colher (sopa) de fermento em pó.</Text>
      <Text style={styles.topicos}>- 1 à 8 salsichas cozidas e picadas.</Text>
      <Text style={styles.topicos}>- 1 à 2 tomates picados sem sementes.</Text>
      <Text style={styles.topicos}>- 1 à 3 latas de milho.</Text>
       <Text style={styles.topicos}>- 4 azeitonas a gosto.</Text>
       <Text style={styles.topicos}>- 1 à 5 cebolas picadas.</Text>
       <Text style={styles.topicos}>- 1 à 6 pimentões picados.</Text>
       <Text style={styles.topicos}>- 1 à 7 latas de ervilha.</Text>
       <Text style={styles.topicos}>- 1/2 à 8 latas de molho de tomate.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Bata no liquidificador a farinha, os ovos, o leite e metade do queijo ralado.</Text>
      <Text style={styles.topicos}>2. Acrescente por último o fermento e misture delicadamente com uma colher.</Text>
        <Text style={styles.topicos}>3. Em uma panela, leve todos os ingredientes ao fogo médio e deixe cozinhar por alguns minutos.</Text>
        <Text style={styles.topicos}>4. Monta uma forma e polvilhe com farinha de trigo.</Text>
      <Text style={styles.topicos}>5. Despeje a metade da massa, o recheio e cubra com o restante da massa.</Text>
      <Text style={styles.topicos}>6. Polvilhe com o resto do queijo.</Text>
       <Text style={styles.topicos}>7. Leve ao forno médio (180° C), preaquecido, por aproximadamente 30 minutos.</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 110,
    marginBottom: 40
  },

  seta: {
    position: 'absolute',
    right: 10,
    top: 105,
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
