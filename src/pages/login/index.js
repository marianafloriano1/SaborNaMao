import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, TextInput, Text, Pressable, Modal, Animated, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const auth = getAuth();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = () => {
    if (email === "" || password === "") {
      setAlertMessage("Preencha todos os campos!");
      setModalVisible(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setAlertMessage("Sucesso!");
        setModalVisible(true);
      })
      .catch((error) => {
        console.error(error.message);
        setAlertMessage(error.message);
        setModalVisible(true);
      });
  };

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setModalVisible(false);
          if (alertMessage === "Sucesso!") {
            navigation.navigate('home');
          }
        });
      }, 1300);

      return () => clearTimeout(timer);
    }
  }, [modalVisible, fadeAnim, navigation, alertMessage]);

  return (
    <ImageBackground  source={require('../../img/fundo_login.png')} style={styles.container}>

   
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require('../../img/logo_teste.png')} />
        <Text style={styles.texto3}>Bem vindo ao Sabor Na Mão! Faça o login e descubra novas receitas.</Text>
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
        animationType="none"
      >
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            {alertMessage === "Sucesso!" && (
              <Image source={require('../../img/check.png')} style={styles.checkImage} />
            )}
            <Text style={styles.modalText}>{alertMessage}</Text>
          </Animated.View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  texto3:{
    color:'#FF8F7E',
    fontSize: 22,
    marginTop:30,
    marginLeft: 50
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
    borderWidth: 1,
    borderColor: '#fff'
  },
  botaoTexto: {
    color: '#FF8F7E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  input: {
    height: 50,
    width: 346,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 55,
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
    color: '#FF8F7E',
  },
  checkImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  img: {
    width: 180,
    height: 180,
   marginTop: 90,
   marginLeft:120
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    height: 140,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#565656',
    marginTop: 5

  },
});

export default LoginScreen;
