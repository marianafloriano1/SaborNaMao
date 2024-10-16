
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

        

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('noite_garotas')}>
  <FontAwesome name="arrow-circle-left" size={28} color="#ff8f7e" />
</TouchableOpacity>


        <View style={styles.row}>
          
          <Text style={styles.paragraph}>
            Cookies
          </Text>
        </View>

  
      <Text style={styles.ingredientes}>INGREDIENTES</Text>
   



<View style={styles.ingredientesContainer}>
          <View style={styles.ingredientesColuna}>
            <TouchableOpacity onPress={() => toggleCheck('item1')}>
              <Text style={styles.topicos}>
                {checkedItems.item1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Meia xícara de (chá) de manteiga derretida (100g).
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item2')}>
              <Text style={styles.topicos}>
                {checkedItems.item2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                Meia xícara de (chá) de açúcar mascavo.
              </Text>
            </TouchableOpacity>
      
      
            <TouchableOpacity onPress={() => toggleCheck('item3')}>
              <Text style={styles.topicos}>
                {checkedItems.item3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                3 colheres de (sopa) de açúcar.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck('item4')}>
              <Text style={styles.topicos}>
                {checkedItems.item4 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
                1 ovo.
              </Text>
            </TouchableOpacity>
          
          <TouchableOpacity onPress={() => toggleCheck('item5')}>
            <Text style={styles.topicos}>
              {checkedItems.item5 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Meia colher de (chá) de essência de baunilha.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item6')}>
            <Text style={styles.topicos}>
              {checkedItems.item6 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              Meia colher de (chá) de fermento em pó.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck('item7')}>
            <Text style={styles.topicos}>
              {checkedItems.item7 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
              100g de gotas de chocolate ao leite.
            </Text>
          </TouchableOpacity>
        </View>
</View>
        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck('step1')}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>1.</Text> Em um recipiente, misture bem, com uma colher ou fuê a manteiga, o açúcar mascavo, açúcar, ovo e a essência de baunilha até obter uma mistura cremosa e clara. Acrescente a farinha de trigo, o fermento em pó e metade das gotas de chocolate ao leite.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step2')}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>2.</Text> Leve à geladeira por 10 minutos.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck('step3')}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? <Text style={styles.check}>✓ </Text> : <Text style={styles.bolinha}>⚪ </Text>}
            <Text style={styles.numero}>3.</Text> Modele os cookies com o auxílio de 2 colheres e coloque em uma assadeira, deixando um espaço entre eles.
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
      color: '#ff8f7e',
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
      backgroundColor: '#ff8f7e',
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
      color: '#ff8f7e',
      fontWeight: 'bold',
      fontSize: 19,
    },
    check: {
      color: '#32CD32', // Cor verde para o check
      fontSize: 20,
      marginRight: 5,
    },
  });
