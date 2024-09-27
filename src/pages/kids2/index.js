import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export default function App() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
          <FontAwesome name="arrow-circle-left" size={28} color="#92ab79" />
        </TouchableOpacity>
        <Text style={styles.texto2}>Área Kids</Text>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#c6dbb2',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('kids')}
        >
          <View style={styles.teste}>
            <Image style={styles.img} source={require('../../img/raspadinha.png')} />
            <Text style={styles.texto}>Para as Crianças</Text>
          </View>
        </Pressable>

        <Pressable
          style={{
            width: 360,
            height: 140,
            backgroundColor: '#c1dbcf',
            borderRadius: 25,
            marginTop: 90,
            marginLeft: 25,
            position: 'relative',
            overflow: 'hidden'
          }}
          onPress={() => nav.navigate('mamaes')}
        >
          <View style={styles.teste}>
            <Image style={styles.img2} source={require('../../img/papinha.png')} />
            <Text style={styles.texto3}>Para os Bebês</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fcede8',
  },
  seta: {
    position: 'fixed',
    right: 10,
    top: 60,
    zIndex: 1,
    left: 20,
  },
  texto2: {
    fontSize: 28,
    textAlign: 'left',
    justifyContent: 'flex-start',
    marginLeft: 55,
    marginTop: 55
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
    marginLeft: 340
  },
  texto3: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    position: 'absolute',
  },
  img2: {
    width: 110,
    height: 110,
    marginLeft: 340
  },

  img: {
    width: 110,
    height: 110,
  },
  teste: {
    width: 141,
    height: 141,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
