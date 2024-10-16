
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('noite_garotas')}>
<FontAwesome name="arrow-circle-left" size={28} color="#ff8f7e" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
          Pizza Portuguesa
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item1')}>
          <Text style={styles.topicos}>
            {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 xícaras (chá) de farinha de trigo.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item2')}>
          <Text style={styles.topicos}>
            {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 colher (sopa) de fermento em pó.
          </Text>
        </TouchableOpacity>

      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item3')}>
          <Text style={styles.topicos}>
            {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Meia colher (chá) de sal.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item4')}>
          <Text style={styles.topicos}>
            {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de água.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item5')}>
          <Text style={styles.topicos}>
            {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 4 colheres (sopa) de óleo.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item6')}>
          <Text style={styles.topicos}>
            {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 150 g de queijo muçarela.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item7')}>
          <Text style={styles.topicos}>
            {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 50 g de presunto.
          </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => toggleCheck('item8')}>
          <Text style={styles.topicos}>
            {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 tomate em rodelas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item9')}>
          <Text style={styles.topicos}>
            {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 ovo cozido fatiado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item10')}>
          <Text style={styles.topicos}>
            {checkedItems.item10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 cebola em rodelas. 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item11')}>
          <Text style={styles.topicos}>
            {checkedItems.item11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de molho de tomate.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item12')}>
          <Text style={styles.topicos}>
            {checkedItems.item12 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 4 azeitonas pretas sem caroço, em rodelas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item13')}>
          <Text style={styles.topicos}>
            {checkedItems.item13 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 pitada de orégano.
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
      <Text style={styles.topicos}>
        {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1.</Text>Em um recipiente, coloque a farinha peneirada, o fermento e o sal e misture.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step2')}>
      <Text style={styles.topicos}>
        {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2.</Text>Faça uma cova no centro e acrescente a água e o óleo.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step3')}>
      <Text style={styles.topicos}>
        {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3.</Text>Amasse bem e abra com o rolo, formando uma massa lisa.
        </Text>
        <Text style={styles.topicos}>
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step4')}>
      <Text style={styles.topicos}>
        {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4.</Text> Unte uma forma para pizza (média) e modele a massa dentro.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step5')}>
      <Text style={styles.topicos}>
        {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5.</Text> Despeje sobre a massa um pouco de molho de tomate, cubra com queijo e presunto.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step6')}>
      <Text style={styles.topicos}>
        {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6.</Text> Em seguida coloque as fatias de tomate, o ovo picado e a cebola.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step7')}>
      <Text style={styles.topicos}>
        {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7.</Text> Decore com azeitonas, tempere com orégano e leve ao forno médio (180°C) preaquecido por 20 minutos, ou até a massa ficar assada.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step8')}>
      <Text style={styles.topicos}>
        {checkedItems.step8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>8.</Text> Sirva em seguida.
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
    color: '#ff8f7e',
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
    backgroundColor: '#ff8f7e',
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
    color: '#ff8f7e',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
