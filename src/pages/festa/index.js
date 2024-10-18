import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      
<ImageBackground style={styles.container} source={require('../../img/festaoi.png')}>
<ScrollView contentContainerStyle={styles.scroll}>

       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#dfc59c" />
      </TouchableOpacity>
      
<Text style={styles.texto2}>Receitas de Festa</Text>       
<View style={styles.quadrado}>
<Image source={require('../../img/cristal.jpg')} style={styles.imagemm}></Image>

<Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('espetinho')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/1.png')} />
            <Text style={styles.texto}>Espetinho Caprese </Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('tartare')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/2.png')} />
            <Text style={styles.texto3}>Tartare de Salmão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('queijo_festa')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/3 (2).png')} />
            <Text style={styles.texto}>Queijo Brie com Geleia</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('espetinho_camarao')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/6.png')} />
            <Text style={styles.texto3}>Espetinho de Camarão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('ostras')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/4.png')} />
            <Text style={styles.texto}>Ostras</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(223, 197, 156, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('canapes')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/5 (2).png')} />
            <Text style={styles.texto3}>Canapés de Carpaccio</Text>
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
    backgroundColor: '#fff',
    zIndex: -1,
    height: 160 
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
    height: 'auto'
  },
  
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    height: 'auto'
  },

  texto2:{
    color: '#dfc59c',
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
    height: 100,
    marginLeft: 220,
    marginTop: 20,
    },
});
