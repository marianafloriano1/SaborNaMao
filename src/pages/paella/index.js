import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/paella.png')} />
        <Text style={styles.paragraph}>
          Paella
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
       <Text style={styles.topicos}>- 1 fio de óleo.</Text>
      <Text style={styles.topicos}>- 1 fio de azeite.</Text>
      <Text style={styles.topicos}>- 1 cebola picada.</Text>
      <Text style={styles.topicos}>- 500 gramas de lula.</Text>
      <Text style={styles.topicos}>- 400 gramas de camarão 7 barbas descascado.</Text>
      <Text style={styles.topicos}>- 300 gramas de camarão rosa descascado.</Text>
      <Text style={styles.topicos}>- sal.</Text>
      <Text style={styles.topicos}>- 2 tomates sem sementes em cubos.</Text>
      <Text style={styles.topicos}>- 60 gramas de pimentão amarelo picado.</Text>
      <Text style={styles.topicos}>- Meia pimenta-dedo-de-moça picada sem sementes.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de páprica doce.</Text>
      <Text style={styles.topicos}>- 1L e 1/2 de caldo de camarão.</Text>
      <Text style={styles.topicos}>- 400 gramas de polvo.</Text>
      <Text style={styles.topicos}>- 250 gramas de marisco.</Text>
      <Text style={styles.topicos}>- 60 gramas de pimentão vermelho em tiras.</Text>
      <Text style={styles.topicos}>- 60 gramas de pimentão amarelo em tiras.</Text>
      <Text style={styles.topicos}>- 100 gramas de ervilha.</Text>
      <Text style={styles.topicos}>- Meio maço de salsa picada.</Text>
      <Text style={styles.topicos}>- 5 xícaras de chá de arroz parboilizado.</Text>
      <Text style={styles.topicos}>- 1 colher de sopa de açafrão.</Text>
      <Text style={styles.topicos}>- 5 camarões grandes.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Em uma paejeira adicione o óleo, o azeite, as cebolas picadas, a lula e refogue bem.</Text>
      <Text style={styles.topicos}>2. Acrescente o camarão 7 barbas, o camarão rosa, o sal e continue refogando todos os ingredientes.</Text>
      <Text style={styles.topicos}>3. Junte no refogado o tomate, o pimentão amarelo, a pimenta dedo-de-moça, a páprica doce, a páprica picante, o tempero da paella e misture bem.</Text>
      <Text style={styles.topicos}>4. Coloque no refogado o arroz parboilizado, espalhe o arroz e não mexa.</Text>
      <Text style={styles.topicos}>5. Dissolva o açafrão no caldo de camarão, adicione no refogado e cubra todo o arroz.</Text>
      <Text style={styles.topicos}>6. Deixe cozinhar por 30 minutos e coloque mais um pouco de caldo de camarão.</Text>
      <Text style={styles.topicos}>7. Quando estiver no meio do cozimento, inicie a decoração adicionando o camarão grande, o polvo, o marisco, pimentão vermelho e amarelo em tiras, ervilha e finalize com salsa picada.</Text>
      <Text style={styles.topicos}>8. Desligue o fogo e cubra com papel alumínio por 10 minutos.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8a0',
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
    color: '#dfc265',
    marginLeft: 30,
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
    color: '#dfc265',
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
