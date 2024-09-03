import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#be6e80" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Comidas tipícas</Text>    
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
            borderColor:'#be6e80',
            borderWidth:4,
          }} onPress={() => nav.navigate('maca_amor')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/maca-caramelo.png')}/> 
         </View>
         <Text style={styles.texto}>Maçã Do Amor</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:4,
          }} onPress={() => nav.navigate('pamonha')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/pamonha.png')}/>
          </View>
           <Text style={styles.texto}>Pamonha Salgada</Text>
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
           borderColor:'#be6e80',
            borderWidth:4,
          }} onPress={() => nav.navigate('pacoca')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pacoca.png')}/>
           </View>
          <Text style={styles.texto}>Paçoca</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:4,
          }} onPress={() => nav.navigate('milho')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/milho.png')}/>
           </View>
         <Text style={styles.texto}>Milho Cozido</Text>
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
            borderColor:'#be6e80',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('bolo_fuba')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolo.png')}/>
           </View>
         <Text style={styles.texto}>Bolo De Fubá</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('quentao')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/copo-de-vinho.png')}/>
           </View>
         <Text style={styles.texto}>Quentão (Vinho)</Text>
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
    backgroundColor: '#d698a6',
   
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
    color: '#be6e80',
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
