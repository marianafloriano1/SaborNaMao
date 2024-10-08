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
      <View style={styles.row}>
  
        <Text style={styles.paragraph}>
        Salpicão De Frango
        </Text>
      </View>

      <Text style={styles.ingredientes}>  INGREDIENTES</Text>
      
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''}500 g de peito de frango cozido e desfiado
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''}1 lata de ervilha
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''}200 g de uva passa
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''}Maionese a gosto
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''}Batata palha a gosto
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''}2 cenouras grandes raladas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''}1 lata de milho verde
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}> 
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : ''}1 maçã
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}> 
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : ''}Cheiro-verde a gosto
            </Text>
          </TouchableOpacity>
         __
         

        
           
        </View>
      </View>

      <Text style={styles.ingredientes}>  MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1</Text>Misture todos os ingredientes em uma vasilha grande, menos a batata palha.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2</Text> Depois de tudo misturado, forre com a batata palha.
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
    color: '#cc4b4e',
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#cc4b4e',
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
    color: '#cc4b4e',
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
