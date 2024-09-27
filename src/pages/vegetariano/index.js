import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#7d6094" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Receitas vegetarianas</Text>    
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
            borderColor:'#7d6094',
            borderWidth: 4,
          }} onPress={() => nav.navigate('quiche')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/quiche.png')}/> 
         </View>
         <Text style={styles.texto}>Quiche</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth: 4,
          }} onPress={() => nav.navigate('burguer')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/burger.png')}/>
          </View>
           <Text style={styles.texto}>Hambúrguer</Text>
        </Pressable>
         </View>

    
    
      <View
        style={{
          flex: 1,
          marginRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
           borderColor:'#7d6094',
            borderWidth: 4,
          }} onPress={() => nav.navigate('queijo')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolinha_queijo.png')}/>
           </View>
          <Text style={styles.texto}>Bolinha de Queijo</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth: 4,
          }} onPress={() => nav.navigate('torta2')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pie.png')}/>
           </View>
         <Text style={styles.texto}>Torta Salgada</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          marginRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth: 4,
          }}
          onPress={() => nav.navigate('pasta')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pasta.png')}/>
           </View>
         <Text style={styles.texto}>Macarrão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth: 4,
          }}
          onPress={() => nav.navigate('lasanha')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/lasanha.png')}/>
           </View>
         <Text style={styles.texto}>Lasanha</Text>
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
    backgroundColor: '#c1b2cd',
   
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
    color: '#7d6094',
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
    top: 60,
    zIndex: 1,
    left: 20
  },
});
