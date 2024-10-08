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
        <FontAwesome name="arrow-circle-left" size={28} color="#609f84" />
      </TouchableOpacity>

       <Text style={styles.texto2}>Para Mamães Fazerem</Text>  
       <View style={styles.quadrado}>

       
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207,  0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('sopa')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/soup.png')} />
            <Text style={styles.texto}>Sopinha</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('papinha')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/papinha.png')} />
            <Text style={styles.texto3}>Papinha</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('panqueca_maca')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pancakes.png')} />
            <Text style={styles.texto}>Panqueca de Maçã</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/bread.png')} />
            <Text style={styles.texto3}>Pãozinho</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('macarrao_bebe')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pesto.png')} />
            <Text style={styles.texto}>Macarrão Com Espinafre</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(193, 219, 207, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('panqueca_banana')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/panquecaa.png')} />
            <Text style={styles.texto3}>Panqueca de Banana</Text>
          </View>
        </Pressable>
        <Image source={require('../../img/mamae.png')} style={styles.imagemm}></Image>
  
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#c1dbcf ',
   
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
    color: '#609f84',
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
    width: 120,
    height: 120,
    marginLeft: 200,
    marginTop: 20
    },
  
});

