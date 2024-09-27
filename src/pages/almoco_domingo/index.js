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
        <FontAwesome name="arrow-circle-left" size={28} color="#dfc265" />
      </TouchableOpacity>
       <Text style={styles.texto2}>Comidas de domingo</Text>       
       <View style={styles.quadrado}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 80,
          marginRight: 20,
        }}>
        
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:4,
          }} onPress={() => nav.navigate('paella')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/paella.png')}/> 
         </View>
         <Text style={styles.texto}>Paella</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:4,
          }} onPress={() => nav.navigate('feijao')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/feijoes.png')}/>
          </View>
           <Text style={styles.texto}>Feijoada</Text>
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
           borderColor:'#dfc265',
            borderWidth:4,
          }} onPress={() => nav.navigate('frango')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/frango-assado.png')}/>
           </View>
          <Text style={styles.texto}>Frango Assado</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:4,
          }} onPress={() => nav.navigate('torta')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/torta.png')}/>
           </View>
         <Text style={styles.texto}>Torta Salgada</Text>
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
            borderColor:'#dfc265',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('escondidinho')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pure-de-batata.png')}/>
           </View>
         <Text style={styles.texto}>Escondidinho</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('churrasco')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/churrasco.png')}/>
           </View>
         <Text style={styles.texto}>Churrasco</Text>
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
    backgroundColor: '#ffe8a0',
   
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
    width: 142,
    height: 142,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  quadrado:{
    backgroundColor: 'rgba(253, 237, 233, 0.7)',
    position: 'absolute',
    zIndex: -1,
    height: 790,
    width: 430,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: 140,
  },
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20
  },
  texto2:{
    color: '#dfc265',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 750,
    fontWeight: 'bold',
    marginLeft: 15

  },
});
