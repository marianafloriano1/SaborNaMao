import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.paragraph}>
Cookies sem lactose

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 2 colheres (sopa) de óleo
</strong>
</text>
     

        <text>
<strong> • 1/2 xícara de açúcar mascavo</strong>
</text>
         <text>
<strong> • 1 colher (chá) de fermento</strong>
</text>
   

      <text>
<strong> • 3/4 de farinha de trigo</strong>
</text>

 <text>
<strong> • 3/4 xícara de açúcar</strong>
</text>

 <text>
<strong> •  1 ovo</strong>
</text>

 <text>
<strong> • 3 colheres de cacau em pó (opcional)</strong>
</text>

<text>
<strong> • 1 xícara de granola</strong>
</text>


 
     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Misture o óleo, o açúcar mascavo, o açúcar (e o chocolate em pó se for fazer cookies de chocolate).. </strong>
</text>
     

        <text>
<strong> • Adicione o ovo e misture bem. </strong>
</text>
     

        <text>
<strong> •
Acrescente a farinha aos poucos e misture bem. </strong>
</text>
     

        <text>
<strong> • Adicione o fermento e misture de leve, só para o fermento incorporar à massa.</strong>
</text>

  <text>
<strong> • por último, acrescente a granola. </strong>
</text>
     
      <text>
<strong> • Forme bolinhas sob o papel manteiga e leve ao forno preaquecido, por aproximadamente 20 minutos (250º C).. </strong>
</text>

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#ffe3d4',
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
    color: '#72213e', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});