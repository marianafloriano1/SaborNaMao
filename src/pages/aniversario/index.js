import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      

       <ScrollView contentContainerStyle={styles.scroll}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#f14992" />
      </TouchableOpacity>
<Text style={styles.texto2}>Receitas de Aniversário</Text>       
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
            borderColor:'#f14992',
            borderWidth:4,
          }} onPress={() => nav.navigate('brigadeiro2')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/brigadeiro2.png')}/> 
         </View>
         <Text style={styles.texto}>Brigadeiro</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#f14992',
            borderWidth:4,
          }} onPress={() => nav.navigate('bolochoco2')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/bolo2.png')}/>
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
           borderColor:'#f14992',
            borderWidth:4,
          }} onPress={() => nav.navigate('coxinha2')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/coxinha.png')}/>
           </View>
          <Text style={styles.texto}>Coxinha</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#f14992',
            borderWidth:4,
          }} onPress={() => nav.navigate('beijinho')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/beijinho.png')}/>
           </View>
         <Text style={styles.texto}>Beijinho</Text>
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
            borderColor:'#f14992',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('dadinho')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/tapioca.png')}/>
           </View>
         <Text style={styles.texto}>Dadinho de Tapioca</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#f14992',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('nachos')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/nachos.png')}/>
           </View>
         <Text style={styles.texto}>Nachos</Text>
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
    backgroundColor: '#e0b9df',
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
  texto2:{
    color: '#f14992',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 750,
    fontWeight: 'bold',
    marginLeft: 15

  },
  img:{
    width: 100,
    height:100,  
  },
  teste: {
    width: 140,
    height: 140,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
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
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20
  },
  
});
