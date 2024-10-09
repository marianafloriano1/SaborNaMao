import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <Text style={styles.paragraph}>
Pastel sem glúten

        </Text>
      </View>
     
      

      
        <Text style={styles.ingredientes}>ingredientes:</Text>
      <text>
<strong>• 

60 gramas de polvilho doce

</strong>
</text>
     

        <text>
<strong> • 110 gramas de farinha de arroz</strong>
</text>
         <text>
<strong> • 50 gramas de fécula de batata</strong>
</text>
   

      <text>
<strong> • 

5 gramas de goma xantana</strong>
</text>

 <text>
<strong> •
30 gramas de amido de milho</strong>
</text>

 <text>
<strong> • 
20 ml de óleo</strong>
</text>

 <text>
<strong> • 10 ml de vinagre branco</strong>
</text>

<text>
<strong> • 3 gramas de sal</strong>
</text>

<text>
<strong> • 100 ml de água fria</strong>
</text>

<text>
<strong> • 1 ovo pequeno (45 gramas)ã</strong>
</text>


      







     

      <Text style={styles.ingredientes}>Modo de preparo:</Text>
        <text>
<strong> •
No recheio, você pode variar. Além da carne moída, experimente usar frango desfiado, queijo ralado, calabresa, legumes etc. Dá para aproveitar o que tem na geladeira; </strong>
</text>
     

        <text>
<strong> • 
Em uma tigela grande, coloque a farinha de arroz, a fécula de batata, o polvilho doce, o amido de milho, a goma xantana e o sal. Com uma colher, misture todos os ingredientes secos; </strong>
</text>
     

        <text>
<strong> •

Quebre o ovo separadamente e, se a aparência e cheiro estiverem bons, adicione-o à tigela com as farinhas. Acrescente o óleo, o vinagre branco e misture novamente; </strong>
</text>

 <text>
<strong> •

Despeje a água fria e continue misturando. Ao formar uma farofa úmida, passe-a para a bancada higienizada e polvilhada com polvilho doce. Mexe com as mãos até formar uma massa mais consistente; </strong>
</text>

 <text>
<strong> •

Sove bem a massa por cerca de 5 minutos (se preciso, salpique mais polvilho doce sobre a bancada). Cubra a massa totalmente com papel filme, evitando o contato com o ar, e deixe-a descansar por 10 minutos;. </strong>
</text>

 <text>
<strong> •

Divida a massa em duas partes iguais. Novamente, salpique polvilho em uma bancada e abra a massa com um rolo até atingir a espessura de cerca de 0,5 cm (se você tiver cilindro, pode fazer esse processo nele);</strong>
</text>

 <text>
<strong> •

Para cortar os pasteis, use o aro 9 ou do tamanho que desejar. Coloque o recheio em cima da massa aberta e molhe as bordas com água. Feche o pastel e aperte todas as laterais com as pontas dos dedos, selando bem as bordas;. </strong>
</text>

 <text>
<strong> •

Separe os pastéis em uma travessa e cubra com papel filme para não ressecar. Coloque o óleo (quantidade suficiente para cobrir os pastéis) para esquentar em fogo médio para baixo; </strong>
</text>

<text>
<strong> •

Coloque um pedacinho de massa no óleo, assim que ele borbulhar, a temperatura está boa para fritura. Frite poucas unidades por vez para não diminuir muito a temperatura do óleo. Sirva quentinho! </strong>
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
    backgroundColor: '#fff8c5',
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