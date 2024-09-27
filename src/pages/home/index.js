
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
  
    
  </Pressable>

  <View style={styles.fundo}>
  <View style={styles.row}>
        <Text style={styles.text}>Sabor na Mão</Text>
        <Image style={styles.img} source={require('../../img/lll.PNG')} />
        </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {nav.navigate('ceia_natal')}}>
          <Image style={styles.buttonImage} source={require('../../img/Natal.png')} />
            <Text style={styles.texto}>Natal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {nav.navigate('pascoa')}}>
          <Image style={styles.buttonImage} source={require('../../img/Pascoa.png')} />
          <Text style={styles.texto}>Páscoa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {nav.navigate('festa_junina')}}>
          <Image style={styles.buttonImage} source={require('../../img/arrai.PNG')} />
          <Text style={styles.texto}>Arraiá</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow1}>
          <TouchableOpacity style={styles.button1} onPress={() => {nav.navigate('sucos');}}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/suco.png')}  />
              <Text style={styles.texto1}>Sucos</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => {nav.navigate('kids2');}}>
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
  </View>
  

  <View
  style={{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginLeft: 10
  }}>
  
  <View style={{ alignItems: 'center' }}>
    <Pressable
      style={{
        width: 140,
        height: 140,
        backgroundColor: 'rgba(255, 143, 126, 0.6)',
        borderRadius: 25,
        marginBottom: 10,
      }}
      onPress={() => nav.navigate('noite_garotas')}>
      <Image style={styles.img2} source={require('../../img/pipoca.png')} />
    </Pressable>
    <Text style={styles.texto}>Receitas para Petiscar</Text> 
    <Text style={styles.subtitulo}>Pipoca Salgada</Text>
  </View>

  <View style={{ alignItems: 'center' }}>
    <Pressable
      style={{
        width: 140,
        height: 140,
        backgroundColor: 'rgba(110, 120, 156, 0.6)',
        borderRadius: 25,
        marginBottom: 10, 
      }}
      onPress={() => nav.navigate('morando_sozinho')}>
        <Image style={styles.img3} source={require('../../img/arroz.png')} />
     
    </Pressable> 
    <Text style={styles.texto}> Receitas para uma só pessoa</Text>
    <Text style={styles.subtitulo}>Arroz de Forno</Text>
  </View>
</View>


      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginLeft: 10
        }}>
          <View style={{ alignItems: 'center' }}>
          <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(241, 199, 68, 0.6)',
            borderRadius: 25,
            marginRight:20,
            marginBottom:20
          }}
          onPress={() => nav.navigate('almoco_domingo')}>
            <Image style={styles.img5} source={require('../../img/frango-assado.png')} />
          
        </Pressable>
        <Text style={styles.texto}>Almoço De Domingo</Text>
        <Text style={styles.subtitulo}>Frango Assado</Text>
  </View>

  <View style={{ alignItems: 'center' }}>
  <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(118, 109, 170, 0.6)',
            borderRadius: 25,
            marginRight:20,
            marginBottom:20,
          }}
          onPress={() => nav.navigate('vegano')}>
            <Image style={styles.img4} source={require('../../img/pao_de_queijo.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas Veganas</Text>
        <Text style={styles.subtitulo}>Pão de Queijo</Text>
  </View>
      </View>

     

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems:'center',
          textAlign:'center',
  
          
        }}>
          <View style={{ alignItems: 'center' }}>
          <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(162, 205, 186, 0.6)',
            borderRadius: 25,
            marginRight:20,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('mamaes')}>
          <Image style={styles.img6} source={require('../../img/papinha.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas Para Mamães</Text>
        <Text style={styles.subtitulo}>Papinha</Text>
  </View>

  <View style={{ alignItems: 'center' }}>
  <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(159, 135, 180, 0.6)',
            borderRadius: 25,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('vegetariano')}>
          <Image style={styles.img7} source={require('../../img/burger.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas Vegetarianas</Text>
        <Text style={styles.subtitulo}>Hambúrguer</Text>
  </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems:'center',
          textAlign:'center',
  
          
        }}>
          <View style={{ alignItems: 'center' }}>
          <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(162, 205, 186, 0.6)',
            borderRadius: 25,
            marginRight:20,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('aniversario')}>
          <Image style={styles.img6} source={require('../../img/bolo2.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas De Aniversário</Text>
        <Text style={styles.subtitulo}>Bolo de Aniversário</Text>
  </View>

  <View style={{ alignItems: 'center' }}>
  <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(159, 135, 180, 0.6)',
            borderRadius: 25,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('vegetariano')}>
          <Image style={styles.img7} source={require('../../img/burger.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas Vegetarianas</Text>
        <Text style={styles.subtitulo}>Hambúrguer</Text>
  </View>
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
   
  },
fundo:{
  padding:40
},
img2:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop:40
},
img3:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop: 45
},
img4:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop: 55
},
img5:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop: 50
},
img6:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop: 43
},
img7:{
  width: 100,
  height:100, 
  marginLeft:20,
  marginTop: 53
},

  menuButton:{
    top: 30,
    zIndex: 1,
    left: 30
  },

  subtitulo: {
    textAlign: 'center',
    marginTop: 5,
      fontSize: 13,
      marginBottom: 15
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
    textAlign: 'center',
    fontSize: 25,
    color: '#FF8F7E',
    justifyContent: 'start',
    fontWeight: 'bold',
    marginTop: -45

  },
  img: {
    width: 335,
    marginTop: 30,
    height: 180,
    left:5,
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
