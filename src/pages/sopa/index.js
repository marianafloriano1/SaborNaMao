import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/soup.png')} />
        <Text style={styles.paragraph}>
          Sopinha de Legumes com Frango
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 1 batata.</Text>
      <Text style={styles.topicos}>- Metade de uma cenoura.</Text>
      <Text style={styles.topicos}>- 2 peitos de frango.</Text>
      <Text style={styles.topicos}>- 1 dente de alho.</Text>
      <Text style={styles.topicos}>- 1/3 cebola.</Text>
       <Text style={styles.topicos}>- 1 colher de chá de azeite de oliva (opcional).</Text>
      
      </View>

    
     
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
       <Text style={styles.topicos}>1. Em uma panela grande, adicione um pouco de água e leve ao fogo médio.</Text>

      <Text style={styles.topicos}>2. Adicione os pedaços de frango e cozinhe até que estejam bem cozidos, o que deve levar cerca de 15-20 minutos. Retire o frango da panela e reserve.</Text>

      <Text style={styles.topicos}>3. Cubra com água, tampe a panela e cozinhe até que todos os ingredientes estejam bem macios e com um pouco de caldo.</Text>

      <Text style={styles.topicos}>4. Em uma panela separada, adicione o azeite de oliva e aqueça em fogo baixo.</Text>

      <Text style={styles.topicos}>5. Adicione o alho e a cebola picados e refogue até que fiquem macios e aromáticos. Este passo é opcional, mas ajuda a dar mais sabor à sopa.
</Text>

      <Text style={styles.topicos}>6. Na panela onde você cozinhou o frango, adicione a batata e a cenoura cortadas.</Text>

      <Text style={styles.topicos}>7. Adicione água suficiente para cobrir os legumes e leve ao fogo.</Text>

      <Text style={styles.topicos}>8. Cozinhe até que os legumes estejam bem macios, o que deve levar cerca de 15-20 minutos.</Text>

      <Text style={styles.topicos}>9. Adicione os pedaços de frango cozidos de volta à panela com os legumes.</Text>

      <Text style={styles.topicos}>10. Cozinhe por mais 5 minutos para que os sabores se misturem bem.</Text>

      <Text style={styles.topicos}>11. Deixe a sopa esfriar um pouco e, em seguida, passe-a por um processador de alimentos ou liquidificador para obter uma textura suave e homogênea. Você pode adicionar um pouco da água do cozimento, se necessário, para ajustar a consistência.</Text>

      <Text style={styles.sectionTitle}>Dica:</Text>

      <Text style={styles.topicos}>- A sopa pode ser armazenada na geladeira por até 3 dias ou congelada em porções pequenas para uso futuro.</Text>

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
