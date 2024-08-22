import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/raspadinha.png')} />
        <Text style={styles.paragraph}>
          Raspadinha de Melancia
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 8 xícaras (chá) de melancia cortada em cubos e sem sementes.</Text>
      <Text style={styles.topicos}>- 1/4 de xícara (chá) de adoçante.</Text>
      <Text style={styles.topicos}>- 170ml de suco de limão.</Text>
      <Text style={styles.topicos}>- 8 ramos de hortelã.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Separe os ingredientes na quantidade indicada.</Text> 
      <Text style={styles.topicos}>2. Coloque a melancia em uma vasilha grande, cubra com filme plástico e leve ao congelador por 20 minutos. </Text>
      <Text style={styles.topicos}>3. Em um processador, coloque metade da melancia congelada, metade do suco de limão e metade do adoçante.</Text>
      <Text style={styles.topicos}>4. Bata até ficar levemente triturado.</Text> 
      <Text style={styles.topicos}>5. Transfira para um recipiente e reserve.</Text> 
      <Text style={styles.topicos}>6. Repita o procedimento com o restante.</Text>
      <Text style={styles.topicos}>7. Distribua a raspadinha em taças individuais, enfeite com folhas de hortelã e sirva em seguida.</Text>  
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6dbb2',
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
    color: '#92ab79',
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
    color: '#92ab79',
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
