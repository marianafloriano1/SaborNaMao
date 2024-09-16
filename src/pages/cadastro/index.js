import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Modal, Animated, Image, Alert, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database'; // Importando funções para salvar no Firebase Database

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // Mensagem de alerta
  const auth = getAuth();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSignup = () => {
    if (email === "" || password === "") {
      setAlertMessage("Preencha todos os campos");
      setModalVisible(true);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário cadastrado:', userCredential.user);
        
        // Gerar nome de usuário aleatório
        const randomName = 'User' + Math.floor(Math.random() * 10000);

        // Salvar o nome gerado no banco de dados
        const db = getDatabase();
        set(ref(db, 'users/' + userCredential.user.uid), {
          username: randomName,
          email: email
        });

        setAlertMessage("Cadastrado!");
        setModalVisible(true);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error.message);
        setAlertMessage(error.message); // Defina a mensagem de erro
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
          if (alertMessage === "Cadastrado!") {
            navigation.navigate('login');
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
      </View>
      <Text style={styles.texto_cima}>Cadastre-se!</Text>
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Crie um email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
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
        animationType="none" // Desativar a animação padrão do modal
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            {/* Exibe a imagem de sucesso somente quando a mensagem não é de erro */}
            {alertMessage === "Cadastrado!" && (
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
    color: '#C6D3A1',
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
    color: '#C6D3A1',
    fontWeight: 'bold'
  },
  img: {
    width: 300,
    height: 300,
   marginTop: 70,
   marginLeft:10
  },
  texto_cima: {
    color: '#C6D3A1',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft:20,
    marginBottom: 10
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

export default SignupScreen;
