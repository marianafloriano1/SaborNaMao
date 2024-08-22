import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Modal, Alert, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const auth = getAuth();

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário cadastrado:', userCredential.user);
        setModalVisible(true); // Exibir o modal de sucesso
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error.message);
        Alert.alert('Erro', error.message);
      });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('login'); // Navegar para a tela de login
  };

  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('../../img/sucesso.png')} />

      <View style={styles.inputContainer}>
        <Text style={styles.texto_cima}>Digite Seu Email:</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.texto_cima2}>Crie uma senha:</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable style={styles.botao} onPress={handleSignup}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Cadastro realizado com sucesso!</Text>
            <Pressable style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae7c4',
    padding: 20,
  },
  botao:{
    backgroundColor:'#FF8F7E',
    borderRadius:5,
    height: 40,
    width: 135,
    padding:5,
    top:98,
    left:240,
  },
  botaoTexto: {
    color: '#C6D3A1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    top: 3,
  },

  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#FF8F7E',
    fontSize: 16,
    padding: 15,
    borderRadius: 15,
    color: '#FF8F7E',
    marginTop: 10,
  },
  img: {
    width: 350,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },

  texto_cima: {
    color: '#C6D3A1',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 22
  },
  texto_cima2: {
    color: '#C6D3A1',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FF8F7E',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#C6D3A1',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default SignupScreen;
