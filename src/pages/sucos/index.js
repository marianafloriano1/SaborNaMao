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
            borderColor:'#d6705d',
            borderWidth:5,
          }} onPress={() => nav.navigate('limao')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/limao.png')}/> 
         </View>
         <Text style={styles.texto}>Suco De Limão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:5,
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
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#d6705d',
            borderWidth:5,
          }} onPress={() => nav.navigate('morango')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/morango.png')}/>
           </View>
          <Text style={styles.texto}>Suco De Morango</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:5,
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
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('cenoura')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cenoura.png')}/>
           </View>
         <Text style={styles.texto}>Suco De Cenoura</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#d6705d',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('verde')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/verde.png')}/>
           </View>
         <Text style={styles.texto}>Suco Verde</Text>
        </Pressable>
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
    backgroundColor:'#ffc19a',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
