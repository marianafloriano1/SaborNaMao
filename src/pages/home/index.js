
import { View, StyleSheet, TextInput, Text, Pressable, Image, TouchableOpacity,ScrollView, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Menu from '../../components/Menu';
import React, { useState } from 'react';


export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const nav = useNavigation();
  const handlePress = (buttonNumber) => {
    console.log(`Botão ${buttonNumber} pressionado!`);
  };

  return (
    


    
    <View style={styles.container}>
      <ScrollView>
        

        
    <Menu visible={menuVisible} onClose={() => setMenuVisible(false)} />

  <Pressable onPress={() => setMenuVisible(true)} style={styles.menuButton}>
    <FontAwesome name="bars" size={34} color="#FF8F7E" />
  
    <View style={styles.row}>
        <Text style={styles.text}>Sabor na Mão</Text>
        <Image style={styles.img} source={require('../../img/lll.PNG')} />
      </View>
  </Pressable>
  
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(1)}>
          <Image style={styles.buttonImage} source={require('../../img/Natal.png')} />
            <Text style={styles.texto}>Natal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(2)}>
          <Image style={styles.buttonImage} source={require('../../img/Pascoa.png')} />
          <Text style={styles.texto}>Páscoa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(3)}>
          <Image style={styles.buttonImage} source={require('../../img/arrai.PNG')} />
          <Text style={styles.texto}>Arraiá</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow1}>
          <TouchableOpacity style={styles.button1} onPress={() => handlePress(num)}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/suco.png')} />
              <Text style={styles.texto1}>Sucos</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handlePress(num)}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/kids.PNG')} />
              <Text style={styles.texto1}>Kids</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handlePress(num)}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/dieta.png')} />
              <Text style={styles.texto1}>Dieta</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => handlePress(num)}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/restricoes.png')} />
              <Text style={styles.texto1}>Restrições</Text>
            </View>
          </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 140,
          
        }}>
          
          <Pressable
          style={{
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
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
            width: 155,
            height: 155,
            backgroundColor: '#9f87b4',
            borderRadius: 25,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('vegetariano')}>
          <Text style={styles.texto}>Receitas Vegetarianas</Text>
        </Pressable>
      </View>



</ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fcede8',
    padding: 40,
  },

  
  texto2: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 60,
    fontWeight: 'bold',
    
  },

  menuButton:{
    top: 20,
    zIndex: 1,
  },
   texto3: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
  row: {
    justifyContent: 'flex-center',
    alignItems: 'flex-center',
  
  },
  text: {
    textAlign: 'start',
    fontSize: 17,
  },
  img: {
    width: 305,
    marginTop: 10,
    height: 150,
    right:9,
  },
  //primeira fileira
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff5f0',
    width: 85,
    height: 100,
    borderRadius: 8,
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
texto:{
  textAlign: 'center',
  marginTop: 5,
    fontSize: 15,
},
  //Segunda Fileira
  buttonRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
   
  },
  button1: {
    width: 60,
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  buttonSplit: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  leftSide: {
    flex: 3,
    backgroundColor: '#ffd6c8', 
    
  },
  rightSide: {
    flex: 1,
    backgroundColor: '', 
  },
  buttonImage1: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '49%',
    left: '60%',
    
    transform: [{ translateX: -25 }, { translateY: -25 }], // Centraliza a imagem
  },
  texto1:{
    textAlign: 'center',
  marginTop: 5,
    fontSize: 12,
  },
});
