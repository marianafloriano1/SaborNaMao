import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/peixe.png')} />
        <Text style={styles.paragraph}>
          Bacalhau
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 1 kg de bacalhau</Text>
      <Text style={styles.topicos}>- 1/2 kg de cenoura</Text>
      <Text style={styles.topicos}>- 2 tomates (vermelho e/ou amarelo)</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de extrato de tomate</Text>
      <Text style={styles.topicos}>- Alho a gosto</Text>
      <Text style={styles.topicos}>- Coentro</Text>
      <Text style={styles.topicos}>- Azeitonas</Text>
      <Text style={styles.topicos}>- 1/2 kg de batata</Text>
      <Text style={styles.topicos}>- 2 cebolas grandes</Text>
      <Text style={styles.topicos}>- 1 pimentão</Text>
      <Text style={styles.topicos}>- Leite de coco</Text>
      <Text style={styles.topicos}>- Sal</Text>
      <Text style={styles.topicos}>- Azeite de oliva a gosto</Text>
      
      <Text style={styles.ingredientes}>Ingredientes do Molho:</Text>
      <Text style={styles.topicos}>- 2 copos de leite</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de manteiga</Text>
      <Text style={styles.topicos}>- 1/2 xícara de creme de leite</Text>
      <Text style={styles.topicos}>- Pimenta-do-reino</Text>
      <Text style={styles.topicos}>- 1 colher (sopa) de amido de milho</Text>
      <Text style={styles.topicos}>- 1 ovo</Text>
      <Text style={styles.topicos}>- Noz-moscada</Text>
      <Text style={styles.topicos}>- Sal</Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Dessalgue o bacalhau por 12 horas, em geladeira, trocando a água.</Text>
      <Text style={styles.topicos}>2. Corte em lascas o bacalhau, retire a pele.</Text>
      <Text style={styles.topicos}>3. Em uma assadeira coloque azeite de oliva no fundo, faça uma cama com cebola em rodelas, coloque por cima batatas cozidas em rodelas.</Text>
      <Text style={styles.topicos}>4. Coloque por cima o bacalhau em lascas.</Text>
      <Text style={styles.topicos}>5. Coloque outra camada de cebola, um pouco de alho em lascas, adicione pimentão cortado em palitos.</Text>
      <Text style={styles.topicos}>6. Coloque cenoura picadinha, algumas azeitonas (pode ser sem caroço), o tomate sem sementes e cheiro verde picado.</Text>
      <Text style={styles.topicos}>7. Acrescente o molho branco por cima, um pouco mais de cheiro verde, 1 colherada de extrato de tomate e regue leite de coco.</Text>
      <Text style={styles.topicos}>8. Finalize com um pouco de azeite de oliva.</Text>
      <Text style={styles.topicos}>9. Leve ao forno por 30 minutos à 180°C para gratinar.</Text>
      <Text style={styles.topicos}>10. Sirva com arroz branco.</Text>
   
   <Text style={styles.ingredientes}>Modo de Preparo do Molho:</Text>
          <Text style={styles.topicos}>1. Bata no liquidificador o leite, o amido de milho e a manteiga derretida. </Text>
          <Text style={styles.topicos}>2. Leve ao fogo e mexa bastante até engrossar a mistura. </Text>
          <Text style={styles.topicos}>3. Finalmente, junte o creme de leite, a noz-moscada, a pimenta-do-reino, o sal e o ovo batido.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#e0b9df',
    padding: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
 fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    color: '#c780c5',
    
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
    marginBottom: 15,
    color: '#c780c5',
  },
  topicos:{
  
  }
});