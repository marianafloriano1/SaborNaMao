import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Image, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const nav = useNavigation();

  return (
    <ScrollView>
    <View style={styles.container}>
    
     <View style={styles.imagemcontainer}>
     <TouchableOpacity activeOpacity={0.5} onPress={() => nav.navigate('perfil')}>

     <Image style={styles.imagem} source={require('../../img/perfil.png')}/>

     </TouchableOpacity>
     </View>

      <TextInput
        style={styles.input}
        placeholder="pesquisar receitas..."
        underlineColorAndroid={'transparent'}
      />


      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#FF8F7E',
            marginRight:20,
            borderRadius: 25,
            marginBottom:20,
           
          }}
          onPress={() => nav.navigate('noite_garotas')}>
          <Text style={styles.texto}>Noite De Snacks</Text>
        </Pressable>

        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#657AB6',
            borderRadius: 25,
           
          }}
          onPress={() => nav.navigate('morando_sozinho')}>
          <Text style={styles.texto}>Morando Sozinho</Text>
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
            width: 175,
            height: 175,
            backgroundColor: '#F1C744',
            borderRadius: 25,
            marginRight:20,
            marginBottom:20
          }}
          onPress={() => nav.navigate('almoco_domingo')}>
          <Text style={styles.texto}>Almoço De Domingo</Text>
        </Pressable>

        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#A4BE89',
            borderRadius: 25,
           
          }}
          onPress={() => nav.navigate('kids')}>
          <Text style={styles.texto2}>Kids</Text>
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
            width: 175,
            height: 175,
            backgroundColor: '#EB7732',
            borderRadius: 25,
            marginRight:20,
            marginBottom:20,
          }}
          onPress={() => nav.navigate('ceia_natal')}>
          <Text style={styles.texto2}>Ceia De Natal</Text>
        </Pressable>

        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#C13050',
            borderRadius: 25,
       
          }}
          onPress={() => nav.navigate('festa_junina')}>
          <Text style={styles.texto2}>Festa Junina</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems:'center',
          textAlign:'center',
          
        }}>
        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#766daa',
            borderRadius: 25,
            marginRight:20,
            marginBottom:20,
          }}
          onPress={() => nav.navigate('vegano')}>
          <Text style={styles.texto3}>Receitas Veganas</Text>
        </Pressable>

        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#f04f30',
            borderRadius: 25,
            marginBottom:20,
          }}
          onPress={() => nav.navigate('sucos')}>
          <Text style={styles.texto2}>Sucos</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems:'center',
          textAlign:'center',
          
        }}>
        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#a2cdba',
            borderRadius: 25,
            marginRight:20,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('mamaes')}>
          <Text style={styles.texto}>Receitas Para Mamães</Text>
        </Pressable>

        <Pressable
          style={{
            width: 175,
            height: 175,
            backgroundColor: '#9f87b4',
            borderRadius: 25,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('vegetariano')}>
          <Text style={styles.texto}>Receitas Vegetarianas</Text>
        </Pressable>
      </View>




    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebc6',
  },
  imagem:{
    width: 45,
    height: 45,
  },
  texto2: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70,
    fontWeight: 'bold',
    
  },
   texto3: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 60,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 60,
    fontWeight: 'bold',
    
  },
  input: {
    borderColor: '#6a759b',
    height: 35,
    width: 310,
    marginTop: 15,
    borderWidth: 2.5,
    marginBottom: 30,
    fontSize: 14,
    padding: 10,
    borderRadius: 14,
    marginLeft: 17,
  },
  imagemcontainer: {
    position: 'absolute',
    marginLeft: 350,
    marginTop: 10,

  },
});
