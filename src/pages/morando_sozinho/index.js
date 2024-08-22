import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scroll}>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 50,
        }}>
        
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:5,
          }} onPress={() => nav.navigate('arroz')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/arroz.png')}/> 
         </View>
         <Text style={styles.texto}>Arroz de Forno</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#6E789C',
            borderWidth:5,
          }} onPress={() => nav.navigate('macarrao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/macarrao.png')}/>
           </View>
          <Text style={styles.texto}>Macarrao à Bolonhesa</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('empadao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/empadao.png')}/>
           </View>
         <Text style={styles.texto}>Empadão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#6E789C',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('panqueca')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/panqueca.png')}/>
           </View>
         <Text style={styles.texto}>Panquecas</Text>
        </Pressable>
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
    width: 130,
    height:130,  
  },
  teste: {
    width: 170,
    height: 170,
    backgroundColor:'#b8c7cc',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
