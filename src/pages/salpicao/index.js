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
    item9: false,
    step1: false,
    step2: false,
  });

  const toggleCheck = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('ceia_natal')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#cc4b4e" />
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.paragraph}>Salpicão de Frango</Text>
        </View>

        <Text style={styles.ingredientes}>INGREDIENTES</Text>
        <View style={styles.ingredientesContainer}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 500 g de peito de frango cozido e desfiado
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}>
              {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 1 lata de ervilha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 200 g de uva passa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}>
              {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} Maionese a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} Batata palha a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 2 cenouras grandes raladas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 1 lata de milho verde
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} 1 maçã
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}>
              {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪</Text>} Cheiro-verde a gosto
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text> Misture todos os ingredientes em uma vasilha grande, menos a batata palha.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Depois de tudo misturado, forre com a batata palha.
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
    marginBottom: 20,
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
    color: '#32CD32',
    fontSize: 20,
    marginRight: 5,
  },
  bolinha: {
    fontSize: 20,
    marginRight: 5,
  },
});
