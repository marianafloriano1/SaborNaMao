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
            borderColor:'#be6e80',
            borderWidth:5,
          }} onPress={() => nav.navigate('maca_amor')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/maca-caramelo.png')}/> 
         </View>
         <Text style={styles.texto}>Maçã Do Amor</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#be6e80',
            borderWidth:5,
          }} onPress={() => nav.navigate('pacoca')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pacoca.png')}/>
           </View>
          <Text style={styles.texto}>Paçoca</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('bolo_fuba')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolo.png')}/>
           </View>
         <Text style={styles.texto}>Bolo De Fubá</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#be6e80',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('quentao')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/copo-de-vinho.png')}/>
           </View>
         <Text style={styles.texto}>Quentão (Vinho)</Text>
        </Pressable>
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
    backgroundColor:'#d698a6',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
