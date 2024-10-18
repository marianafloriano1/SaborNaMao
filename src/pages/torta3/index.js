
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
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('diabetes')}>
<FontAwesome name="arrow-circle-left" size={28} color="#578ad6" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
        Torta Frango com Brócolis
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}300 g de brócolis cozido
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 cebola picada
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Sal a gosto
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Folhas de salsinha fresca a gosto
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Pimenta-do-reino a gosto
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}300 g de frango desfiado
            </Text>
          </TouchableOpacity>
          <Text style={styles.ingrediente}>  Recheio:</Text>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}200 g de frango desfiado
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}> 
              {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}120 g de creme de ricota
            </Text>
          </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}> 
              {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}100 g de brócolis cozido
            </Text>
          </TouchableOpacity>
        </View>
      </View>



      


    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
   
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text>No liquidificador, coloque o brócolis cozido cortado em ramos, a cebola, as claras de ovos, o sal, a salsinha e a pimenta-do-reino e bata bem. Adicione o frango desfiado e bata mais um pouco para a massa ficar uniforme.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Unte um refratário quadrado de 20cm e despeje metade da massa no fundo.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text> Distribua o frango desfiado, o creme de ricota e o restante dos ramos de brócolis cozido, e cubra com a outra metade da massa.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4</Text> Leve ao forno preaquecido a 200°C para assar por 30min.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5</Text> Sirva em seguida e aproveite.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6</Text> A torta pronta pode ser armazenada em pote fechado na geladeira por 1 dia ou no freezer por até 30 dias.
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
    color: '#578ad6',
  },
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
    color: '#578ad6',
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#578ad6',
    paddingVertical: 5,
  },
  ingredientesContainer: {
    flexDirection: 'row', // Exibe em duas colunas
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  topicos: {
    marginBottom: 10,
    lineHeight: 24,
  },
  numero: {
    color: '#578ad6',
    fontWeight: 'bold',
    fontSize: 19,
    margin: 6,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
