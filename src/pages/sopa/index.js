
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('mamaes')}>
<FontAwesome name="arrow-circle-left" size={28} color="#609f84" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
        Sopinha de Legumes com Frango
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 batata
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item2')}>
            <Text style={styles.topicos}> 
              {checkedItems.item2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}Metade de uma cenoura
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}> 
              {checkedItems.item3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}2 peitos de frango
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}> 
              {checkedItems.item4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 dente de alho
            </Text>
          </TouchableOpacity>
             <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1/3 cebola
            </Text>
          </TouchableOpacity>
             <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}> 
              {checkedItems.item6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>}1 colher de chá de azeite de oliva (opcional)
            </Text>
          </TouchableOpacity>
        </View>
      </View> 



      


    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
   
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>1</Text>Em uma panela grande, adicione um pouco de água e leve ao fogo médio.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>2</Text> Adicione os pedaços de frango e cozinhe até que estejam bem cozidos, o que deve levar cerca de 15-20 minutos. Retire o frango da panela e reserve.
        </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>3</Text>Cubra com água, tampe a panela e cozinhe até que todos os ingredientes estejam bem macios e com um pouco de caldo.
        </Text>
      </TouchableOpacity> 
       <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>4</Text> Em uma panela separada, adicione o azeite de oliva e aqueça em fogo baixo.
        </Text>
      </TouchableOpacity>  
     <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>5</Text> Adicione o alho e a cebola picados e refogue até que fiquem macios e aromáticos. Este passo é opcional, mas ajuda a dar mais sabor à sopa.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>6</Text> Na panela onde você cozinhou o frango, adicione a batata e a cenoura cortadas.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step7')}>
        <Text style={styles.topicos}>
          {checkedItems.step7 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>7</Text> dicione água suficiente para cobrir os legumes e leve ao fogo.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step8')}>
        <Text style={styles.topicos}>
          {checkedItems.step8 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>8</Text> Cozinhe até que os legumes estejam bem macios, o que deve levar cerca de 15-20 minutos.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step9')}>
        <Text style={styles.topicos}>
          {checkedItems.step9 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>9</Text>  Adicione os pedaços de frango cozidos de volta à panela com os legumes.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step10')}>
        <Text style={styles.topicos}>
          {checkedItems.step10 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>10</Text> Cozinhe por mais 5 minutos para que os sabores se misturem bem.
        </Text>
      </TouchableOpacity>    <TouchableOpacity onPress={() => toggleCheck('step11')}>
        <Text style={styles.topicos}>
          {checkedItems.step11 ? <Text style={styles.check}>✓</Text> : <Text style={styles.bolinha}>⚪ </Text>} <Text style={styles.numero}>11</Text> Deixe a sopa esfriar um pouco e, em seguida, passe-a por um processador de alimentos ou liquidificador para obter uma textura suave e homogênea. Você pode adicionar um pouco da água do cozimento, se necessário, para ajustar a consistência.
        </Text>
      </TouchableOpacity>  
       <Text style={styles.ingrediente}>Dica:</Text>

      <Text style={styles.topicos}>A sopa pode ser armazenada na geladeira por até 3 dias ou congelada em porções pequenas para uso futuro.</Text>

      <Text style={styles.ingredientes}>  ATENÇÃO!</Text>
      <Text style={styles.topicos}>Adequado a partir de 6 meses.</Text>
    
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
    color: '#609f84',
  },
ingrediente: {
    fontSize: 17,
    marginBottom: 15,
    color: '#609f84',
  },
  ingredientes: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#609f84',
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
    color: '#609f84',
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
