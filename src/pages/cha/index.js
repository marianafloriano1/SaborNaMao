import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
     
       <ScrollView contentContainerStyle={styles.scroll}>

       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#fbca8e" />
      </TouchableOpacity>


       <Text style={styles.texto2}>Chás</Text>    
       <View style={styles.quadrado}>

       <Image source={require('../../img/chas.png')} style={styles.imagemm}></Image>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('limao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cha-preto.png')} />
            <Text style={styles.texto}>Chá Preto</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('abacaxi')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/cha-de-gengibre.png')} />
            <Text style={styles.texto3}>Chá de Gengibre</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('morango')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cha-verde.png')} />
            <Text style={styles.texto}>Chá Verde</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('melancia')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/hibiscus.png')} />
            <Text style={styles.texto3}>Chá de Hibisco</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cenoura')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/caneca-de-cha.png')} />
            <Text style={styles.texto}>Chá de Laranja</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(251, 202, 142, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('verde')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/caneca-de-cha (1).png')} />
            <Text style={styles.texto3}>Chá de Margarida</Text>
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
    backgroundColor: '#ffe2c0',
   
  },
  quadrado: {
    backgroundColor: 'rgba(253, 237, 233, 0.7)',
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    width: '100%', 
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

  texto2:{
    color: '#fbca8e',
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
    marginLeft: 250
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

  imagemm:{
    width: 250,
    height: 80,
    marginLeft: 80,
    borderRadius: 30,
    marginTop: 20
    },
  
});

