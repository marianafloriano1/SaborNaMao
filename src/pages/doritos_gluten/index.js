import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      
        <Text style={styles.paragraph}>
Doritos sem glúten

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 
90 gramas de polvilho doce

</strong>
</text>
     

        <text>
<strong> • 50 gramas de farinha de arroz</strong>
</text>
         <text>
<strong> • 50 gramas de fubá</strong>
</text>
   

      <text>
<strong> • 
50 gramas de amido de milho</strong>
</text>

 <text>
<strong> • 4 gramas de goma xantana</strong>
</text>

 <text>
<strong> • 
5 gramas de fermento químico em pó (fermento para bolo)</strong>
</text>

 <text>
<strong> • 1 ovo</strong>
</text>

<text>
<strong> • 1 colher de chá de sal</strong>
</text>

<text>
<strong> • 1 colher de chá de páprica defumada</strong>
</text>

<text>
<strong> • 1 colher de sopa de vinagre de maçã</strong>
</text>

<text>
<strong> • 1 colher de sopa de óleo</strong>
</text>

<text>
<strong> •
100 ml de água</strong>
</text>

<text>
<strong> • 1 pacote de queijo ralado</strong>
</text>

      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
1 pacote de queijo ralado </strong>
</text>
     

        <text>
<strong> • 
Adicione o ovo, o vinagre e o óleo. Misture bem, adicionando aos poucos a água. </strong>
</text>
     

        <text>
<strong> •

Quando a massa estiver junta, retire da tigela e sove com as mãos. </strong>
</text>

 <text>
<strong> •

Quando a massa estiver junta, retire da tigela e sove com as mãos. </strong>
</text>

 <text>
<strong> •

Use farinha de arroz para abrir a massa. Deixe ela bem fina. </strong>
</text>

 <text>
<strong> •

Use um garfo para fazer vários furos na massa. </strong>
</text>

 <text>
<strong> •

Corte a massa em tiras finas e pequenas em formato de triângulo. </strong>
</text>

 <text>
<strong> •

Coloque óleo em uma panela e frite as pequenas porções de massa até dourar. </strong>
</text>

<text>
<strong> •

Deixe a massa frita em repouso em uma forma com papel toalha. </strong>
</text>

<text>
<strong> •

Em um liquidificador, triture o queijo ralado e a páprica até a mistura dos dois ficar bem fininha. </strong>
</text>

<text>
<strong> •

Tempere a massa frita com a mistura de queijo ralado e páprica. </strong>
</text>

<text>
<strong> •

Coloque Agora é só servir. Bom apetite!. </strong>
</text>
     

   

       
      
         
      
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#cdffb7',
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