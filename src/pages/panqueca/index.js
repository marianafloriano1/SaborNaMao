
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
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('morando_sozinho')}>
<FontAwesome name="arrow-circle-left" size={28} color="#6E789C" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
          Panqueca Americana
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item1')}>
          <Text style={styles.topicos}>
            {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''} 1 Ovo.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item2')}>
          <Text style={styles.topicos}>
            {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''} 1 Colher de açúcar.
          </Text>
        </TouchableOpacity>
     
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item3')}>
          <Text style={styles.topicos}>
            {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 3/4 Colheres de leite.
          </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => toggleCheck('item4')}>
          <Text style={styles.topicos}>
            {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''} 4 Colheres de farinha de trigo.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item5')}>
          <Text style={styles.topicos}>
            {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''} Essência de baunilha.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item6')}>
          <Text style={styles.topicos}>
            {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''} Fermento.
          </Text>
        </TouchableOpacity>

      </View>
    </View>

    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
      <Text style={styles.topicos}>
        {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1.</Text>Em uma tigela coloque o ovo e o açúcar e mexe bem.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step2')}>
      <Text style={styles.topicos}>
        {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2.</Text>Depois acrescente o leite e a essência de baunilha.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step3')}>
      <Text style={styles.topicos}>
        {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3.</Text>Adicione a farinha de trigo e o fermento e mexe até virar uma mistura homogenia.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step4')}>
      <Text style={styles.topicos}>
        {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>4.</Text> Em uma frigideira ligada em fogo baixo vai colocando a mistura até ficar da forma de uma panqueca.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step5')}>
      <Text style={styles.topicos}>
        {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>5.</Text> Quando dourar um lado vire e espera dourar o outro também.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step6')}>
      <Text style={styles.topicos}>
        {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>6.</Text> Sirva como preferir (acrescentando chocolate derretido, ou mel e frutas e varias outras possibilidades).
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
    color: '#6E789C',
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
    backgroundColor: '#6E789C',
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
    color: '#6E789C',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
