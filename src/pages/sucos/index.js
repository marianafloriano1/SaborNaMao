import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#d6705d" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Sucos rápidos e práticos</Text>    
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
            borderColor:'#d6705d',
            borderWidth:4,
          }} onPress={() => nav.navigate('limao')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/limao.png')}/> 
         </View>
         <Text style={styles.texto}>Suco De Limão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:4,
          }} onPress={() => nav.navigate('abacaxi')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/abacaxi.png')}/>
          </View>
           <Text style={styles.texto}>Suco De Abacaxi</Text>
        </Pressable>
         </View>

    
    
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginRight: 20,
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
           borderColor:'#d6705d',
            borderWidth:4,
          }} onPress={() => nav.navigate('morango')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/morango.png')}/>
           </View>
          <Text style={styles.texto}>Suco De Morango</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:4,
          }} onPress={() => nav.navigate('melancia')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/melancia.png')}/>
           </View>
         <Text style={styles.texto}>Suco De Melancia</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          marginRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('cenoura')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cenoura.png')}/>
           </View>
         <Text style={styles.texto}>Suco De Cenoura</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('verde')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/verde.png')}/>
           </View>
         <Text style={styles.texto}>Suco Verde</Text>
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
    backgroundColor: '#ffc19a',
   
  },
  quadrado:{
    backgroundColor: 'rgba(253, 237, 233, 0.9)',
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
    color: '#d6705d',
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
    top: 75,
    zIndex: 1,
    left: 20
  },
  
});
