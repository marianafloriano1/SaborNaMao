import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>

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
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:5,
          }} onPress={() => nav.navigate('picole')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/picole.png')}/> 
         </View>
         <Text style={styles.texto}>Picolé de Iogurte</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
           borderColor:'#95ad7b',
            borderWidth:5,
          }} onPress={() => nav.navigate('brigadeiro')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/brigadeiro.png')}/>
           </View>
          <Text style={styles.texto}>Brigadeiro</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('pave')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pave.png')}/>
           </View>
         <Text style={styles.texto}>Pavê de Chocolate</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            borderColor:'#95ad7b',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('danone')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/iogurt.png')}/>
           </View>
         <Text style={styles.texto}>Danoninho Caseiro </Text>
        </Pressable>
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
    backgroundColor:'#c6dbb2',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
