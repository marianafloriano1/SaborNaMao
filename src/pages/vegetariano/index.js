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
            borderColor:'#7d6094',
            borderWidth:5,
          }} onPress={() => nav.navigate('quiche')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/quiche.png')}/> 
         </View>
         <Text style={styles.texto}>Quiche</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth:5,
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
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
           borderColor:'#7d6094',
            borderWidth:5,
          }} onPress={() => nav.navigate('queijo')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/bolinha_queijo.png')}/>
           </View>
          <Text style={styles.texto}>Bolinha de Queijo</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth:5,
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
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('pasta')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pasta.png')}/>
           </View>
         <Text style={styles.texto}>Macarrão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 180,
            backgroundColor: 'white',
            borderRadius: 25,
            borderColor:'#7d6094',
            borderWidth:5,
          }}
          onPress={() => nav.navigate('lasanha')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/lasanha.png')}/>
           </View>
         <Text style={styles.texto}>Lasanha</Text>
        </Pressable>
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
    backgroundColor:'#c1b2cd',
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
  },
  
  
});
