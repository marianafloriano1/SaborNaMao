import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
     Pão de queijo  sem lactose
        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>•4 xícaras de chá de polvilho doce</strong>
</text>
     

        <text>
<strong> • 3 xícaras de purê de mandioquinha ou batata</strong>
</text>
         <text>
<strong> •1 xícara de água (fervendo)</strong>
</text>
          <text>
<strong> • 1 xícara de chá de polvilho azedo</strong>
</text>
        

<text>
<strong> •2/3 de xícara de chá de óleo bem quente (ponto de fritura)</strong>
</text>
     

<text>
<strong> •Cerca de 1 colher de sopa cheia de sal</strong>
</text>
     

     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •Primeiramente, misture o polvilho doce e polvilho azedo com o sal. </strong>
</text>
     

        <text>
<strong> •Ferva o óleo e a água juntos e despeje sobre a mistura seca, escaldando o polvilho. </strong>
</text>
     

        <text>
<strong> •Por último, acrescente o purê e amasse com as mãos até obter uma mistura homogênea. Moldar em bolinhas e assar em forno em temperatura baixa (preferencialmente mínima) por 1 hora. Não é necessário untar a forma. </strong>
</text>
     

        <text>
<strong> • Simples, prático e fácil! </strong>
</text>
     

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#ffccff',
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
    color: '#5b0f5c', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});