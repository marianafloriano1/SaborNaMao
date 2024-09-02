import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView , TextInput, ImageBackground, Pressable} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('../../img/fundo_heranca.png')} style={styles.container}>
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        
        <Text style={styles.paragraph}>
        Bem vindo a Heranças! Aqui voce poderá salvar suas receitas queridas e sempre ve-las novamente! 
        </Text>
      </View>

<View style={styles.quadrado}>
<TextInput
        style={styles.input}
        placeholder="Digite seu email"
        
      />
      <TextInput
        style={styles.input2}
        placeholder="Digite sua senha"
      />
</View>
<Pressable style={styles.botao} >
        <Text style={styles.botaoTexto}>Entrar</Text>
      </Pressable>
     
     </ScrollView>
     </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 346,
    borderWidth: 3,
    borderColor: '#FF8F7E',
    marginTop: 55,
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
    color: '#FF8F7E',
  },
  input2: {
    height: 70,
    width: 346,
    borderWidth: 3,
    borderColor: '#FF8F7E',
    marginTop: 55,
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
    color: '#FF8F7E',
  },
  paragraph: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#ffff',
    marginLeft: 30,
    flex: 1,
  },
  quadrado:{
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 10,
    opacity: 0.8,
    alignContent: 'center',
    marginTop: 90,
    height: 400,
  },
  botao: {
    backgroundColor: 'transparent',
    borderRadius: 17,
    height: 40,
    width: 135,
    padding: 5,
    top: 90,
    left: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff'
  },
  botaoTexto: {
    color: '#FF8F7E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
});
