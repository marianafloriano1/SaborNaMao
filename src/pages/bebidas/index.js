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
          <FontAwesome name="arrow-circle-left" size={28} color="#d6705d" />
        </TouchableOpacity>
        <Text style={styles.texto2}>Área de Bebidas</Text>

        <Image source={require('../../img/e.png')} style={styles.imagem}></Image>

        <Pressable
  style={{
    width: 360,
    height: 140,
    backgroundColor: '#ffc19a',
    borderRadius: 25,
    marginTop: 30,
    marginLeft: 25,
    position: 'relative',
    overflow: 'hidden'
  }}
  onPress={() => nav.navigate('sucos')}
>
  <Text style={styles.texto}>Naturais</Text>
  <View style={styles.teste2}>
    <Image style={styles.img} source={require('../../img/limao.png')} />
    <Image style={styles.img} source={require('../../img/abacaxi.png')} />
    <Image style={styles.img} source={require('../../img/morango.png')} />
    <Image style={styles.img} source={require('../../img/melancia.png')} />
  </View>
</Pressable>


        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#f28d76',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitaminas')}
        >
            <Text style={styles.texto}>Vitaminas</Text>
  <View style={styles.teste2}>
    <Image style={styles.img} source={require('../../img/fruit-juice (2).png')} />
    <Image style={styles.img} source={require('../../img/smoothie.png')} />
    <Image style={styles.img} source={require('../../img/apple-juice.png')} />
    <Image style={styles.img} source={require('../../img/banana-juice.png')} />
  </View>
        </Pressable>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#fbca8e',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cha')}
        >
         <Text style={styles.texto}>Chás</Text>
  <View style={styles.teste2}>
    <Image style={styles.img2} source={require('../../img/cha-preto.png')} />
    <Image style={styles.img} source={require('../../img/cha-de-gengibre.png')} />
    <Image style={styles.img} source={require('../../img/cha-verde.png')} />
    <Image style={styles.img} source={require('../../img/hibiscus.png')} />
  </View>
        </Pressable>

     <Image source={require('../../img/o.png')} style={styles.imagemm}></Image>

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
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
    position: 'absolute',
    
  },
  texto3: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 270,
    color: '#fff',
    position: 'absolute',
  },

  img: {
    width: 70,
    height: 70,
  },
  img2: {
    width: 60,
    height: 60,
    marginTop: 20
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
    marginTop: 30

    },
    imagem:{
      width: 80,
      height: 90,
      marginLeft: 270,
      zIndex: 1,
      marginBottom: -36
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
