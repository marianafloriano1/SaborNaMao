
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('vegetariano')}>
<FontAwesome name="arrow-circle-left" size={28} color="#abcb95 " />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
      Macarrão
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''}1 pacote de macarrão tipo parafuso (500g)
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''}3 litros de água
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 3 colheres (sopa) de óleo
            </Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''} 1 colher (sopa) de sal
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''} 1 cebola picada
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''} 1/2 xícara (chá) de azeite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''} 1 lata de milho verde (escorrido)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}> 
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : ''} 1 vidro pequeno de champignon (230g)
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}> 
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : ''} 1 xícara (chá) de azeitonas pretas sem caroço
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}> 
              {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : ''} 1 lata de ervilha (escorrida)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}> 
              {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : ''} 1/2 xícara (chá) de cebolinha picada
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}> 
              {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : ''} Sal e pimenta-do-reino a gosto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}> 
              {checkedItems.item13 ? <Text style={styles.check}>✓ </Text> : ''} 300g de queijo branco cortado em cubos
            </Text>
          </TouchableOpacity>
         
        </View>
      </View> 


    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1</Text>Cozinhe o macarrão na água com o óleo e o sal por 20 minutos ou até ficar "al dente".
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2</Text> Escorra e reserve. Em uma panela, em fogo médio, frite a cebola no azeite até dourar.
        </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text>Acrescente o milho, o champignon e as azeitonas. Deixe refogar por 5 minutos. Junte a ervilha e a cebolinha.
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text>Tempere com sal e pimenta e retire do fogo.
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text>Coloque o macarrão cozido em um refratário e adicione o molho, misturando bem.
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text>Despeje o queijo em cubos e leve ao forno médio, preaquecido, por 10 minutos. Sirva em seguida.
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
    color: '#abcb95 ',
  },
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
    color: '#abcb95 ',
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#abcb95 ',
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
    color: '#abcb95 ',
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
