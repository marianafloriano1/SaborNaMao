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
        <FontAwesome name="arrow-circle-left" size={28} color="#abcb95" />
      </TouchableOpacity>

      
       <Text style={styles.texto2}>Receitas vegetarianas</Text>    
       <View style={styles.quadrado}>

       <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(197, 223, 180,0.5)',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('quiche')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/quiche.png')} />
            <Text style={styles.texto}>Quiche</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(202, 223, 188, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('burguer')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/burger.png')} />
            <Text style={styles.texto3}>Hambúrguer</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(202, 223, 188,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('queijo')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/bolinha_queijo.png')} />
            <Text style={styles.texto}>Bolinha de Queijo</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(202, 223, 188,0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('torta2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pie.png')} />
            <Text style={styles.texto3}>Torta Salgada</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(202, 223, 188, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('pasta')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pasta.png')} />
            <Text style={styles.texto}>Macarrão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(202, 223, 188, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('lasanha')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/lasanha.png')} />
            <Text style={styles.texto3}>Lasanha</Text>
          </View>
        </Pressable>
        <Image source={require('../../img/vege.png')} style={styles.imagemm}></Image>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#cadfbc',
   
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
    color: '#abcb95',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 790,
    fontWeight: 'bold',
    marginLeft: 15

  },
  imagemm:{
    width: 100,
    height: 100,
    
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
