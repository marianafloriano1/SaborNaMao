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
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setModalVisible(false);
          if (alertMessage === "Sucesso!") {
            navigation.navigate('home');
          }
        });
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [modalVisible, fadeAnim, navigation, alertMessage]);

  return (
    <ImageBackground  source={require('../../img/fundo_login.png')} style={styles.container}>

   
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require('../../img/logo_teste.png')} />
        <Text style={styles.texto_cima}>Faça o login!</Text>
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
    width: 'auto',
    height: 'auto'
    
  },
  texto_cima: {
    color: '#FF8F7E',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft:90,
    marginBottom: 10
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
  input: {
    height: 50,
    width: 346,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 35,
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
    width: 300,
    height: 300,
   marginTop: 70,
   marginLeft:10
  },
  texto: {
    fontSize: 20,
    color: '#FF8F7E',
    fontWeight: 'bold',
    marginTop: 30,
  },
  texto1: {
    marginTop: 30,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  },
  checkImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
});

export default LoginScreen;
