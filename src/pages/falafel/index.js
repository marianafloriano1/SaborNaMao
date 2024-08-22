import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/falafel.png')} />
        <Text style={styles.paragraph}>
          Falafel Vegano
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 copo de grão de bico seco.</Text>
        <Text style={styles.topicos}>- 2 dentes de alho picados.</Text>
        <Text style={styles.topicos}>- 1/2 cebola média picada.</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de cominho.</Text>
        <Text style={styles.topicos}>- 1 copo de salsinha fresca picada.</Text>
        <Text style={styles.topicos}>- 1-2 colheres de chá de sal.</Text>
        <Text style={styles.topicos}>- 1/2 colher de chá de pimenta do reino.</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de suco de limão.</Text>
        <Text style={styles.topicos}>- 4 colheres de sopa de azeite de oliva.</Text>
        <Text style={styles.topicos}>- 2 colheres de sopa de farinha de trigo.</Text>
        <Text style={styles.sectionTitle}>Molho:</Text>
        <Text style={styles.topicos}>- 1/4 copo folhas de hortelã.</Text>
        <Text style={styles.topicos}>- 3 colheres de sopa de azeite.</Text>
        <Text style={styles.topicos}>- 1/2 limão.</Text>
        <Text style={styles.topicos}>- Pitada de sal.</Text>
        <Text style={styles.topicos}>- 3/4 copo de tahine (pasta de gergelim).</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Deixe o grão de bico de molho durante a noite, cerca de 8 horas em temperatura ambiente. Escorra a água.</Text>
      <Text style={styles.topicos}>2. Bata o grão de bico com sal no processador para pegar sabor e depois, acrescente os demais ingredientes.</Text>
      <Text style={styles.topicos}>3. Para o bolinho não desmanchar, acrescente a farinha de trigo (para fazer bolinhos assados a farinha não é necessária).</Text>
      <Text style={styles.topicos}>4. Monte os bolinhos e frite em óleo quente.</Text>
      <Text style={styles.sectionTitle}>Molho:</Text>
      <Text style={styles.topicos}>5. Bater todos os ingredientes no processador e acrescentar um pouco de água para chegar na consistência de molho.</Text>
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
