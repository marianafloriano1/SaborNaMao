
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
    step13: false,
    step14: false,
    step15: false,
    step16: false,
    step17: false,
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('ceia_natal')}>
<FontAwesome name="arrow-circle-left" size={28} color="#cc4b4e" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
          Peru à Brasileira
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 peru de 4 kg
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}750 ml de vinho branco seco
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 xícara de margarina ou manteiga
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}5 dentes de alho
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}> 
              {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Sal
            </Text>
          </TouchableOpacity><TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 colher de sopa de mostarda
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}> 
              {checkedItems.item7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}3 xícaras de caldo de galinha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}> 
              {checkedItems.item8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}2 cebolas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}> 
              {checkedItems.item9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Molho de pimenta
            </Text>
          </TouchableOpacity>
          <Text style={styles.ingrediente}>Recheio:</Text>
          <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}> 
              {checkedItems.item10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 colher de sopa de cebolinha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}> 
              {checkedItems.item11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 colher de sopa de farinha de rosca
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}> 
              {checkedItems.item12 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 caldo de galinha em pó
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}> 
              {checkedItems.item13 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1/2 xícara de azeite de oliva
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item14')}>
            <Text style={styles.topicos}> 
              {checkedItems.item14 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}2 cebolas raladas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item15')}>
            <Text style={styles.topicos}> 
              {checkedItems.item15 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Pimenta do reino
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item16')}>
            <Text style={styles.topicos}> 
              {checkedItems.item16 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 colher de sopa de salsinha
            </Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item17')}>
            <Text style={styles.topicos}> 
              {checkedItems.item17 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 banana em cubos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item18')}>
            <Text style={styles.topicos}> 
              {checkedItems.item18 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1/2 xícara de óleo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item19')}>
            <Text style={styles.topicos}> 
              {checkedItems.item19 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}2 xícaras de farinha de milho
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item20')}>
            <Text style={styles.topicos}> 
              {checkedItems.item20 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Miúdos de Peru
            </Text>
          </TouchableOpacity>

        
           
        </View>
      </View>


    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text>Bata no liquidificador: 1 xícara de vinho, 1 xícara de caldo de galinha, a cebola em pedaços, alho, mostarda, molho de pimenta, a margarina ou manteiga e o sal.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Coloque em um refratário e acrescente o restante do vinho e do caldo de galinha, misture bem e reserve.
        </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text> Em fogo baixo refogue os miúdos cortados em pedaços menores da mistura de óleo e azeite, até mudarem de cor.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4</Text> Adicione o milho, o caldo de galinha, as bananas, as farinha peneiradas e a pimenta, sem parar de mexer, até formar uma farofa solta e úmida.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5</Text> Retire do fogo, acrescente o tempero verde e recheie o peru.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6</Text> Coloque o peru na assadeira sem untar.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step7')}>
        <Text style={styles.topicos}>
          {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7</Text> Cubra com papel alumínio e leve ao forno por volta de 1 hora e meia, regando constantemente com o molho da assadeira.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step8')}>
        <Text style={styles.topicos}>
          {checkedItems.step8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>8</Text> Retire o papel alumínio para dourar por mais 1 hora e meia aproximadamente, continue regando com o molho.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step9')}>
        <Text style={styles.topicos}>
          {checkedItems.step9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>9</Text> Coloque no refratário de servir e decore com farofa e tempero verde.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step10')}>
        <Text style={styles.topicos}>
          {checkedItems.step10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>10</Text> Coloque em um refratário e acrescente o restante do vinho e do caldo de galinha, misture bem e reserve.
        </Text>
      </TouchableOpacity>  <TouchableOpacity onPress={() => toggleCheck('step11')}>
        <Text style={styles.topicos}>
          {checkedItems.step11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>11</Text> Coloque em um refratário e acrescente o restante do vinho e do caldo de galinha, misture bem e reserve.
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
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
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
    flexDirection: 'row', // Exibe em duas colunas
    justifyContent: 'space-between',
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
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
