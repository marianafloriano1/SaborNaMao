import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#609f84" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Receitas para bebês</Text>    
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
            borderColor:'#609f84',
            borderWidth: 4,
          }} onPress={() => nav.navigate('sopa')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/soup.png')}/> 
         </View>
         <Text style={styles.texto}>Sopinha</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth: 4,
          }} onPress={() => nav.navigate('papinha')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/papinha.png')}/>
          </View>
           <Text style={styles.texto}>Papinha</Text>
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
           borderColor:'#609f84',
            borderWidth: 4,
          }} onPress={() => nav.navigate('panqueca_maca')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pancakes.png')}/>
           </View>
          <Text style={styles.texto}>Panqueca de Maça</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth: 4,
          }} onPress={() => nav.navigate('pao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bread.png')}/>
           </View>
         <Text style={styles.texto}>Pãozinho</Text>
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
            borderColor:'#609f84',
            borderWidth: 4,
          }}
          onPress={() => nav.navigate('macarrao_bebe')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pesto.png')}/>
           </View>
         <Text style={styles.texto}>Macarrão Com Espinafre</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth: 4,
          }}
          onPress={() => nav.navigate('panqueca_banana')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/panquecaa.png')}/>
           </View>
         <Text style={styles.texto}>Panqueca de Banana</Text>
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
    backgroundColor: '#c1dbcf',
   
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
    color: '#609f84',
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
