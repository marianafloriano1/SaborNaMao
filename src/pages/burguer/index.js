
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const nav = useNavigation();

  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
    item11: false,
    item12: false,
    item13: false,
    item14: false,
    item15: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
  });

  // Função para alternar a marcação de um item
  const toggleCheck = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  

  return (
    <View style={styles.container}>
      
     
      <ScrollView showsVerticalScrollIndicator={false}>

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('vegetariano')}>
<FontAwesome name="arrow-circle-left" size={28} color="#abcb95"/>
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
         Hambúrguer de Soja
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
   


<View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1 e 1/2 xícara (chá) de água.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1 xícara (chá) de proteína de soja texturizada fina.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1 xícara (chá) + 1 fatia de pão integral esmigalhado.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1/2 xícara (chá) de vagem picada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item5')}>
              <Text style={styles.topicos}>
                {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1/4 de xícara (chá) de queijo parmesão ralado.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item6')}>
              <Text style={styles.topicos}>
                {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                2 colheres (sopa) de hortelã picada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item7')}>
              <Text style={styles.topicos}>
                {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1/2 colher (chá) de sal.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item8')}>
              <Text style={styles.topicos}>
                {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1 batata ralada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item9')}>
              <Text style={styles.topicos}>
                {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                1 abobrinha picada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item10')}>
              <Text style={styles.topicos}>
                {checkedItems.item10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                2 ovos.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item11')}>
              <Text style={styles.topicos}>
                {checkedItems.item11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
                3 colheres (sopa) de óleo.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.ingredientes}>MONTAGEM</Text>
        <TouchableOpacity onPress={() => toggleCheck('item12')}>
          <Text style={styles.topicos}>
            {checkedItems.item12 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            4 pães de hambúrguer.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item13')}>
          <Text style={styles.topicos}>
            {checkedItems.item13 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            4 fatias de queijo mussarela.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item14')}>
          <Text style={styles.topicos}>
            {checkedItems.item14 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            1 tomate em rodelas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item15')}>
          <Text style={styles.topicos}>
            {checkedItems.item15 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            4 folhas de alface.
          </Text>
        </TouchableOpacity>

        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>1.</Text> Em uma panela, coloque a água e a proteína de soja.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>2.</Text> Ferva em fogo médio por 10 minutos ou até a proteína de soja ficar hidratada e macia. Escorra e deixe esfriar.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>3.</Text> Em uma tigela, coloque a proteína de soja e adicione o restante dos ingredientes do hambúrguer.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step4')}>
          <Text style={styles.topicos}>
            {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>4.</Text> Misture, amassando com as mãos até o ponto de modelar. Se estiver muito molhado, coloque mais um pouco de pão esmigalhado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step5')}>
          <Text style={styles.topicos}>
            {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>5.</Text> Se estiver muito seco, adicione mais um ovo. Molde 4 hambúrgueres.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step6')}>
          <Text style={styles.topicos}>
            {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>6.</Text> Em uma frigideira antiaderente com o óleo, em fogo médio, frite os dois lados até dourar.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step7')}>
          <Text style={styles.topicos}>
            {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>7.</Text> Abra um pão e, em um dos lados, coloque uma folha de alface, um hambúrguer, uma fatia de mussarela e uma rodela de tomate. Feche com o outro lado do pão.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step8')}>
          <Text style={styles.topicos}>
            {checkedItems.step8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 
            <Text style={styles.numero}>8.</Text> Repita a montagem para os outros três hambúrgueres. Se desejar, sirva acompanhado com batata chips, catchup e mostarda.
          </Text>
        </TouchableOpacity>



   
    </ScrollView>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fdede9',
    padding: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    color: '#abcb95',
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 30,
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#abcb95',
    paddingVertical: 5,
  },
  ingredientesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ingredientesColuna: {
    flex: 1,
    marginRight: 10,
  },
  topicos: {
    marginBottom: 10,
    lineHeight: 24,
  },
  numero: {
    color: '#abcb95',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
