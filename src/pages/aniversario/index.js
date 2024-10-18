import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      
<ImageBackground style={styles.container} source={require('../../img/pag.png')}>
<ScrollView contentContainerStyle={styles.scroll}>

       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#f14992" />
      </TouchableOpacity>
      
<Text style={styles.texto2}>Receitas de Aniversário</Text>       
<View style={styles.quadrado}>
<Image source={require('../../img/balao.png')} style={styles.imagemm}></Image>

<Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('brigadeiro2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/brigadeiro2.png')} />
            <Text style={styles.texto}>Brigadeiro</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bolochoco2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/bolo2.png')} />
            <Text style={styles.texto3}>Bolo de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('coxinha2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/coxinha.png')} />
            <Text style={styles.texto}>Coxinha</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('beijinho')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/beijinho.png')} />
            <Text style={styles.texto3}>Beijinho</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('dadinho')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/tapioca.png')} />
            <Text style={styles.texto}>Dadinho de Tapioca</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(241, 73, 146, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('nachos')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/nachos.png')} />
            <Text style={styles.texto3}>Guacamole</Text>
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
    height: 100 
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
  },

  texto2:{
    color: '#f14992',
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
