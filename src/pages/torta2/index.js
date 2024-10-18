
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
    item21: false,
    item22: false,
    item23: false,
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('vegetariano')}>
<FontAwesome name="arrow-circle-left" size={28} color="#abcb95"/>
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
         Torta de Legumes e Ricota
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item1')}>
          <Text style={styles.topicos}>
            {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de leite.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item2')}>
          <Text style={styles.topicos}>
            {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}  1 xícara (chá) de óleo.
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => toggleCheck('item3')}>
          <Text style={styles.topicos}>
            {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 4 ovos.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleCheck('item4')}>
          <Text style={styles.topicos}>
            {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Sal à gosto.
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => toggleCheck('item5')}>
          <Text style={styles.topicos}>
            {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de farinha de trigo.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item6')}>
          <Text style={styles.topicos}>
            {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de farinha de trigo integral.
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => toggleCheck('item7')}>
          <Text style={styles.topicos}>
            {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 colher (sopa) de fermento em pó químico.
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => toggleCheck('item8')}>
          <Text style={styles.topicos}>
            {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Margarina e farinha de trigo para untar.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item9')}>
          <Text style={styles.topicos}>
            {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} Queijo parmesão ralado a gosto para polvilhar.
          </Text>
        </TouchableOpacity>
        <Text style={styles.ingredientes}>RECHEIO</Text>
        <TouchableOpacity onPress={() => toggleCheck('item10')}>
          <Text style={styles.topicos}>
            {checkedItems.item10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 abobrinha picada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item11')}>
          <Text style={styles.topicos}>
            {checkedItems.item11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 cenoura cozida picada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item12')}>
          <Text style={styles.topicos}>
            {checkedItems.item12 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 xícaras (chá) de brócolis cozido picado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item13')}>
          <Text style={styles.topicos}>
            {checkedItems.item13 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 tomate sem sementes picado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item14')}>
          <Text style={styles.topicos}>
            {checkedItems.item14 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 cebola em rodelas finas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item15')}>
          <Text style={styles.topicos}>
            {checkedItems.item15 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1/2 berinjela em cubos cozida.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item16')}>
          <Text style={styles.topicos}>
            {checkedItems.item16 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 colheres (sopa) de manjericão picado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item17')}>
          <Text style={styles.topicos}>
            {checkedItems.item17 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 4 colheres (sopa) de manteiga.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item18')}>
          <Text style={styles.topicos}>
            {checkedItems.item18 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 dentes de alho picados.
          </Text>
        </TouchableOpacity>
        <Text style={styles.ingredientes}>CREME</Text>
        <TouchableOpacity onPress={() => toggleCheck('item20')}>
          <Text style={styles.topicos}>
            {checkedItems.item20 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 xícara (chá) de ricota amassada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item21')}>
          <Text style={styles.topicos}>
            {checkedItems.item21 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 lata de creme de leite.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item22')}>
          <Text style={styles.topicos}>
            {checkedItems.item22 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 copo de requeijão cremoso (200g).
          </Text>
        </TouchableOpacity>

        
        

  
      </View>
    </View>

    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
      <Text style={styles.topicos}>
        {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1.</Text>Para o recheio, em uma tigela, misture a abobrinha, a cenoura, o brócolis, o tomate, a cebola, a berinjela e o manjericão.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step2')}>
      <Text style={styles.topicos}>
        {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2.</Text>Em uma panela, derreta a manteiga e refogue o alho por 2 minutos.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step3')}>
      <Text style={styles.topicos}>
        {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3.</Text> Despeje sobre os legumes, misture e tempere com sal e pimenta.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step4')}>
      <Text style={styles.topicos}>
        {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4.</Text>Para o creme, bata os ingredientes no liquidificador e reserve.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step5')}>
      <Text style={styles.topicos}>
        {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5.</Text> Para a massa, bata no liquidificador o leite, o óleo, os ovos, sal, as farinhas e o fermento.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step6')}>
      <Text style={styles.topicos}>
        {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6.</Text> Espalhe metade da massa em uma fôrma de 25cm x 35cm untada e enfarinhada.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step7')}>
      <Text style={styles.topicos}>
        {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7.</Text> Espalhe os legumes sobre a massa e cubra com o creme de ricota.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step8')}>
      <Text style={styles.topicos}>
        {checkedItems.step8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7.</Text> Cubra com a massa restante, polvilhe com parmesão e leve ao forno médio (180º C), preaquecido, por 40 minutos ou até dourar. Sirva.
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
    color: '#abcb95',
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
    backgroundColor: '#abcb95',
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
    color: '#abcb95',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
