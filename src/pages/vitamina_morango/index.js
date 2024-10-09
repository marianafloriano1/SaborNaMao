import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.paragraph}>
Vitamina de morango e aveia

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


5 morangos

</strong>
</text>
     

        <text>
<strong> •
1 copo de leite</strong>
</text>
         <text>
<strong> • 
2 colheres de açúcar</strong>
</text>
   

      <text>
<strong> • 


1 colher de sopa de aveia em pó</strong>
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
    backgroundColor: '#ffdce4',
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
    color: '#832f56', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});