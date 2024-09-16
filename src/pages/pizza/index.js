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
            Pizza  Portuguesa
          </Text>
        </View>

        
        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        <View style={styles.ingredientsList}>
          <Text style={styles.topicos}>- 2 xícaras (chá) de farinha de trigo.</Text>
          <Text style={styles.topicos}>- 1 colher (sopa) de fermento em pó.</Text>
          <Text style={styles.topicos}>- Meia colher (chá) de sal.</Text>
          <Text style={styles.topicos}>- 1 xícara (chá) de água.</Text>
          <Text style={styles.topicos}>- 4 colheres (sopa) de óleo.</Text>
          <Text style={styles.topicos}>- 150 g de queijo muçarela.</Text>
          <Text style={styles.topicos}>- 50 g de presunto.</Text>
          <Text style={styles.topicos}>- 1 tomate em rodelas.</Text>
          <Text style={styles.topicos}>- 1 ovo cozido fatiado.</Text>
          <Text style={styles.topicos}>- 1 cebola em rodelas.</Text>
          <Text style={styles.topicos}>- 1 xícara (chá) de molho de tomate.</Text>
          <Text style={styles.topicos}>- 4 azeitonas pretas sem caroço, em rodelas.</Text>
          <Text style={styles.topicos}>- 1 pitada de orégano.</Text>
        </View>

       
        <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Em um recipiente, coloque a farinha peneirada, o fermento e o sal e misture.</Text>
        <Text style={styles.topicos}>2. Faça uma cova no centro e acrescente a água e o óleo.</Text>
        <Text style={styles.topicos}>3. Amasse bem e abra com o rolo, formando uma massa lisa.</Text>
        <Text style={styles.topicos}>4. Unte uma forma para pizza (média) e modele a massa dentro.</Text>
        <Text style={styles.topicos}>5. Despeje sobre a massa um pouco de molho de tomate, cubra com queijo e presunto.</Text>
        <Text style={styles.topicos}>6. Em seguida coloque as fatias de tomate, o ovo picado e a cebola.</Text>
        <Text style={styles.topicos}>7. Decore com azeitonas, tempere com orégano e leve ao forno médio (180°C) preaquecido por 20 minutos, ou até a massa ficar assada.</Text>

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
