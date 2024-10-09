import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
    Brigadeiro sem lactose

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>•200 gramas de leite de coco</strong>
</text>
     

        <text>
<strong> • 4 colheres de sopa de cacau em pó</strong>
</text>
         <text>
<strong> • 4 colheres de sopa de açúcar</strong>
</text>
   

      <text>
<strong> • 1 xícara de granulado sem lactose</strong>
</text>


 
     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Numa panela, adicione o leite de coco, o cacau em pó e o açúcar.. </strong>
</text>
     

        <text>
<strong> •Mexa bem e leve ao fogo médio, misturando sem parar. </strong>
</text>
     

        <text>
<strong> •
Mexa até desgrudar da panela. </strong>
</text>
     

        <text>
<strong> •Transfira para um prato, cubra com um plástico-filme em contato e leve para a geladeira por umas 3 horas.. </strong>
</text>

  <text>
<strong> •Faça bolinhas, passe no granulado e o seu brigadeiro sem lactose está pronto! </strong>
</text>
     

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#d3d7ff',
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
    color: '#33002a', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});