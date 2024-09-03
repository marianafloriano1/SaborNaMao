import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#e48a55" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Receitas Natalinas</Text>    
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
            borderColor:'#e48a55',
            borderWidth:4,
          }} onPress={() => nav.navigate('peru')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/peru.png')}/> 
         </View>
         <Text style={styles.texto}>Peru</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:4,
          }} onPress={() => nav.navigate('arroz_natal')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/arroz_natal.png')}/>
          </View>
           <Text style={styles.texto}>Arroz Natalino</Text>
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
           borderColor:'#e48a55',
            borderWidth:4,
          }} onPress={() => nav.navigate('bolinho_arroz')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolinho.png')}/>
           </View>
          <Text style={styles.texto}>Bolinho de Arroz</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:4,
          }} onPress={() => nav.navigate('farofa')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/farofa.png')}/>
           </View>
         <Text style={styles.texto}>Farofa De Ovo</Text>
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
            borderColor:'#e48a55',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('salpicao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/salpicao.png')}/>
           </View>
         <Text style={styles.texto}>Salpicão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('salada')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/salada.png')}/>
           </View>
         <Text style={styles.texto}>Salda Natalina</Text>
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
    backgroundColor: '#ffcaaa',
   
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
    color: '#e48a55',
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
