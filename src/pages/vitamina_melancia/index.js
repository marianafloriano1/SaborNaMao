import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
Vitamina de melancia 

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


2 fatias grossas de melancia picada sem sementes;

</strong>
</text>
     

        <text>
<strong> •
1 copo de leite vegetal ou desnatado.</strong>
</text>
      
     

 
      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Bata bem a fruta com o leite até ficar homogêneo. Adicione gelo e sirva em seguida. Se quiser coe. Não precisa adoçar porque a melancia já é docinha. Sirva.

</strong>
</text>
     

        
 
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#d3fade',
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