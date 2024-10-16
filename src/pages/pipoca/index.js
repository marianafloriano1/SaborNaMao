
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
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
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
          Pipoca Salgada
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item1')}>
          <Text style={styles.topicos}>
            {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 copo de 200ml de milho.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item2')}>
          <Text style={styles.topicos}>
            {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1/2 colher de sobremesa de margarina.
          </Text>
        </TouchableOpacity>
     
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item3')}>
          <Text style={styles.topicos}>
            {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 5 colheres de sopa de óleo.
          </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.ingredientes}>OPCIONAL</Text>
        <TouchableOpacity onPress={() => toggleCheck('item4')}>
          <Text style={styles.topicos}>
            {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Sal a gosto.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item5')}>
          <Text style={styles.topicos}>
            {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Caldo em pó (bacon, carne).
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
      <Text style={styles.topicos}>
        {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}<Text style={styles.numero}>1.</Text>Coloque o óleo e a margarina em uma panela (funda ou própria para pipoca).
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step2')}>
      <Text style={styles.topicos}>
        {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2.</Text> Deixe fritar até escurecer um pouco (isso é o que dá o gosto de manteiga na pipoca).
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step3')}>
      <Text style={styles.topicos}>
        {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3.</Text> Coloque o milho e feche bem com a tampa da panela.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step4')}>
      <Text style={styles.topicos}>
        {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4.</Text> Deixe em fogo forte.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step5')}>
      <Text style={styles.topicos}>
        {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5.</Text> NÃO MEXA A PANELA (é isso que faz estourar todos os grãos).
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step6')}>
      <Text style={styles.topicos}>
        {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6.</Text> Quando estiver estourando pouco, desligue para não queimar.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step7')}>
      <Text style={styles.topicos}>
        {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7.</Text> Coloque o sal e o caldo em pó, trocando da panela para a tigela para distribuir bem.
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
