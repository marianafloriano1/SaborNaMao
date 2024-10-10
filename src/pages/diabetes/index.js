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
        <FontAwesome name="arrow-circle-left" size={28} color="#578ad6" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Receitas para Diabéticos</Text>    
       <View style={styles.quadrado}>
       <Image source={require('../../img/diabete.png')} style={styles.imagemm}></Image>

       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 50,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('torta3')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/verdee.png')} />
            <Text style={styles.texto}>Torta Salgada</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('palitos')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/cenouras.png')} />
            <Text style={styles.texto3}>Palitos de Cenoura</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cheesecake')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cheesecake.png')} />
            <Text style={styles.texto}>Cheese Cake</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('quibe')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/quibe.png')} />
            <Text style={styles.texto3}>Quibes Vegetais</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('salmao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/salmao.png')} />
            <Text style={styles.texto}>Salmão Grelhado</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(145, 181, 234, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('salada2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/salad.png')} />
            <Text style={styles.texto3}>Salada Tropical</Text>
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
    backgroundColor: '#91b5ea',
   
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
    width: 80,
    height: 100,
    marginLeft: 250,
    marginTop: 20,
    },

  texto2:{
    color: '#578ad6',
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
