import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/macarrao.png')} />
        <Text style={styles.paragraph}>
          Macarrão à Bolonhesa
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 150g de carne moída (pode ser bovina, suína, ou uma mistura).</Text>
        <Text style={styles.topicos}>- 1/2 cebola pequena, picada.</Text>
        <Text style={styles.topicos}>- 1 dente de alho, picado.</Text>
        <Text style={styles.topicos}>- 1/2 talo de salsão, picado (opcional).</Text>
        <Text style={styles.topicos}>- 1/2 xícara de molho de tomate.</Text>
        <Text style={styles.topicos}>- 1/2 colher de chá de extrato de tomate (opcional, para intensificar o sabor).</Text>
        <Text style={styles.topicos}>- 1/4 colher de chá de orégano seco.</Text>
        <Text style={styles.topicos}>- 1/4 colher de chá de manjericão seco.</Text>
        <Text style={styles.topicos}>- Sal e pimenta a gosto.</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de azeite de oliva.</Text>
        <Text style={styles.topicos}>- 100g de macarrão (espaguete, penne, ou o que preferir).</Text>
        <Text style={styles.topicos}>- Água e sal para cozinhar o macarrão.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em uma panela média, aqueça o azeite em fogo médio.</Text>

      <Text style={styles.topicos}>2. Adicione a cebola e o alho e refogue até que fiquem macios e levemente dourados.</Text>

      <Text style={styles.topicos}>3. Adicione a carne moída e cozinhe até que esteja bem dourada.</Text>
      <Text style={styles.topicos}>4. Adicione o salsão (se estiver usando) e refogue por alguns minutos.</Text>

      <Text style={styles.topicos}>5. Adicione o molho de tomate, o extrato de tomate (se estiver usando), o orégano, o manjericão, sal e pimenta a gosto. </Text>

      <Text style={styles.topicos}>6. Enquanto o molho está cozinhando, coloque água para ferver em uma panela grande. Adicione sal a gosto.</Text>

      <Text style={styles.topicos}>7. Cozinhe o macarrão conforme as instruções da embalagem.</Text>
      
      <Text style={styles.topicos}>8. Escorra o macarrão e reserve um pouco da água do cozimento.</Text>

      <Text style={styles.topicos}>9. Misture o macarrão escorrido no molho bolonhesa, adicionando um pouco da água do cozimento do macarrão se necessário para ajustar a consistência.</Text>

      <Text style={styles.topicos}>10. Sirva imediatamente, e se desejar, polvilhe com queijo parmesão ralado e algumas folhas de manjericão fresco.</Text>

     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8c7cc',
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
    color: '#6E789C',
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
    color: '#6E789C',
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
