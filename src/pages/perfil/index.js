import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
   const nav = useNavigation();
   
  return (
    <View style={styles.container}>
     <View style={styles.editarimg}>
      <Image style={styles.imgperfil} source={require('../../img/perfil.png')}></Image> 
      <Text style = {styles.textoBase}>Nome do Usúario</Text>
      
      </View>

      <View style = {styles.traco2}>
        <Text style={styles.traco}>___________________________</Text>
      </View>
        
      
    <View style={styles.editarimagem} >
    <Pressable onPress={() => nav.navigate('kids')}>
<Image style={styles.imgheranca} source={require('../../img/heranca.png')} ></Image>
</Pressable>

    </View>

    <View style={styles.editartexto2}>
    <Text style={styles.texto2}>Adicionar Herança!</Text>   
    </View>
  


      </View>


      
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8F3',
    
  },
 
textoBase:{
    color: '#565656',
    fontSize: 24,
    marginTop: 50,
    marginLeft: 22,
},
imgperfil: {
  width: 80,
  height: 80,
  marginTop: 30,
},
traco: {
  color: '#6A759B',
   fontSize: 32,
   marginTop: 15,
},
traco2: {
  color: '#6A759B',
   fontSize: 32,
   marginTop: 15,
   alignItems: 'center'
},
imgheranca:{
  width: 150,
  height: 150,
  marginTop: 50,
  
},
editarimagem:{
  alignItems: 'center'
},
editarimg:{
  flexDirection: 'row'
},
texto2:{
  color: '#565656',
  fontSize: 22,
  marginTop: 15,

},
editartexto2:{
alignItems: 'center'
},

});