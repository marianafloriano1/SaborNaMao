import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
    
        <Text style={styles.paragraph}>
Vitamina de maçã

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


1 maçã vermelha com casca e sem sementes;

</strong>
</text>
     

        <text>
<strong> •
1 copo de leite desnatado gelado;</strong>
</text>

   <text>
<strong> •
adoçante a gosto;</strong>
</text>

   <text>
<strong> •
2 gotas de essência de baunilha.</strong>
</text>

     

 
      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Leve todos os ingredientes para bater no liquidificador até ficar homogêneo. Sirva em seguida!

</strong>
</text>
     

        
 
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#e7dac8',
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
    color: '#a80301', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});