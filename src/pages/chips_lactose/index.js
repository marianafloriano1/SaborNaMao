import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
     Chips Crocante sem lactose
        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>•2 xícaras (chá) de queijo muçarela sem lactose e light ralado</strong>
</text>
     

        <text>
<strong> • meia cenoura descascada ralada</strong>
</text>
         <text>
<strong> •meia abobrinha italiana (ralada)</strong>
</text>
   
     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •Em um recipiente, coloque todos os ingredientes e misture bem. </strong>
</text>
     

        <text>
<strong> •Em uma forma antiaderente, coloque a mistura e com o auxílio de uma colher, aperte para que fique uma massa fininha. </strong>
</text>
     

        <text>
<strong> •Leve ao forno médio (180ºC), preaquecido, por cerca de 8 minutos. </strong>
</text>
     

        <text>
<strong> •Deixe esfriar dentro do forno por 10 minutos. Sirva. </strong>
</text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#f5ffdc',
    padding: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 15,
    
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 30,
  },
  ingredientes:{
    marginTop: 50,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000068', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});