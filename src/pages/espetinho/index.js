
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
    item16: false,
    item17: false,
    item18: false,
    item19: false,
    item20: false,
    
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
     step10: false,
      step11: false,

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
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('festa')}>
<FontAwesome name="arrow-circle-left" size={28} color="#efd5ac" />
</TouchableOpacity>

      <View style={styles.row}>
  
        <Text style={styles.paragraph}>
           Espetinho Caprese 
        </Text>
      </View>

      <Text style={styles.ingredientes}>  INGREDIENTES</Text>
      
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ?  <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Queijo em cubos (pode ser queijo minas, mussarela ou gouda)
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}Tomate cereja
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}Folhas de manjericão fresco ou rúcula
            </Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Presunto ou salame em fatias
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Azeite de oliva
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Sal e pimenta a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Palitos de espetinho (ou palitos de dente, para uma versão menor)
            </Text>
          </TouchableOpacity>
          
        </View>
      </View> 

      <Text style={styles.ingredientes}>  MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text>Em cada palito, coloque um cubo de queijo, seguido de um tomate cereja, uma folha de manjericão (ou rúcula), e uma fatia dobrada de presunto ou salame (se estiver usando).
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Alterne os ingredientes até preencher o palito.
        </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text>Regue os espetinhos com um fio de azeite de oliva.
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text>Salpique sal e pimenta a gosto para realçar os sabores.
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text>Coloque os espetinhos em uma travessa e sirva como aperitivo fresco.
        </Text>
      </TouchableOpacity> 
     
      
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
    color: '#efd5ac',
  },
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
    color: '#efd5ac',
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#efd5ac',
    paddingVertical: 5,
  },
  ingredientesContainer: {
    flexDirection: 'row', // Exibe em duas colunas
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
    color: '#efd5ac',
    fontWeight: 'bold',
    fontSize: 19,
    margin: 6,
  },
  check: {
    color: '#abcb95', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});