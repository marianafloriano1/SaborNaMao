import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
        <FontAwesome name="arrow-circle-left" size={28} color="#807b9f" />
      </TouchableOpacity>
       <ScrollView contentContainerStyle={styles.scroll}>
       <Text style={styles.texto2}>Receitas veganas práticas</Text>    
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
            borderColor:'#807b9f',
            borderWidth:4,
          }} onPress={() => nav.navigate('almodegas')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/almondegas.png')}/> 
         </View>
         <Text style={styles.texto}>Almondegas</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:4,
          }} onPress={() => nav.navigate('falafel')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/falafel.png')}/>
          </View>
           <Text style={styles.texto}>Falafel</Text>
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
           borderColor:'#807b9f',
            borderWidth:4,
          }} onPress={() => nav.navigate('nhoque')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/nhoque.png')}/>
           </View>
          <Text style={styles.texto}>Nhoque</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:4,
          }} onPress={() => nav.navigate('pao_queijo')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pao_de_queijo.png')}/>
           </View>
         <Text style={styles.texto}>Pão De Queijo</Text>
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
            borderColor:'#807b9f',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('cuscuz')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cuscuz.png')}/>
           </View>
         <Text style={styles.texto}>Cuscuz</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('bombom')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bombom.png')}/>
           </View>
         <Text style={styles.texto}>Bombom</Text>
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
    backgroundColor: '#bbb8cd',
   
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
    backgroundColor:'transparent',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  texto2:{
    color: '#807b9f',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 750,
    fontWeight: 'bold',
    marginLeft: 15

  },
  seta: {
    right: 20,
    top: 75,
    zIndex: 1,
    left: 14
  },
  
});
