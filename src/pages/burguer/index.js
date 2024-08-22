import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/burger.png')} />
        <Text style={styles.paragraph}>
          Hambúrguer de soja
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes (4 porções):</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 e 1/2 xícara (chá) de água.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) de proteína de soja texturizada fina.</Text>
      <Text style={styles.topicos}>- 1 xícara (chá) + 1 fatia de pão integral esmigalhado.</Text>
      <Text style={styles.topicos}>- 1/2 xícara (chá) de vagem picada.</Text>
      <Text style={styles.topicos}>- 1/4 de xícara (chá) de queijo parmesão ralado.</Text>
      <Text style={styles.topicos}>- 2 colheres (sopa) de hortelã picada.</Text>
      <Text style={styles.topicos}>- 1/2 colher (chá) de sal.</Text>
      <Text style={styles.topicos}>- 1 batata ralada.</Text>
       <Text style={styles.topicos}>- 1 abobrinha picada.</Text>
       <Text style={styles.topicos}>- 2 ovos.</Text>
       <Text style={styles.topicos}>- 3 colheres (sopa) de óleo.</Text>

       <Text style={styles.sectionTitle}>Montagem:</Text>
       <Text style={styles.topicos}>- 4 pães de hambúrguer.</Text>
       <Text style={styles.topicos}>- 4 fatias de queijo mussarela.</Text>
       <Text style={styles.topicos}>- 1 tomate em rodelas.</Text>
       <Text style={styles.topicos}>- 4 folhas de alface.</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
   <Text style={styles.topicos}>1. Em uma panela, coloque a água e a proteína de soja.</Text>
      <Text style={styles.topicos}>2. Ferva em fogo médio por 10 minutos ou até a proteína de soja ficar hidratada e macia.Escorra e deixe esfriar.</Text>
        <Text style={styles.topicos}>3. Em uma tigela, coloque a proteína de soja e adicione o restante dos ingredientes do hambúrguer.</Text>
        <Text style={styles.topicos}>4. Misture, amassando com as mãos até o ponto de modelar. Se estiver muito molhado, coloque mais um pouco de pão esmigalhado.</Text>
      <Text style={styles.topicos}>5. Se estiver muito seco, adicione mais um ovo. Molde 4 hambúrgueres.</Text>
      <Text style={styles.topicos}>6. Em uma frigideira antiaderente com o óleo, em fogo médio, frite os dois lados até dourar.</Text>
       <Text style={styles.topicos}>7. Abra um pão e, em um dos lados, coloque uma folha de alface, um hambúrguer, uma fatia de mussarela e uma rodela de tomate. Feche com o outro lado do pão.</Text>
       <Text style={styles.topicos}>8. Repita a montagem para os outros três hambúrgueres. Se desejar, sirva acompanhado com batata chips, catchup e mostarda.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1b2cd',
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
    color: '#7d6094',
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
    color: '#7d6094',
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
