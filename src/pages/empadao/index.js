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
          Empadão de Frango
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.ingredientsList}>
        <Text style={styles.topicos}>- 3/4 colheres de farinha de trigo.</Text>
        <Text style={styles.topicos}>- Sal à gosto.</Text>
        <Text style={styles.topicos}>- Manteiga gelada (50g ou 1/4 da barrinha).</Text>
        <Text style={styles.topicos}>- 1 colher de sopa de água gelada.</Text>
        <Text style={styles.topicos}>- Frango desfiado</Text>
        <Text style={styles.topicos}>- Requeijão (opcional)</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Em um bowl coloque a farinha de trigo, uma pitada de sal e misture bem.</Text>

      <Text style={styles.topicos}>2. Em seguida adicione a manteiga e mexa muito bem com as mãos, e quanto estiver quase tudo se misturando adicione a água.</Text>

      <Text style={styles.topicos}>3. Coloque a massa para descansar na geladeira por 30 minutos.</Text>
      <Text style={styles.topicos}>4. Depois dos 30 minutos espalhe um pouco de farinha em uma bancada e abra bem a massa, separe um pedaço da massa para fechar o empadão depois e com o restante coloque na forma que desejar.</Text>

      <Text style={styles.topicos}>5. Adicione o frango desfiado com o requeijão na massa e tampe com o restante que sobrou da massa. </Text>

      <Text style={styles.topicos}>6. Agora asse na Air Fryer por 15 minutos na temperatura de 160°C.</Text>

      <Text style={styles.topicos}>10. Agora espera esfriar, desenforme e está pronto para servir.</Text>

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
