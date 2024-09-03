import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#6E789C" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Para uma só pessoa</Text>    
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
            borderColor:'#6E789C',
            borderWidth:4,
          }} onPress={() => nav.navigate('arroz')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/arroz.png')}/> 
         </View>
         <Text style={styles.texto}>Arroz de Forno</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:4,
          }} onPress={() => nav.navigate('coxinha')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/coxinha.png')}/>
          </View>
           <Text style={styles.texto}>Coxinha</Text>
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
           borderColor:'#6E789C',
            borderWidth:4,
          }} onPress={() => nav.navigate('macarrao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/macarrao.png')}/>
           </View>
          <Text style={styles.texto}>Macarrao à Bolonhesa</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:4,
          }} onPress={() => nav.navigate('pudim')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pudim.png')}/>
           </View>
         <Text style={styles.texto}>Pudim</Text>
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
            borderColor:'#6E789C',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('empadao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/empadao.png')}/>
           </View>
         <Text style={styles.texto}>Empadão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('panqueca')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/panqueca.png')}/>
           </View>
         <Text style={styles.texto}>Panquecas</Text>
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
    backgroundColor: '#b8c7cc',
   
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
    color: '#6E789C',
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
