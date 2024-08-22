import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/salada.png')} />
        <Text style={styles.paragraph}>
          Salada Natalina
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 2 peitos de frango.</Text>
      <Text style={styles.topicos}>- 2 latas de seletas de legume.</Text>
      <Text style={styles.topicos}>- 4 tomates picados sem sementes.</Text>
      <Text style={styles.topicos}>- 50 g de uvas passas sem sementes.</Text>
      <Text style={styles.topicos}>- 250 g de maionese.</Text>
      <Text style={styles.topicos}>- Sal.</Text>
      <Text style={styles.topicos}>- 2 cubos de caldo de galinha.</Text>
      <Text style={styles.topicos}>- 3 ovos.</Text>
      <Text style={styles.topicos}>- 2 latas de milho verde.</Text>
      <Text style={styles.topicos}>- 50 g de azeitonas verdes.</Text>
      <Text style={styles.topicos}>- 2 cenouras raladas.</Text>
      <Text style={styles.topicos}>- 2 maçãs verdes picadas.</Text>
      <Text style={styles.topicos}>- Salsa e cebolinha a gosto.</Text>
      <Text style={styles.topicos}>- 3 colheres de azeite.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Refogue o frango e desfie.</Text>
      <Text style={styles.topicos}>2. Obs.: Refogue o frango com os cubinhos e sal.</Text>
      <Text style={styles.topicos}>3. Pique os tomates sem sementes, corte a maçã com casca em cubinhos, rale a cenoura crua, pique a salsa, pique a cebolinha e reserve.</Text>
      <Text style={styles.topicos}>4. Pique também as azeitonas.</Text>
      <Text style={styles.topicos}>5. Juntar tudo em uma vazilha grande adicionando todos os ingredientes e a maionese no final.</Text>
<Text style={styles.topicos}>6. Bom Apetite!.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb9a',
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
    color: '#e48a55',
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
    color: '#e48a55',
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
