import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  // Estado para controlar os itens marcados
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
    step9: false,
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
      <View style={styles.row}>
        <Image style={styles.img} source={require('./assets/camarao.png')} />
        <Text style={styles.paragraph}>
          Bobó de Camarão
        </Text>
      </View>

      <Text style={styles.ingredientes}>  INGREDIENTES</Text>
      <View style={styles.ingredientesContainer}>
        <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item1')}>
            <Text style={styles.topicos}>
              {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : ''}1 kg de camarão fresco
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 3 dentes de alho picados e amassados
            </Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => toggleCheck('item3')}>
            <Text style={styles.topicos}>
              {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : ''} 3 dentes de alho picados e amassados
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item4')}>
            <Text style={styles.topicos}>
              {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : ''} 6 colheres (sopa) de azeite de oliva
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : ''} 1 maço de cheiro-verde picado
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : ''} 2 latas de molho pronto de tomate
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : ''} 2 colheres (sopa) de azeite de dendê
            </Text>
          </TouchableOpacity>
        </View>
       <View style={styles.ingredientesColuna}>
          <TouchableOpacity onPress={() => toggleCheck('item8')}>
            <Text style={styles.topicos}>
              {checkedItems.item8 ? <Text style={styles.check}>✓ </Text> : ''} 2 pimentões verdes bem picadinhos
            </Text>
          </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('item9')}>
            <Text style={styles.topicos}>
              {checkedItems.item9 ? <Text style={styles.check}>✓ </Text> : ''} sal
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item10')}>
            <Text style={styles.topicos}>
              {checkedItems.item10 ? <Text style={styles.check}>✓ </Text> : ''} suco de 1 limão
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item11')}>
            <Text style={styles.topicos}>
              {checkedItems.item11 ? <Text style={styles.check}>✓ </Text> : ''} 1 kg de mandioca (prefira as que já vem embaladas e descascadas, é mais prático)
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item12')}>
            <Text style={styles.topicos}>
              {checkedItems.item12 ? <Text style={styles.check}>✓ </Text> : ''} 1 folha de louro
            </Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => toggleCheck('item13')}>
            <Text style={styles.topicos}>
              {checkedItems.item13 ? <Text style={styles.check}>✓ </Text> : ''} 2 vidros de leite de coco
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.ingredientes}>  MODO DE PREPARO</Text>
      <TouchableOpacity onPress={() => toggleCheck('step1')}>
        <Text style={styles.topicos}>
          {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>1</Text>Lave os camarões e tempere com sal, alho, pimenta e limão, deixe marinar. 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step2')}>
        <Text style={styles.topicos}>
          {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>2</Text> Pegue uma panela com água e cozinhe a mandioca em pedacinhos, com louro e a cebola em rodelas.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step3')}>
        <Text style={styles.topicos}>
          {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>3</Text> Quando estiver mole, acrescente um vidro de leite de coco.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCheck('step4')}>
        <Text style={styles.topicos}>
          {checkedItems.step4 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>4</Text> Deixe esfriar um pouco e bata no liquidificador.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step5')}>
        <Text style={styles.topicos}>
          {checkedItems.step5 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>5</Text> Esquente o azeite de oliva, junte a cebola ralada e deixe dourar.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step6')}>
        <Text style={styles.topicos}>
          {checkedItems.step6 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>6</Text> Acrescente os camarões e frite.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step7')}>
        <Text style={styles.topicos}>
          {checkedItems.step7 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>7</Text>Adicione as 2 latas de pomarola, o cheiro-verde, o pimentão e deixe cozinhar por alguns minutos.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step8')}>
        <Text style={styles.topicos}>
          {checkedItems.step8 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>8</Text> Junte na mesma panela, a mandioca batida no liquidificador, outro vidro de leite de coco e o azeite de dendê.
        </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => toggleCheck('step9')}>
        <Text style={styles.topicos}>
          {checkedItems.step9 ? <Text style={styles.check}>✓ </Text> : ''} <Text style={styles.numero}>9</Text> Deixe levantar fervura e está pronto.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffe2c0',
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
  img: {
    width: 90,
    height: 90,
    marginRight: 30,
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
  ingredientesColuna: {
    flex: 1,
    marginRight: 10,
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

