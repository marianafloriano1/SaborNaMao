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
            borderColor:'#807b9f',
            borderWidth:5,
          }} onPress={() => nav.navigate('almodegas')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/almondegas.png')}/> 
         </View>
         <Text style={styles.texto}>Almondegas</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#807b9f',
            borderWidth:5,
          }} onPress={() => nav.navigate('nhoque')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/nhoque.png')}/>
           </View>
          <Text style={styles.texto}>Nhoque</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:5,
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
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('cuscuz')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/cuscuz.png')}/>
           </View>
         <Text style={styles.texto}>Cuscuz</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#807b9f',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('bombom')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bombom.png')}/>
           </View>
         <Text style={styles.texto}>Bombom</Text>
        </Pressable>
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
    backgroundColor:'#bbb8cd',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
