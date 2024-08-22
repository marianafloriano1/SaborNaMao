import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../img/bolo.png')} />
        <Text style={styles.paragraph}>
        Bolo de Fubá
            </Text>
      </View>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
      <Text style={styles.topicos}>- 2 ovos.</Text>
      <Text style={styles.topicos}>- 2 xícaras de açúcar.</Text>
      <Text style={styles.topicos}>- 2 xícaras de farinha de trigo.</Text>
      <Text style={styles.topicos}>- 2 colheres (chá) de fermento em pó.</Text>
      <Text style={styles.topicos}>- 2 xícaras de leite.</Text>
      <Text style={styles.topicos}>- 2 xícaras de fubá.</Text>
      <Text style={styles.topicos}>- 1 xícara de óleo.</Text>
           <Text style={styles.sectionTitle}>Utensílios:</Text>
      <Text style={styles.topicos}>- Liquidificador.</Text>
      <Text style={styles.topicos}>- Forma de bolo.</Text>
      </View>

      
           <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.topicos}>1. Bata no liquidificador em velocidade alta, os ovos, o óleo, o leite e o açúcar.</Text>
      <Text style={styles.topicos}>2. Quando estiver homogêneo, vá acrescentando a farinha e o fubá.</Text>
      <Text style={styles.topicos}>3. A massa vai começar a ficar grossa, então ajude mexendo com uma colher.</Text>
      <Text style={styles.topicos}>4. Quando estiver tudo bem misturado acrescente o fermento em pó e misture bem.</Text>
      <Text style={styles.topicos}>5. Unte uma assadeira grande de buraco no meio com óleo e açúcar (de preferência cristal).</Text>
      <Text style={styles.topicos}>6. Leve ao forno médio até dourar (cerca de 40 minutos).</Text>
      <Text style={styles.topicos}>7. Quando estiver quase totalmente frio pode desenformar.</Text>
      <Text style={styles.topicos}>8. Passe uma faca na lateral da forma, pegue um prato grande e coloque em cima da forma.</Text>
      <Text style={styles.topicos}>9. Vire a forma de ponta cabeça e pronto.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d698a6',
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
    color: '#be6e80',
    marginLeft: 10,
    flex: 1
    
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
    color: '#be6e80',
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