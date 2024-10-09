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

<Image source={require('../../img/coelho.png')} style={styles.imagemm}></Image>

<Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: -10,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bacalhau')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/bacalhau.png')} />
            <Text style={styles.texto}>Bacalhau</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('ovo_choco')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/ovo.png')} />
            <Text style={styles.texto3}>Ovo de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('bobo')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/camarao.png')} />
            <Text style={styles.texto}>Bobó de Camarão</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('coelho_choco')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/coelhinho.png')} />
            <Text style={styles.texto3}>Coelho de Chocolate</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 30,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('peixe')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/peixe.png')} />
            <Text style={styles.texto}>Peixe Grelhado</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: 270,
            height: 160,
            backgroundColor: 'rgba(224, 185, 223, 0.5)',
            borderRadius: 25,
            marginTop: 60,
            marginLeft: 95,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('cuscuz2')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/pudim2.png')} />
            <Text style={styles.texto3}>Cuscuz</Text>
          </View>
        </Pressable>
  
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
  quadrado: {
    backgroundColor: 'rgba(253, 237, 233, 0.7)',
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    width: '100%', // ou mantenha 430 se preferir
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

  texto2:{
    color: '#c780c5',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: 790,
    fontWeight: 'bold',
    marginLeft: 15

  },
  texto: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
    marginLeft: 270
  },
  texto3: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
  },
  img2: {
    width: 110,
    height: 110,
    marginTop:30,
    marginLeft: 270
  },

  img: {
    width: 100,
    height: 100,
    marginTop:30,
  },
  teste: {
    width: 141,
    height: 141,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20

  },
  imagemm:{
    width: 100,
    height: 100,
    marginLeft: 130,
    marginTop: 25,
    zIndex: 1
    },
});
