import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Menu from '../../components/Menu';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
 
  const nav = useNavigation();

  const items = [
    { title: 'Natal', image: require('../../img/Natal.png'), route: 'ceia_natal' },
    { title: 'Páscoa', image: require('../../img/Pascoa.png'), route: 'pascoa' },
    { title: 'Arraiá', image: require('../../img/arraia.png'), route: 'festa_junina' },
    { title: 'Halloween', image: require('../../img/halloween.png'), route: 'halloween' },
    { title: 'Ano Novo', image: require('../../img/anonovo.png'), route: 'ano_novo' },
    { title: 'Festas', image: require('../../img/brilhar.png'), route: 'festa' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);



  const nextItems = () => {
    if (currentIndex + 3 < items.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevItems = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
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
            <Image style={styles.img} source={require('../../img/lll.png')} />
          </View>

          <Text style={styles.textoo}>Feriados e datas comemorativas:</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={prevItems} style={styles.arrowButton} disabled={currentIndex === 0}>
              <FontAwesome name="angle-left" size={24} color="#FF8F7E" />
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => { nav.navigate(item.route); }}
                  style={styles.carouselItem}
                >
                  <Image style={styles.buttonImage} source={item.image} />
                  <Text style={styles.texto}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity onPress={nextItems} style={[styles.arrowButton, styles.arrowButtonRight]} disabled={currentIndex + 3 >= items.length}>
              <FontAwesome name="angle-right" size={24} color="#FF8F7E" />
            </TouchableOpacity>
          </View>

      <Text style={styles.textoo}>Categorias:</Text>
      <View style={styles.buttonRow1}>
          <TouchableOpacity style={styles.button1} onPress={() => {nav.navigate('bebidas');}}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/suco.png')}  />
              <Text style={styles.texto1}>Bebidas</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => {nav.navigate('kids2');}}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/kids.png')} />
              <Text style={styles.texto1}>Kids</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1}  onPress={() => {nav.navigate('dietas');}}>
            <View style={styles.buttonSplit}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide} />
              <Image style={styles.buttonImage1} source={require('../../img/dieta.png')} />
              <Text style={styles.texto1}>Dieta</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button1}  onPress={() => {nav.navigate('restricao');}}>
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
            backgroundColor: 'rgba(171, 203, 149, 0.6)',
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
            backgroundColor: 'rgba(202, 223, 188, 0.6)',
            borderRadius: 25,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('vegetariano')}>
          <Image style={styles.img7} source={require('../../img/burger.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas Vegetarianas</Text>
        <Text style={styles.subtitulo}>Hambúrguer</Text>
  </View>

  <View style={{ alignItems: 'center' }}>
          <Pressable
          style={{
            width: 140,
            height: 140,
            backgroundColor: 'rgba(162, 205, 186, 0.6)',
            borderRadius: 25,
            marginRight:5,
            marginBottom:10,
          }}
          onPress={() => nav.navigate('aniversario')}>
          <Image style={styles.img6} source={require('../../img/bolo2.png')} />
        </Pressable>
        <Text style={styles.texto}>Receitas De Aniversário</Text>
        <Text style={styles.subtitulo}>Bolo de Chocolate</Text>
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
    textAlign: 'left',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    zIndex: 1000,
  },
  scrollView: {
    paddingHorizontal: 10, // Adiciona espaçamento horizontal ao ScrollView
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25, // Adicione uma margem horizontal para espaçamento
  },
  textoo:{
    fontSize: 16,
    marginTop: 10,
    color: '#FF8F7E'
  },
  button: {
    alignItems: 'center',

    width: 100,
    height: 120,
    borderRadius: 8,
    margin: 10,
  },
  carouselItem:{
    marginHorizontal: 20
  },
  buttonImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  arrowButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  arrowText: {
    fontSize: 14,
    color: '#FF8F7E',
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
    
    transform: [{ translateX: -25 }, { translateY: -25 }], 
  },
  texto1:{
    textAlign: 'center',
  marginTop: 5,
    fontSize: 12,
  },
 

 
});