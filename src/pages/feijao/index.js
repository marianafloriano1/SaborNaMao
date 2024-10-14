
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

      

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('almoco_domingo')}>
<FontAwesome name="arrow-circle-left" size={28} color="#dfc265" />
</TouchableOpacity>


      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
          Feijoada
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 kg de feijão preto.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                2 línguas defumadas ou salgadas.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1/2 kg de costelinha de porco salgada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1/2 kg de linguiça calabresa defumada.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item5')}>
              <Text style={styles.topicos}>
                {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1/4 kg de toucinho defumado.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item6')}>
              <Text style={styles.topicos}>
                {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 rabo de porco salgado.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item7')}>
              <Text style={styles.topicos}>
                {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1/2 xícara de óleo ou banha de porco.
              </Text>
            </TouchableOpacity>
       
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Água o quanto baste.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}>
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              1/2 kg de lombo de porco salgado.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}>
              {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              2 paios.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}>
              {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              2 pés de porco salgados.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}>
              {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              2 orelhas de porco salgadas.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}>
              {checkedItems.item13 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              3 dentes de alho picados.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item14')}>
            <Text style={styles.topicos}>
              {checkedItems.item14 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Pimenta malagueta amassada (opcional).
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>1.</Text> Em uma paejeira adicione o óleo, o azeite, as cebolas picadas, a lula e refogue bem.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>2.</Text> Acrescente o camarão 7 barbas, o camarão rosa, o sal e continue refogando todos os ingredientes.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>3.</Text> Junte no refogado o tomate, o pimentão amarelo, a pimenta dedo-de-moça, a páprica doce, a páprica picante, o tempero da paella e misture bem.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>4.</Text> Coloque no refogado o arroz parboilizado, espalhe o arroz e não mexa.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>5.</Text> Dissolva o açafrão no caldo de camarão, adicione no refogado e cubra todo o arroz.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>6.</Text> Deixe cozinhar por 30 minutos e coloque mais um pouco de caldo de camarão.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step7')}>
        <Text style={styles.topicos}>
          {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>7.</Text> Quando estiver no meio do cozimento, inicie a decoração adicionando o camarão grande, o polvo, o marisco, pimentão vermelho e amarelo em tiras, ervilha e finalize com salsa picada.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step8')}>
        <Text style={styles.topicos}>
          {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
          <Text style={styles.numero}>8.</Text> Desligue o fogo e cubra com papel alumínio por 10 minutos.
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
    color: '#dfc265',
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
    backgroundColor: '#dfc265',
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
    color: '#dfc265',
    fontWeight: 'bold',
    fontSize: 19,
  },
  check: {
    color: '#32CD32', // Cor verde para o check
    fontSize: 20,
    marginRight: 5,
  },
});
