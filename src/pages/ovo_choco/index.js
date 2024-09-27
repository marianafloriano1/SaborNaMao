import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/ovo.png')} />
        <Text style={styles.paragraph}>
          Ovo de Páscoa
        </Text>
      </View>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      <Text style={styles.topicos}>- 240 gramas de chocolate ao leite ou meio amargo</Text>
      <Text style={styles.topicos}>- 1 forma para ovo de Páscoa de 500 gramas</Text>
     
       <Text style={styles.ingredientes}>Modo de Preparo:</Text>
        <Text style={styles.topicos}>1. Derreta dois terços do chocolate ao leite no micro-ondas. Retire a cada 30 segundos e misture até o chocolate derreter por completo.</Text>
      <Text style={styles.topicos}>2. Acrescente o restante do chocolate e misture.</Text>
      <Text style={styles.topicos}>3. Espere a temperatura do chocolate chegar a 28 graus Celsius. Use um termômetro ou sinta nos lábios a temperatura fria.</Text>
      <Text style={styles.topicos}>4. Transfira parte do chocolate para uma forma de ovo de Páscoa de 350 gramas e espalhe com a colher.</Text>
      <Text style={styles.topicos}>5. Coloque sobre o papel-manteiga e leve para gelar até endurecer.</Text>
      <Text style={styles.topicos}>6. Depois, passe mais uma camada de chocolate e espalhe com a colher.</Text>
      <Text style={styles.topicos}>7. Leve novamente para gelar até a forma ficar opaca.</Text>
      <Text style={styles.topicos}>8. Desenforme e decore do jeito que preferir.</Text>


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