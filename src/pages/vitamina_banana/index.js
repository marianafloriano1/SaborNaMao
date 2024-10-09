import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
       
        <Text style={styles.paragraph}>
Vitamina de banana e baunilha

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


2 copos de leite desnatado

</strong>
</text>
     

        <text>
<strong> •
2 bananas congeladas</strong>
</text>
         <text>
<strong> • 
1 colher se sopa de whey protein de baunilha</strong>
</text>
   

     

 
      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Bata todos os ingredientes no liquidificador e sirva gelado. </strong>
</text>
     

        
 
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#ffffd2',
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
    color: '#80bf6e', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});