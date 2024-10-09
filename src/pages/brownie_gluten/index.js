import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
       
        <Text style={styles.paragraph}>
Brownie sem glúten

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 4 ovos

</strong>
</text>
     

        <text>
<strong> • 1 xícara açúcar</strong>
</text>
         <text>
<strong> • 1 xícara de óleo vegetal</strong>
</text>
   

      <text>
<strong> • 1 colher (sobremesa) de aroma de baunilha</strong>
</text>

 <text>
<strong> • 1 xícara farinha sem glúten Beladri</strong>
</text>

 <text>
<strong> • 1 xícara chocolate em pó</strong>
</text>

 <text>
<strong> • 1/2 xícara de nozes picada (opcional)</strong>
</text>

<text>
<strong> • 1 colher (sopa) de fermento químico</strong>
</text>

      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Bata todos os ingredientes no liquidificador com exceção das nozes. </strong>
</text>
     

        <text>
<strong> • 
Acrescente as nozes e mexa com uma colher. </strong>
</text>
     

        <text>
<strong> •

Despeje em uma forma untada e leve para assar em forno preaquecido a 200º C por 40 minutos. </strong>
</text>
     

   

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#e0dbd4',
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
    color: '#46110f', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});