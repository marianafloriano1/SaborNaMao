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
            borderColor:'#FF8F7E',
            borderWidth:5,
          }} onPress={() => nav.navigate('cookie')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/cookies.png')}/> 
         </View>
         <Text style={styles.texto}>Cookies de Chocolate</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:5,
          }} onPress={() => nav.navigate('pipoca')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/pipoca.png')}/>
          </View>
           <Text style={styles.texto}>Pipoca Salgada</Text>
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
           borderColor:'#FF8F7E',
            borderWidth:5,
          }} onPress={() => nav.navigate('cupcake')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cupcake.png')}/>
           </View>
          <Text style={styles.texto}>Cupcake de Morango</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:5,
          }} onPress={() => nav.navigate('pizza')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pizza.png')}/>
           </View>
         <Text style={styles.texto}>Pizza Portuguesa</Text>
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
            borderColor:'#FF8F7E',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('batata')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/batatas.png')}/>
           </View>
         <Text style={styles.texto}>Batata Frita</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('hotdog')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/hotdog.png')}/>
           </View>
         <Text style={styles.texto}>Cachorro Quente</Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fdd7d1',
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
    backgroundColor:'#fdd7d1',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
