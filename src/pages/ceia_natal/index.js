import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <ImageBackground style={styles.container} source={require('../../img/a.png')}>
       <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.texto2}>Receitas Natalinas</Text>   



       <View style={styles.quadrado}>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('peru')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/peru.png')} />
            <Text style={styles.texto}>Peru</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('arroz_natal')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/arroz_natal.png')} />
            <Text style={styles.texto3}>Arroz Natalino</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bolinho_arroz')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/bolinho.png')} />
            <Text style={styles.texto}>Bolinho de Arroz</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('farofa')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/farofa.png')} />
            <Text style={styles.texto3}>Farofa de Ovo</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('salpicao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/salpicao.png')} />
            <Text style={styles.texto}>Salpicão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(204, 75, 78, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('salada')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/salada.png')} />
            <Text style={styles.texto3}>Salada Natalina</Text>
          </View>
        </Pressable>
    <Image source={require('../../img/papainoel.png')} style={styles.imagemm}></Image>
      </View>
      </ScrollView>
       </ImageBackground>
       
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#cc4b4e',
    zIndex: -1,
    height: 150 
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
    width: 100,
    height: 120,
    
    },
  
});