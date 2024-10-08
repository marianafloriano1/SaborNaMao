import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  // Estado para controlar os itens marcados
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
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    sauceStep1: false,
    sauceStep2: false,
    sauceStep3: false,
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
      <View style={styles.row}>
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('diabetes')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#578ad6" />
      </TouchableOpacity>
        <Text style={styles.paragraph}>
         Salmão Grelhado
        </Text>
      </View>

      <Text style={styles.ingredientes}>  INGREDIENTES</Text>
      
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''}¼ xíc. de azeite
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''}½ col. (chá) de cominho
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''}¼ col. (chá) de tomilho
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''}1 col. (sopa) de suco de limão
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''}1 col. (sopa) de salsa picada
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''}¼ xíc. alho-poró picado
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''}600g de filés de salmão sal a gosto
            </Text>
          </TouchableOpacity>
        
           
        </View>
      </View>

      <Text style={styles.ingredientes}>  MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1</Text>Junte todos os temperos em uma tigela, coloque o peixe e deixe descansar por uma hora.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2</Text> Tire os filés e grelhe cada um por 4 minutos de cada lado até que o peixe fique firme.
        </Text>
      </TouchableOpacity>
      
  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffe2c0',
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
  ingredientesColuna: {
    flex: 1,
    marginRight: 10,
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



