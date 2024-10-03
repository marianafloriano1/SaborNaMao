
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
          Macarrão à Bolonhesa
        </Text>
      </View>


    <Text style={styles.ingredientes}>INGREDIENTES</Text>
    <View style={styles.ingredientesContainer}>
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item1')}>
          <Text style={styles.topicos}>
            {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''} 150g de carne moída (pode ser bovina, suína, ou uma mistura).
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item2')}>
          <Text style={styles.topicos}>
            {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : ''} 1/2 cebola pequena, picada.
          </Text>
        </TouchableOpacity>
  
      <View style={styles.ingredientesColuna}>
        <TouchableOpacity onPress={() => toggleCheck('item3')}>
          <Text style={styles.topicos}>
            {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''}1 dente de alho, picado.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleCheck('item4')}>
          <Text style={styles.topicos}>
            {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''}1/2 talo de salsão, picado (opcional).
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item5')}>
          <Text style={styles.topicos}>
            {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''} 1/2 xícara de molho de tomate.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item6')}>
          <Text style={styles.topicos}>
            {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''} 1/2 colher de chá de extrato de tomate (opcional, para intensificar o sabor).
          </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => toggleCheck('item7')}>
          <Text style={styles.topicos}>
            {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''} 1/4 colher de chá de orégano seco.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item8')}>
          <Text style={styles.topicos}>
            {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : ''} 1/4 colher de chá de manjericão seco.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item9')}>
          <Text style={styles.topicos}>
            {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : ''} Sal e pimenta a gosto.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item10')}>
          <Text style={styles.topicos}>
            {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : ''} 1 colher de sopa de azeite de oliva.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item11')}>
          <Text style={styles.topicos}>
            {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : ''} 100g de macarrão (espaguete, penne, ou o que preferir).
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('item12')}>
          <Text style={styles.topicos}>
            {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : ''} Água e sal para cozinhar o macarrão.
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
    <TouchableOpacity onPress={() => toggleCheck('step1')}>
      <Text style={styles.topicos}>
        {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1.</Text>Em uma panela média, aqueça o azeite em fogo médio.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step2')}>
      <Text style={styles.topicos}>
        {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2.</Text>Adicione a cebola e o alho e refogue até que fiquem macios e levemente dourados.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step3')}>
      <Text style={styles.topicos}>
        {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3.</Text>Adicione a carne moída e cozinhe até que esteja bem dourada.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step4')}>
      <Text style={styles.topicos}>
        {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>4.</Text>Adicione o salsão (se estiver usando) e refogue por alguns minutos.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step5')}>
      <Text style={styles.topicos}>
        {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>5.</Text> Adicione o molho de tomate, o extrato de tomate (se estiver usando), o orégano, o manjericão, sal e pimenta a gosto. 
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step6')}>
      <Text style={styles.topicos}>
        {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>6.</Text> Enquanto o molho está cozinhando, coloque água para ferver em uma panela grande. Adicione sal a gosto.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step7')}>
      <Text style={styles.topicos}>
        {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>7.</Text>Cozinhe o macarrão conforme as instruções da embalagem.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step8')}>
      <Text style={styles.topicos}>
        {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>8.</Text>Escorra o macarrão e reserve um pouco da água do cozimento.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step9')}>
      <Text style={styles.topicos}>
        {checkedItems.step9 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>9.</Text>Misture o macarrão escorrido no molho bolonhesa, adicionando um pouco da água do cozimento do macarrão se necessário para ajustar a consistência.
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => toggleCheck('step10')}>
      <Text style={styles.topicos}>
        {checkedItems.step10 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>10.</Text>Sirva imediatamente, e se desejar, polvilhe com queijo parmesão ralado e algumas folhas de manjericão fresco.
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
