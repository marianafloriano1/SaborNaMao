import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      
       <ScrollView contentContainerStyle={styles.scroll}>

       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('restricao')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#57a8d6" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Receitas sem Lactose</Text>    
       <View style={styles.quadrado}>
       <Image source={require('../../img/lactose.png')} style={styles.imagemm}></Image>

       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249, 0.5)',
            borderRadius: 25,
            marginTop: 50,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pao_lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pao_de_queijo.png')} />
            <Text style={styles.texto}>Pão de Queijo</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cookies_lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/cookies.png')} />
            <Text style={styles.texto3}>Cookies de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('chips_lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/chips.png')} />
            <Text style={styles.texto}>Chips Crocante</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('brigadeiro_lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/brigadeiro.png')} />
            <Text style={styles.texto3}>Brigadeiro</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bolo_lactose')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/bolo_lactose.png')} />
            <Text style={styles.texto}>Bolo de Laranja</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(180, 224, 249,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('churros')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/churros.png')} />
            <Text style={styles.texto3}>Churros</Text>
          </View>
        </Pressable>
  
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#b4e0f9',
   
  },
  quadrado: {
    backgroundColor: 'rgba(253, 237, 233, 0.7)',
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    width: '100%', // ou mantenha 430 se preferir
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: 110,
  },
  
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imagemm:{
    width: 90,
    height: 90,
    marginLeft: 250,
    marginTop: 20,
    },

  texto2:{
    color: '#57a8d6',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 790,
    fontWeight: 'bold',
    marginLeft: 15

  },
  texto: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
    marginLeft: 270
  },
  texto3: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
  },
  img2: {
    width: 110,
    height: 110,
    marginTop:30,
    marginLeft: 270
  },

  img: {
    width: 100,
    height: 100,
    marginTop:30,
  },
  teste: {
    width: 141,
    height: 141,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20

  },
  
});
