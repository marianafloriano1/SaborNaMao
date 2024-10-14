
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
    step12: false,
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
          Coxinha de Frango
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
  


<View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 colher de sopa de manteiga.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                25 ml de leite.
              </Text>
            </TouchableOpacity>
      
          
            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 batata média cozida e amassada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                50g de farinha de trigo.
              </Text>
            </TouchableOpacity>
     
          <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Tempero a gosto.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Meio peito de frango.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Requeijão (opcional).
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Farinha de rosca ou farinha panko.
            </Text>
          </TouchableOpacity>
        </View>
         </View>

      <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>1.</Text> Em uma panela coloque a manteiga e deixe derreter.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>2.</Text> Acrescente o leite, e a batata amassada e mexa bem.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>3.</Text> Adicione os temperos a gosto.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>4.</Text> Coloque a farinha e mexa por aproximadamente 3 minutos e desligue a panela.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>5.</Text> Ainda quente sove com uma espátula a massa e depois que esfriar sove mais com a mão, e reserve.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>6.</Text> Corte meio peito de frango em cubos e tempere à gosto.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step7')}>
        <Text style={styles.topicos}>
          {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>7.</Text> Leve o frango em uma frigideira quente e espere fritar.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step8')}>
        <Text style={styles.topicos}>
          {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>8.</Text> Desfie o frango com auxílio de garfos.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step9')}>
        <Text style={styles.topicos}>
          {checkedItems.step9 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>9.</Text> Depois de desfiado misture o frango com o requeijão (opcional).
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step10')}>
        <Text style={styles.topicos}>
          {checkedItems.step10 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>10.</Text> Pegue a massa reservada, abra na mão, coloque o recheio no meio e vá moldando a sua coxinha.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step11')}>
        <Text style={styles.topicos}>
          {checkedItems.step11 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>11.</Text> Passe a sua coxinha com cuidado na farinha de rosca ou farinha panko e leve para fritar em óleo bem quente até ficar dourada.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step12')}>
        <Text style={styles.topicos}>
          {checkedItems.step12 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>12.</Text> Está pronto a sua coxinha! Aproveite!
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
