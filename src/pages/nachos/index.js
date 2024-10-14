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
    item10: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
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
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('aniversario')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#f14992" />
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.paragraph}>Guacamole</Text>
        </View>

        <Text style={styles.ingredientes}>INGREDIENTES</Text>
        <View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 abacate brasileiro médio (ou 4 avocados).
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 cebola pequena.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 maço de coentro.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Suco de 1 limão grande.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item5')}>
              <Text style={styles.topicos}>
                {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Sal à gosto.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item6')}>
              <Text style={styles.topicos}>
                {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 tomate grande sem sementes.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item7')}>
              <Text style={styles.topicos}>
                {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                2 dentes de alho bem socados.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item8')}>
              <Text style={styles.topicos}>
                {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 pimenta malagueta sem sementes.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item9')}>
              <Text style={styles.topicos}>
                {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Azeite extra virgem.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item10')}>
              <Text style={styles.topicos}>
                {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Nachos para acompanhar.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>1.</Text> Amasse o abacate com um garfo, acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um purê.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>2.</Text> Pique a cebola, o tomate e o coentro. Pique bem a pimenta.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>3.</Text> Acrescente os ingredientes picados ao "purê" de abacate.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step4')}>
          <Text style={styles.topicos}>
            {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>4.</Text> Adicione o sal e pimenta a gosto.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step5')}>
          <Text style={styles.topicos}>
            {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>5.</Text> Sirva em pequenas porções com uma boa quantidade de nachos.
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
    color: '#f14992',
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
    backgroundColor: '#f14992',
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
    color: '#f14992',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
