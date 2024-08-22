import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/pesto.png')} />
        <Text style={styles.paragraph}>
          Macarrão Cremoso De Espinafre
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1/4 de xícara de macarrão pequeno (como conchinha ou estrela).</Text>
      <Text style={styles.topicos}>- 1/2 xícara de espinafre fresco.</Text>
      <Text style={styles.topicos}>- 1/4 de xícara de batata-doce ou abóbora, descascada e cortada em cubos pequenos.</Text>
      <Text style={styles.topicos}>- 1 colher de chá de azeite de oliva.</Text>
      <Text style={styles.topicos}>- 1/4 de xícara de queijo cottage (ou outro queijo fresco sem sal).</Text>
      <Text style={styles.topicos}>- 1/4 de xícara de água ou caldo de legumes (sem sal).</Text>
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Cozinhe a batata-doce (ou abóbora) em água fervente até que esteja bem macia. Isso deve levar cerca de 10-15 minutos.</Text>

      <Text style={styles.topicos}>2. Em outra panela, cozinhe o espinafre em água fervente por cerca de 2-3 minutos até murchar. Escorra bem e pique finamente ou passe no processador.</Text>

      <Text style={styles.topicos}>3. Cozinhe o macarrão de acordo com as instruções da embalagem, mas certifique-se de que fique bem macio para facilitar a digestão do bebê.</Text>

      <Text style={styles.topicos}>4. Em uma panela pequena, aqueça o azeite em fogo baixo. Adicione a batata-doce cozida e amassada, e misture bem.</Text>

      <Text style={styles.topicos}>5. Adicione o espinafre picado e mexa até que tudo esteja bem incorporado.</Text>

      <Text style={styles.topicos}>6. Gradualmente adicione o queijo cottage e a água (ou caldo de legumes), mexendo até que o molho fique cremoso e homogêneo.</Text>

      <Text style={styles.topicos}>7. Adicione o macarrão cozido à mistura de espinafre e batata-doce. Mexa bem para combinar.</Text>

      <Text style={styles.topicos}>8. Deixe esfriar um pouco antes de servir ao bebê. A textura deve ser bem suave e o molho bem cremoso.</Text>

      <Text style={styles.sectionTitle}>Dica:</Text>

      <Text style={styles.topicos}>- Se necessário, passe o macarrão com o molho em um processador de alimentos ou liquidificador para garantir que esteja bem liso e sem grumos.</Text>

      <Text style={styles.sectionTitle}>Atenção!</Text>

      <Text style={styles.topicos}>- Adequado a partir de 6 meses.</Text>
      
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1dbcf',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#609f84',
    marginLeft: 10,
    flex: 1,
    
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#609f84',
    marginTop: 10,
  },
  ingredientsList: {
    marginBottom: 20,
  },
  topicos: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },
});
