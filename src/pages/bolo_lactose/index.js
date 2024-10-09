import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
     Bolo de laranja sem lactose
        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>•2 xícaras de suco de laranja coado</strong>
</text>
     

        <text>
<strong> • 3 colheres de sobremesa (rasa) de fermento em pó</strong>
</text>
         <text>
<strong> • 3 ovos</strong>
</text>
          <text>
<strong> • 3 xícaras de farinha de trigo</strong>
</text>
        

<text>
<strong> •1 xícara de óleo de canola ou similar (milho, girasol ou soja)</strong>
</text>
     

<text>
<strong> •2 xícaras de açúcar</strong>
</text>
     

     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •Bata o açúcar, o óleo e as gemas de ovo até obter um creme claro. </strong>
</text>
     

        <text>
<strong> •Continue batendo e misture alternadamente aos poucos o suco, a farinha e o fermento. </strong>
</text>
     

        <text>
<strong> • À parte bata as claras em neve. </strong>
</text>
     

        <text>
<strong> • Misture a massa às claras batidas em neve até obter uma massa homogênea. </strong>
</text>
     

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#fee9a3',
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
    color: '#4b2521', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});