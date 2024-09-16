  import React from 'react';
  import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';


  export default function App() {
    const nav = useNavigation();
    return (
      <View style={styles.container}>
        
       
        <ScrollView showsVerticalScrollIndicator={false}>

        

<TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
  <FontAwesome name="arrow-circle-left" size={28} color="#ff8f7e" />
</TouchableOpacity>


        <View style={styles.row}>
          
          <Text style={styles.paragraph}>
            Cookies
          </Text>
        </View>

        
        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        <View style={styles.ingredientsList}>
          <Text style={styles.topicos}>- Meia xícara de (chá) de mateiga derretida (100g).</Text>
          <Text style={styles.topicos}>- Meia xícara de (chá) de açúcar mascavo.</Text>
          <Text style={styles.topicos}>- 3 colheres de (sopa) de açúcar.</Text>
          <Text style={styles.topicos}>- 1 ovo.</Text>
          <Text style={styles.topicos}>- Meia colher de (chá) de essência de baunilha.</Text>
          <Text style={styles.topicos}>- Meia colher de (chá) de fermento em pó.</Text>
          <Text style={styles.topicos}>- 100g de gotas de chocolate ao leite.</Text>
        </View>

      
        <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Em um recipiente, misture bem, com uma colher ou fuê a manteiga, o açúcar mascavo, açúcar, ovo e a essência de baunilha até obter uma mistura cremosa e clara. Acrescente a farinha de trigo, o fermento em pó e metade das gotas de chocolate ao leite.</Text>
        <Text style={styles.topicos}>2. Leve à geladeira por 10 minutos.</Text>
        <Text style={styles.topicos}>3. Modele os cookies com o auxílio de 2 colheres e coloque em uma assadeira, deixando um espaço entre eles.</Text>
      
      
      </ScrollView>
  
      
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fdede9',  
      height: 900
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ff8f7e',
      marginLeft: 55,
      marginTop: 90,
      marginBottom: 40
    },

    seta: {
      position: 'absolute',
      right: 10,
      top: 85,
      zIndex: 1,
      left: 15
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#ff8f7e',
      marginTop: 10,
      marginLeft:20
    },
    ingredientsList: {
      marginBottom: 20,
    },
    topicos: {
      fontSize: 16,
      marginBottom: 8,
      lineHeight: 22,
      marginLeft: 10
    },
  });
