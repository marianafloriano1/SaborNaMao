import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text, Pressable, Modal, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setAlertMessage("Você foi logado com sucesso!");
        setModalVisible(true);
      })
      .catch((error) => {
        console.error(error.message);
        setAlertMessage(error.message);
        setModalVisible(true);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require('../../img/sucesso.png')} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.subcontainer}>
        <Text style={styles.texto1}>Não tem conta?</Text>
        <Pressable onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.texto}>Cadastre-se!</Text>
        </Pressable>
      </View>

      <Pressable style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </Pressable>

      
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{alertMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('home');
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeecf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#C6D3A1',
    borderRadius: 5,
    height: 40,
    width: 135,
    padding: 5,
    top: 90,
    left: 120,
  },
  botaoTexto: {
    color: '#FF8F7E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    top: 2,
  },
  input: {
    height: 50,
    width: 346,
    borderWidth: 3,
    borderColor: '#C6D3A1',
    marginTop: 45,
    fontSize: 16,
    padding: 15,
    borderRadius: 15,
    color: '#FF8F7E',
  },
  img: {
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#FF8F7E',
    fontWeight: 'bold',
    marginTop: 20,
  },
  texto1: {
    marginTop: 20,
    fontSize: 20,
    color: '#FF8F7E',
  },
  subcontainer: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#C6D3A1',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FF8F7E',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
