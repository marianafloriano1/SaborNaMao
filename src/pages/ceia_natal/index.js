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
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:5,
          }} onPress={() => nav.navigate('peru')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/peru.png')}/> 
         </View>
         <Text style={styles.texto}>Peru</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:5,
          }} onPress={() => nav.navigate('arroz_natal')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/arroz_natal.png')}/>
          </View>
           <Text style={styles.texto}>Arroz Natalino</Text>
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
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
           borderColor:'#e48a55',
            borderWidth:5,
          }} onPress={() => nav.navigate('bolinho_arroz')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolinho.png')}/>
           </View>
          <Text style={styles.texto}>Bolinho de Arroz</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:5,
          }} onPress={() => nav.navigate('farofa')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/farofa.png')}/>
           </View>
         <Text style={styles.texto}>Farofa De Ovo</Text>
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
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('salpicao')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/salpicao.png')}/>
           </View>
         <Text style={styles.texto}>Salpicão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#ffcaaa',
            borderRadius: 25,
            borderColor:'#e48a55',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('salada')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/salada.png')}/>
           </View>
         <Text style={styles.texto}>Salda Natalina</Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffcb9a',
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
    backgroundColor:'#ffcb9a',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
