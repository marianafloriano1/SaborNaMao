import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#FF8F7E" />
      </TouchableOpacity>

       <ScrollView contentContainerStyle={styles.scroll}>
<Text style={styles.texto2}>Aperitivos para Festas</Text>       
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
            borderColor:'#FF8F7E',
            borderWidth:4,
          }} onPress={() => nav.navigate('cookie')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/cookies.png')}/> 
         </View>
         <Text style={styles.texto}>Cookies de Chocolate</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:4,
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
          marginRight: 20,
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
           borderColor:'#FF8F7E',
            borderWidth:4,
          }} onPress={() => nav.navigate('cupcake')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cupcake.png')}/>
           </View>
          <Text style={styles.texto}>Cupcake de Morango</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:4,
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
          marginRight: 20,
        }}>
        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('batata')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/batatas.png')}/>
           </View>
         <Text style={styles.texto}>Batata Frita</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#FF8F7E',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('hotdog')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/hotdog.png')}/>
           </View>
         <Text style={styles.texto}>Cachorro Quente</Text>
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
    marginTop:15,
    color: '#565656',
  },
  texto2:{
    color: '#FF8F7E',
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
    top: 75,
    zIndex: 1,
    left: 20
  },
  
});
