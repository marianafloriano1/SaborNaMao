import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#004aad" />
        </TouchableOpacity>
        <Text style={styles.texto2}>Área de Restrições Alimentares</Text>

        <Image source={require('../../img/cebola.png')} style={styles.imagem}></Image>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#57a8d6',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/leite.png')} />
            <Text style={styles.texto}>Intolerância a Lactose</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#5760d6',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/paoo.png')} />
            <Text style={styles.texto3}>Sensibilidade a Glúten</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#578ad6',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('diabetes')}
        >
          <View style={styles.teste}>
            <Image style={styles.img3} source={require('../../img/bala.png')} />
            <Text style={styles.texto}>Diabetes</Text>
          </View>
        </Pressable>

     <Image source={require('../../img/agua.png')} style={styles.imagemm}></Image>

    </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fcede8',
      },
      seta: {
        position: 'fixed',
        right: 10,
        top: 60,
        zIndex: 1,
        left: 20,
      },
      texto2: {
        fontSize: 24,
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginLeft: 55,
        marginTop: 55
      },
      texto: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#fff',
        position: 'absolute',
        marginLeft: 340
      },
      texto3: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#fff',
        position: 'absolute',
        marginLeft: 30
      },
      img2: {
        width: 110,
        height: 110,
        marginLeft: 340
      },
    
      img: {
        width: 90,
        height: 115,
      },
      img3: {
        width: 110,
        height: 115,
      },
  teste: {
    width: 141,
    height: 141,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

   imagemm:{
    width: '100%',
    height: 200,
    marginTop: 5

    },
    imagem:{
      width: 75,
      height: 140,
      marginLeft: 270,
      zIndex: 1,
      marginBottom: -42,
      marginTop:20
      }, 

    teste2: {
  flexDirection: 'row', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
  width: '100%', 
  marginTop: 30,
  height: 100, 
},



});
