import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#84a66c" />
        </TouchableOpacity>
        <Text style={styles.texto2}>Área de Dietas</Text>

        <Image source={require('../../img/alfafa.png')} style={styles.imagem}></Image>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#7a9c64',
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vegetariano')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/pie.png')} />
            <Text style={styles.texto}>Receitas Vegetarianas</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#abcb95',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('vegano')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/cuscuz.png')} />
            <Text style={styles.texto3}>Receitas Veganas</Text>
          </View>
        </Pressable>

        
     <Image source={require('../../img/we.png')} style={styles.imagemm}></Image>

    </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fcede8',
      },
      seta: {
        position: 'fixed',
        right: 10,
        top: 60,
        zIndex: 1,
        left: 20,
      },
      texto2: {
        fontSize: 24,
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginLeft: 55,
        marginTop: 55
      },
      texto: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#fff',
        position: 'absolute',
        marginLeft: 340
      },
      texto3: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#fff',
        position: 'absolute',
      },
      img2: {
        width: 110,
        height: 110,
        marginLeft: 340
      },
    
      img: {
        width: 110,
        height: 110,
      },
  teste: {
    width: 141,
    height: 141,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

   imagemm:{
    width: '100%',
    height: 200,
    marginTop: 180

    },
    imagem:{
      width: 75,
      height: 100,
      marginLeft: 270,
      zIndex: 1,
      marginBottom: -35
      },

    teste2: {
  flexDirection: 'row', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
  width: '100%', 
  marginTop: 30,
  height: 100, 
},



});
