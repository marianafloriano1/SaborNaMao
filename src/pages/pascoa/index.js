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
        <FontAwesome name="arrow-circle-left" size={28} color="#c780c5" />
      </TouchableOpacity>
<Text style={styles.texto2}>Receitas de Pascoa</Text>       
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
            borderColor:'#c780c5',
            borderWidth:4,
          }} onPress={() => nav.navigate('bacalhau')}>  
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/peixe.png')}/> 
         </View>
         <Text style={styles.texto}>Bacalhau</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#c780c5',
            borderWidth:4,
          }} onPress={() => nav.navigate('ovo_choco')}>
          <View style={styles.teste}>
          <Image style={styles.img} source={require('../../img/ovo.png')}/>
          </View>
           <Text style={styles.texto}>Ovo de Chocolate</Text>
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
           borderColor:'#c780c5',
            borderWidth:4,
          }} onPress={() => nav.navigate('bobo')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/camarao.png')}/>
           </View>
          <Text style={styles.texto}>Bobó de Camarão</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#c780c5',
            borderWidth:4,
          }} onPress={() => nav.navigate('coelho_choco')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/coelhinho.png')}/>
           </View>
         <Text style={styles.texto}>Coelho de Chocolate</Text>
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
            borderColor:'#c780c5',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('peixe')}>
            <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/peixe.png')}/>
           </View>
         <Text style={styles.texto}>Peixe Grelhado</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor:'#c780c5',
            borderWidth:4,
          }}
          onPress={() => nav.navigate('cuscuz2')}>
           <View style={styles.teste}>
           <Image style={styles.img} source={require('../../img/pudim2.png')}/>
           </View>
         <Text style={styles.texto}>Cuscuz</Text>
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
    backgroundColor: '#e0b9df',
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
  texto2:{
    color: '#c780c5',
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
    top: 60,
    zIndex: 1,
    left: 20
  },
  
});
