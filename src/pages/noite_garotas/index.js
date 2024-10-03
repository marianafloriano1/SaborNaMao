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
        <FontAwesome name="arrow-circle-left" size={28} color="#FF8F7E" />
      </TouchableOpacity>

      
<Text style={styles.texto2}>Aperitivos para Festas</Text>       
<View style={styles.quadrado}>

<Image source={require('../../img/bola.png')} style={styles.imagemm}></Image>

<Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cookie')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cookies.png')} />
            <Text style={styles.texto}>Cookies de Chocolate</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pipoca')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pipoca.png')} />
            <Text style={styles.texto3}>Pipoca Salgada</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('batata')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/batatas.png')} />
            <Text style={styles.texto}>Batata Frita</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('hotdog')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/hotdog.png')} />
            <Text style={styles.texto3}>Cachorro Quente</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cupcake')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cupcake.png')} />
            <Text style={styles.texto}>Cupcake de Morango</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(253, 215, 209, 0.9)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pizza')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pizza.png')} />
            <Text style={styles.texto3}>Pizza Portuguesa</Text>
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
    backgroundColor: '#fdd7d1',
   
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
    color: '#FF8F7E',
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

  imagemm:{
    width: 100,
    height: 140,
    marginLeft:270,
    borderRadius: 90
    },
});
