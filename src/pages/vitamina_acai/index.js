import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
 
        <Text style={styles.paragraph}>
Vitamina de açaí, chocolate, morango e hortelã

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


3 colheres de sopa de leite

</strong>
</text>
     

        <text>
<strong> •
2 bolas de creme de açaí</strong>
</text>
         <text>
<strong> • 
2 bolas de sorvete de chocolate</strong>
</text>

  <text>
<strong> • 
4 folhas de hortelã</strong>
</text>

  <text>
<strong> • 
1 xícaras de chá de morangos picados</strong>
</text>
   

     

 
      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Bata no liquidificador o leite, o açaí, o sorvete de chocolate e a hortelã até ficar homogêneo. Junte depois os morangos e bata na função pulsar do liquidificador até que os morangos estejam misturados à massa. Decore as laterais de um copo com a calda de chocolate e preencha com a massa obtida. Decore com folhas de hortelã e morangos picados. Sirva em seguida. Rendimento: 1 porção.

</strong>
</text>
     

        
 
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#ffbfff',
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
    color: '#51224f', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});