
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
      
     
      <ScrollView showsVerticalScrollIndicator={false}>

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('pascoa')}>
<FontAwesome name="arrow-circle-left" size={28} color="#c780c5" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
          Bacalhau ao Forno 
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
       <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 kg de bacalhau
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}>
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 1/2 kg de cenoura
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 tomates (vermelho e/ou amarelo)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}>
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 colher (sopa) de extrato de tomate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Alho a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Coentro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Azeitonas
            </Text>
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 1/2 kg de batata
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}>
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 2 cebolas grandes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}>
              {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} 1 pimentão
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}>
              {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Leite de coco
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}>
              {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Sal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}>
              {checkedItems.item13 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} Azeite de oliva a gosto
            </Text>
          </TouchableOpacity>
        </View>
</View>
        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text> Dessalgue o bacalhau por 12 horas, em geladeira, trocando a água.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Corte em lascas o bacalhau, retire a pele.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text> Em uma assadeira coloque azeite de oliva no fundo, faça uma cama com cebola em rodelas, coloque por cima batatas cozidas em rodelas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step4')}>
          <Text style={styles.topicos}>
            {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4</Text> Coloque por cima o bacalhau em lascas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step5')}>
          <Text style={styles.topicos}>
            {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5</Text> Coloque outra camada de cebola, um pouco de alho em lascas, adicione pimentão cortado em palitos.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step6')}>
          <Text style={styles.topicos}>
            {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6</Text> Coloque cenoura picadinha, algumas azeitonas (pode ser sem caroço), o tomate sem sementes e cheiro verde picado.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step7')}>
          <Text style={styles.topicos}>
            {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7</Text> Acrescente o molho branco por cima, um pouco mais de cheiro verde, 1 colherada de extrato de tomate e regue leite de coco.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step8')}>
          <Text style={styles.topicos}>
            {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>8</Text> Finalize com um pouco de azeite de oliva.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step9')}>
          <Text style={styles.topicos}>
            {checkedItems.step9 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>9</Text> Leve ao forno por 30 minutos à 180°C para gratinar.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step10')}>
          <Text style={styles.topicos}>
            {checkedItems.step10 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>10</Text> Sirva com arroz branco.
          </Text>
        </TouchableOpacity>

        <Text style={styles.ingredientes}>MODO DE PREPARO DO MOLHO</Text>
        <TouchableOpacity onPress={() => toggleCheck('sauceStep1')}>
          <Text style={styles.topicos}>
            {checkedItems.sauceStep1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text> Bata no liquidificador o leite, o amido de milho e a manteiga derretida.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('sauceStep2')}>
          <Text style={styles.topicos}>
            {checkedItems.sauceStep2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Leve ao fogo e mexa bastante até engrossar a mistura.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('sauceStep3')}>
          <Text style={styles.topicos}>
            {checkedItems.sauceStep3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text> Finalmente, junte o creme de leite, a noz-moscada, a pimenta-do-reino, o sal e o ovo batido.
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
    color: '#c780c5',
  },
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
    color: '#c780c5',
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
