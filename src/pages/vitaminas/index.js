import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
     
       <ScrollView contentContainerStyle={styles.scroll}>

       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('bebidas')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#f28d76" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Vitaminas</Text>    
       <View style={styles.quadrado}>

       <Image source={require('../../img/vitamina.png')} style={styles.imagemm}></Image>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171,  0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_melancia')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/fruit-juice (2).png')} />
            <Text style={styles.texto}>Vitamina de Melancia</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171,   0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_banana')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/banana-juice.png')} />
            <Text style={styles.texto3}>Vitamina de Banana</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_morango')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/smoothie.png')} />
            <Text style={styles.texto}>Vitamina de Morango</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_mamao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/som-tum (1).png')} />
            <Text style={styles.texto3}>Vitamina de Mamão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_maca')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/apple-juice.png')} />
            <Text style={styles.texto}>Vitamina de Maçã</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(255, 187, 171, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vitamina_acai')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/fruit-juice.png')} />
            <Text style={styles.texto3}>Vitamina de Açaí</Text>
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
    backgroundColor: '#ffbbab',
   
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
    color: '#f28d76',
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
    width: 140,
    height: 80,
    marginLeft:150,
    borderRadius: 30,
    marginTop: 20
    },
  
});

