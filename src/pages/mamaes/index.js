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
            borderColor:'#609f84',
            borderWidth:5,
          }} onPress={() => nav.navigate('sopa')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/soup.png')}/> 
         </View>
         <Text style={styles.texto}>Sopinha</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth:5,
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
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#609f84',
            borderWidth:5,
          }} onPress={() => nav.navigate('panqueca_maca')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pancakes.png')}/>
           </View>
          <Text style={styles.texto}>Panqueca de Maça</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth:5,
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
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('macarrao_bebe')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pesto.png')}/>
           </View>
         <Text style={styles.texto}>Macarrão Com Espinafre</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#609f84',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('panqueca_banana')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/panquecaa.png')}/>
           </View>
         <Text style={styles.texto}>Panqueca de Banana</Text>
        </Pressable>
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
    backgroundColor:'#c1dbcf',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
