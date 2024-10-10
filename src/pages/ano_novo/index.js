import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <ImageBackground style={styles.container} source={require('../../img/aaaa.png')}>
       <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.texto2}>Ano Novo</Text>   



       <View style={styles.quadrado}>
       <Image source={require('../../img/ano.png')} style={styles.imagemm}></Image>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116, 0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('coxa')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/coxa.png')} />
            <Text style={styles.texto}>Coxa de Frango</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('frutas')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/salada-de-frutas.png')} />
            <Text style={styles.texto3}>Salada de Frutas</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('farofabacon')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/farofabacon.png')} />
            <Text style={styles.texto}>Farofa de Bacon</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('saladabatata')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/saladabatata.png')} />
            <Text style={styles.texto3}>Salada de Batata</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('risoto')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/risoto.png')} />
            <Text style={styles.texto}>Risoto</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(0, 50, 116,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('lombo')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/lombo.png')} />
            <Text style={styles.texto3}>Lombo Assado</Text>
          </View>
        </Pressable>

      </View>
      </ScrollView>
       </ImageBackground>
       
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#003274',
    zIndex: -1,
    height: 130 
  },
  quadrado: {
    backgroundColor: 'rgba(253, 237, 233, 1)',
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
    color: '#fff',
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
    marginTop:90,
    marginLeft: 270
  },

  img: {
    width: 100,
    height: 100,
    marginTop:90,
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
    marginLeft: 250,
    marginTop: 20
    },
  
});