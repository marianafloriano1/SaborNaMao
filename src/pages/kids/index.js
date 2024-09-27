import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#95ad7b" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Para crianças fazerem</Text>    
       <View style={styles.quadrado}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 70,
          marginRight: 20,
        }}>
        
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:4,
          }} onPress={() => nav.navigate('picole')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/picole.png')}/> 
         </View>
         <Text style={styles.texto}>Picolé de Iogurte</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:4,
          }} onPress={() => nav.navigate('bolochoco')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/bolochoco.png')}/>
          </View>
           <Text style={styles.texto}>Bolo de Chocolate</Text>
        </Pressable>
         </View>

    
    
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginRight: 20,
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
           borderColor:'#95ad7b',
            borderWidth:4,
          }} onPress={() => nav.navigate('brigadeiro')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/brigadeiro.png')}/>
           </View>
          <Text style={styles.texto}>Brigadeiro</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:4,
          }} onPress={() => nav.navigate('raspadinha')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/raspadinha.png')}/>
           </View>
         <Text style={styles.texto}>Raspadinha</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginRight: 20,
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('pave')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pave.png')}/>
           </View>
         <Text style={styles.texto}>Pavê de Chocolate</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('danone')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/iogurt.png')}/>
           </View>
         <Text style={styles.texto}>Danoninho Caseiro </Text>
        </Pressable>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#c6dbb2',
   
  },
  quadrado:{
    backgroundColor: 'rgba(253, 237, 233, 0.7)',
    position: 'absolute',
    zIndex: -1,
    height: 800,
    width: 430,
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
  texto:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    marginTop:10,
    color: '#565656',
  },
  img:{
    width: 100,
    height:100,  
  },
  teste: {
    width: 141,
    height: 141,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  texto2:{
    color: '#95ad7b',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 750,
    fontWeight: 'bold',
    marginLeft: 15

  },
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20
  },
  
  
});
