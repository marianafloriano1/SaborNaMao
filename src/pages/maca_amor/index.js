import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/maca-caramelo.png')} />
        <Text style={styles.paragraph}>
        Maça Do Amor
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 1 kg de açúcar.</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de vinagre.</Text>
      <Text style={styles.topicos}>- 12 maçãs (pequena/média).</Text>
      <Text style={styles.topicos}>- 500 ml de água.</Text>
      <Text style={styles.topicos}>- Corante vermelho (pó ou líquido).</Text>
           <Text style={styles.sectionTitle}>Utensílios:</Text>
      <Text style={styles.topicos}>- Palitos de sorvete da sua preferência </Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Lave e seque as maçãs.</Text>
      <Text style={styles.topicos}>2. Espete-as com 1 ou 2 palitos.</Text>
      <Text style={styles.topicos}>3. Unte formas (grande o suficientes para deixar elas de pé) com pouco óleo.</Text>
      
           <Text style={styles.sectionTitle}>Modo de Preparo da calda do Amor:</Text>       
       <Text style={styles.topicos}>1. Coloque todos os ingredientes dentro de uma panela (menos as maçãs).</Text>
      <Text style={styles.topicos}>2. Misture apenas mexendo a panela (não use nenhum tipo de colher, pois, pode quebrar o ponto da calda).</Text>
       <Text style={styles.topicos}>3. Continue mexendo no fogo alto, quando ferver, mude para médio e mantenha por aproximadamente 25 minutos.</Text>

           <Text style={styles.sectionTitle}>Modo de Preparo das Maçãs do Amor:</Text>   
       <Text style={styles.topicos}>1. Mergulhe a ponta de um palito de sorvete na calda e pingue na forma em segundos.</Text>
        <Text style={styles.topicos}>2. Pressione com o dedo (ela amassará) e solte sobre a forma; se ela fizer barulho de sólida, desligue imediatamente.</Text>
       <Text style={styles.topicos}>3. Pegue as maçãs que voçê deixou nas formas e comece a mergulhar elas na calda, faça isso o mais breve possível, pois a calda irá endurecendo com o tempo.</Text>
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