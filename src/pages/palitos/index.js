import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('diabetes')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#578ad6" />
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.paragraph}>Palitos de cenoura</Text>
        </View>

        <Text style={styles.ingredientes}>INGREDIENTES</Text>
        <View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 kg de cenouras
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                10 ml de azeite de oliva
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                2 claras de ovos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Sal a gosto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item5')}>
              <Text style={styles.topicos}>
                {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Pimenta-do-reino a gosto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item6')}>
              <Text style={styles.topicos}>
                {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                100 g de queijo parmesão ralado
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item7')}>
              <Text style={styles.topicos}>
                {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Salsinha fresca picada a gosto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item8')}>
              <Text style={styles.topicos}>
                {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                120 g de molho de iogurte diet ou outro de sua preferência
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>1</Text> Preaqueça o forno a 220ºC.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>2</Text> Enquanto isso, lave, descasque e corte as cenouras em palitos, como se fosse fazer batatas fritas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>3</Text> Tempere os vegetais com o azeite, o sal e a pimenta-do-reino e espalhe por cima o queijo parmesão ralado, misturando bem os temperos.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step4')}>
          <Text style={styles.topicos}>
            {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>4</Text> Espalhe as cenouras em uma única camada sobre uma assadeira antiaderente ou untada com azeite.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step5')}>
          <Text style={styles.topicos}>
            {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>5</Text> Leve para assar até que os palitos fiquem macios e ligeiramente tostados, por cerca de 20 min. Se necessário, agite a assadeira na metade do tempo para que asse de maneira mais uniforme.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step6')}>
          <Text style={styles.topicos}>
            {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>6</Text> Caso queira fazer na air fryer, siga as mesmas orientações, respeitando a capacidade do cesto do seu equipamento, sem sobrepor os palitos de cenoura. O tempo e a temperatura são os mesmos do forno convencional.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step7')}>
          <Text style={styles.topicos}>
            {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>7</Text> Retire do forno e decore com salsinha picada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step8')}>
          <Text style={styles.topicos}>
            {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>8</Text> Sirva em seguida com um molho de iogurte diet ou outro de sua preferência.
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
