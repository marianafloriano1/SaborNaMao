import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        
      <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
  <FontAwesome name="arrow-circle-left" size={28} color="#6E789C" />
</TouchableOpacity>

        <Text style={styles.paragraph}>
          Arroz de Forno
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 1 xícara de arroz cozido (pode ser arroz branco ou integral).</Text>
        <Text style={styles.topicos}>- 1/4 de xícara de peito de frango desfiado ou outro tipo de carne a gosto (pode ser presunto, calabresa, etc.).</Text>
        <Text style={styles.topicos}>- 1/4 de xícara de queijo ralado (muçarela, parmesão ou o de sua preferência).</Text>
        <Text style={styles.topicos}>- 1/4 de xícara de molho de tomate.</Text>
        <Text style={styles.topicos}>- 1/4 de cebola picada.</Text>
        <Text style={styles.topicos}>- 1 dente de alho picado.</Text>
        <Text style={styles.topicos}>- 1/4 de pimentão picado (opcional).</Text>
        <Text style={styles.topicos}>- 1/4 de cenoura ralada (opcional).</Text>
        <Text style={styles.topicos}>- Sal e pimenta a gosto.</Text>
        <Text style={styles.topicos}>- Azeite ou óleo para refogar.</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Preaqueça o forno a 180°C.</Text>
      <Text style={styles.topicos}>2. Refogue os temperos: Em uma frigideira pequena, aqueça um pouco de azeite ou óleo em fogo médio. Adicione a cebola e o alho, refogando até que fiquem transparentes. Se estiver usando, acrescente o pimentão e a cenoura e refogue por mais alguns minutos.</Text>
      <Text style={styles.topicos}>3. Adicione a carne: Incorpore o peito de frango desfiado ou a carne de sua escolha. Refogue até que a carne esteja bem misturada com os temperos e um pouco dourada. Tempere com sal e pimenta a gosto.</Text>
      <Text style={styles.topicos}>4. Misture o arroz: Adicione o arroz cozido à frigideira e misture bem com a carne e os temperos.</Text>
      <Text style={styles.topicos}>5. Monte a mistura de arroz: Transfira a mistura de arroz para um pequeno recipiente que possa ir ao forno.</Text>
      <Text style={styles.topicos}>6. Adicione o molho de tomate: Coloque o molho de tomate por cima da mistura de arroz.</Text>
      <Text style={styles.topicos}>7. Cubra com queijo: Polvilhe o queijo ralado por cima do arroz.</Text>
      <Text style={styles.topicos}>8. Leve ao forno: Coloque o recipiente no forno preaquecido e asse por cerca de 15-20 minutos, ou até que o queijo esteja derretido e levemente dourado.</Text>
      <Text style={styles.topicos}>9. Sirva: Retire do forno e deixe esfriar um pouco antes de servir.</Text>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdede9', 
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
    marginLeft: 30,
    
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
