import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
Pizza sem glúten

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 


 1 Xicara de farinha de arroz

</strong>
</text>
     

        <text>
<strong> •
1/4 De xicara de fecula de batata</strong>
</text>
         <text>
<strong> • 
1/4 De xicara de amido de milho</strong>
</text>
   

      <text>
<strong> • 


1/2 Batata media amassada ou mandioca</strong>
</text>

 <text>
<strong> •

1 Colher de fermento  (sobremesa)</strong>
</text>

 <text>
<strong> • 
1 Colher rasa de sal  (cha)</strong>
</text>

 <text>
<strong> • 
1 Colher de açúcar  (sobremesa)</strong>
</text>

<text>
<strong> • 
1/2 Xicara de agua</strong>
</text>

<text>
<strong> • 
1 Ovo</strong>
</text>

<text>
<strong> • 
3 Colheres de oleo ou azeite  (sopa)</strong>
</text>

<text>
<strong> • 

1 Colher rasa de agar-agar  (cha, opcional, para melhorar a massa)</strong>
</text>


      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
Adicione todos os ingredientes em uma vasilha. </strong>
</text>
     

        <text>
<strong> • 
Mexa bem todos os ingredientes, até a massa ficar boa para mexer com as mãos. Se necessário coloque mais farinha de arroz. </strong>
</text>
     

        <text>
<strong> •

Unte as mãos e coloque a massa em uma forma untada e enfarinhada com farinha de arroz. É necessário limpar e repassar óleo nas mãos quando a massa começar a agarrar.; </strong>
</text>

 <text>
<strong> •

Deixe a massa no forno pré-aquecido a 200~250 graus por 10 minutos, dependendo da potência do seu forno. </strong>
</text>

 <text>
<strong> •

Retire a massa, recheie como quiser e deixe por mais 7 a 10 minutos.. </strong>
</text>

 <text>
<strong> •

Rende uma pizza de 4 pedaços </strong>
</text>
 
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#faead6',
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
    color: '#ed3b21', 
  },
   strong:{
    marginTop:100,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12, 
   },
});