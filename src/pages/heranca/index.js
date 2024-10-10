import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, ImageBackground, Pressable, Alert, TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Heranca() {
  const [photoUri, setPhotoUri] = useState(null);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const nav = useNavigation();

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', quality: 1 }, async (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setPhotoUri(uri);
      }
    });
  };

  const handleSave = async () => {
    try {
      const storedData = await AsyncStorage.getItem('recipes');
      const recipes = storedData ? JSON.parse(storedData) : [];
      recipes.push({ photoUri, recipeName, ingredients, instructions });
      await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
      
      // Reset state
      setPhotoUri(null);
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      
      // Navigate to Profile Screen
      nav.navigate('perfil');
    } catch (error) {
      console.error('Failed to save data', error);
    }
  };
  

  return (
    <ImageBackground source={require('../../img/fundo_heranca.png')} style={styles.container}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <View>
              <Text style={styles.texto1}>Nome da receita:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                value={recipeName}
                onChangeText={setRecipeName}
              />
            </View>
          </View>
          <View>
            <Text style={styles.texto2}>Coloque os ingredientes:</Text>
            <TextInput
              style={styles.input2}
              placeholder="Digite aqui tudo o que precisa para a receita..."
              value={ingredients}
              onChangeText={setIngredients}
            />
            <Text style={styles.texto2}>Coloque o passo a passo:</Text>
            <TextInput
              style={styles.input2}
              placeholder="Digite aqui tudo o que precisa para que consiga refazer a receita..."
              value={instructions}
              onChangeText={setInstructions}
            />
          </View>
          <View style={styles.negocio}>
            {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}
            <Pressable style={styles.cameraButton} onPress={openCamera}>
              <FontAwesome name="camera" size={24} color="#000" />
            </Pressable>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <FontAwesome name="save" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('perfil')}>
              <FontAwesome name="arrow-circle-left" size={28} color="#000" />
            </TouchableOpacity>
          </View>
         
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
    height: 60,
    width: 210,
    marginTop: 15,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 143, 126, 0.4)',
    marginLeft: 20,
    textAlignVertical: 'top',
    paddingTop: 15,
    color: '#565656'
  },
  input2: {
    height: 200,
    width: 370,
    marginTop: 10,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 143, 126, 0.4)',
    marginLeft: 20,
    textAlignVertical: 'top',
    paddingTop: 20,
    paddingHorizontal: 10,
    color: '#565656'
  },
  texto1: {
    fontSize: 24,
    marginTop: 70,
    color: '#565656',
    marginLeft: 20,
    flex: 1,
  },
  texto2: {
    fontSize: 24,
    marginTop: 50,
    color: '#565656',
    marginLeft: 20,
    flex: 1,
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
  cameraButton: {
    position: 'absolute',
    bottom: 0.1,
    right: 10,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    position: 'absolute',
    bottom: 0.1,
    right: 70,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seta: {
    position: 'absolute',
    bottom: 0.1,
    right: 115,
    borderRadius: 30,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButtonText: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 90
  },
  negocio: {
    width: 160,
    height: 40,
    backgroundColor: 'rgba(255, 143, 126, 0.4)',
    borderRadius: 30,
    marginTop: 65,
    marginLeft: 125
  },
});
