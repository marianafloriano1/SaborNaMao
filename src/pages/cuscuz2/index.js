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
        <Image style={styles.img} source={require('./assets/pudim.png')} />
        <Text style={styles.paragraph}>
          Cuscus
        </Text>
      </View>

      <Text style={styles.ingredientes}>  INGREDIENTES</Text>
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''}1/2 xícara (chá) de azeite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}>
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''} 1 lata ou caixa de molho de tomate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 2 latas de água
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}>
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''} 1 lata de milho verde
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''} 2 latas de sardinha ou atum
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''}sal
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''}3 xícaras de farinha de milho grossa
            </Text>
          </TouchableOpacity>
        </View>
       <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : ''} 1 lata de ervilha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}>
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : ''} 1 pimentão
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}>
              {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : ''} cheiro-verde a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}>
              {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : ''} 1 tablete de caldo de legumes ou do seu sabor preferido
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}>
              {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : ''} 3 ovos cozidos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}>
              {checkedItems.item13 ? <Text style={styles.check}>✓ </Text> : ''} 1 cebola picada
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item14')}>
            <Text style={styles.topicos}>
              {checkedItems.item14 ? <Text style={styles.check}>✓ </Text> : ''} tomate para decorar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.ingredientes}>  MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1</Text> Refogue no azeite, a cebola, o pimentão, as azeitonas, a ervilha, o milho verde, o molho de tomate, o cheiro-verde, a sardinha, os temperos e o tablete de caldo.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2</Text> Coloque a água, deixe ferver, coloque a farinha de milho e cozinhe. 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text> Unte a forma com azeite, e coloque os ovos, os tomates e a sardinha por baixo.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>4</Text> Coloque a massa na forma, deixe esfriar e desenforme.
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
    color: '#c780c5',
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
    backgroundColor: '#c780c5',
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
    color: '#c780c5',
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



