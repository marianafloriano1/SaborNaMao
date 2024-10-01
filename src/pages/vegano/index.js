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
        <FontAwesome name="arrow-circle-left" size={28} color="#84a66c" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Veganas</Text>    
       <View style={styles.quadrado}>

        <Image source={require('../../img/planta.png')} style={styles.imagemm}></Image>
       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149, 0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('almodegas')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/almondegas.png')} />
            <Text style={styles.texto}>Almondegas</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('falafel')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/falafel.png')} />
            <Text style={styles.texto3}>Falafel</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('nhoque')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/nhoque.png')} />
            <Text style={styles.texto}>Nhoque</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pao_queijo')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pao_de_queijo.png')} />
            <Text style={styles.texto3}>Pão de Quejio</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cuscuz')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/cuscuz.png')} />
            <Text style={styles.texto}>Cuscuz</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(171, 203, 149, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bombom')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/bombom.png')} />
            <Text style={styles.texto3}>Bom-Bom</Text>
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
    backgroundColor: '#abcb95',
   
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
    color: '#84a66c',
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
    width: 200,
    height: 180,
    marginLeft:170,
    borderRadius: 60
    },
  
});