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
        <FontAwesome name="arrow-circle-left" size={28} color="#5760d6" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Receitas sem Glúten</Text>    
       <View style={styles.quadrado}>
       <Image source={require('../../img/glutennn.png')} style={styles.imagemm}></Image>

       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243, 0.5)',
            borderRadius: 25,
            marginTop: 50,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('sanduiche_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/sanduiche.png')} />
            <Text style={styles.texto}>Sanduíche</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pizza_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pizza (3).png')} />
            <Text style={styles.texto3}>Pizza</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pastel_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pastel.png')} />
            <Text style={styles.texto}>Pastel</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('doritos_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/chipss.png')} />
            <Text style={styles.texto3}>Doritos</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243,  0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('brownie_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/brownie (6).png')} />
            <Text style={styles.texto}>Brownie</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(166, 172, 243, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bolo_gluten')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/bolo-de-cenoura.png')} />
            <Text style={styles.texto3}>Bolo de Banana</Text>
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
    backgroundColor: '#a6acf3',
   
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
    color: '#5760d6',
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
