import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  // Estado para controlar os itens marcados
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    step1: false,
    step2: false,
  });

  // Função para alternar a marcação de um item
  const toggleCheck = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('cha')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#fbca8e" />
      </TouchableOpacity>
        <Text style={styles.paragraph}>
          Chá de Laranja
        </Text>
      </View>

      <Text style={styles.ingredientes}>INGREDIENTES</Text>
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''} 7 laranjas para suco
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}>
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''} 1,5 litro de água
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 15 cravos da índia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}>
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''} 3 colheres de açúcar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1.</Text> Coloque para ferver a água com os cravos e o açúcar. Deixe ferver por 10 minutos. Enquanto isso, retire o suco da laranja e reserve.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2.</Text> Quando a água estiver fervendo misture o suco de laranja natural, mas não deixe ferver novamente, somente esquente. Coloque em uma garrafa térmica e sirva.
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
    color: '#fbca8e',
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
    backgroundColor: '#fbca8e',
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
    color: '#fbca8e',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
