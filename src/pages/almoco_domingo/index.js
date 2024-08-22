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
            borderColor:'#dfc265',
            borderWidth:5,
          }} onPress={() => nav.navigate('paella')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/paella.png')}/> 
         </View>
         <Text style={styles.texto}>Paella</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#dfc265',
            borderWidth:5,
          }} onPress={() => nav.navigate('frango')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/frango-assado.png')}/>
           </View>
          <Text style={styles.texto}>Frango Assado</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('escondidinho')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pure-de-batata.png')}/>
           </View>
         <Text style={styles.texto}>Escondidinho</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#dfc265',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('churrasco')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/churrasco.png')}/>
           </View>
         <Text style={styles.texto}>Churrasco</Text>
        </Pressable>
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
    width: 130,
    height:130,  
  },
  teste: {
    width: 170,
    height: 170,
    backgroundColor:'#ffe8a0',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
