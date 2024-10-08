import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
     
       <ScrollView contentContainerStyle={styles.scroll}>

  <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('kids2')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#95ad7b" />
      </TouchableOpacity>

       <Text style={styles.texto2}>Para Crianças Fazerem</Text>  
       <View style={styles.quadrado}>

       <Image source={require('../../img/w.png')} style={styles.imagemm}></Image>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('picole')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/picole.png')} />
            <Text style={styles.texto}>Picolé de Iogurte</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bolochoco')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/bolochoco.png')} />
            <Text style={styles.texto3}>Bolo de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('brigadeiro')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/brigadeiro.png')} />
            <Text style={styles.texto}>Brigadeiro</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('raspadinha')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/raspadinha.png')} />
            <Text style={styles.texto3}>Raspadinha</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pave')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pave.png')} />
            <Text style={styles.texto}>Pavê de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(198, 219, 178,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('danone')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/iogurt.png')} />
            <Text style={styles.texto3}>Danoninho Caseiro</Text>
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
    backgroundColor: '#c6dbb2',
   
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

  texto2:{
    color: '#95ad7b',
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
    width: 100,
    height: 100,
    marginLeft:180,
    borderRadius: 30,
    marginTop: 20
    },
  
});
