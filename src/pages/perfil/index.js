import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';
import Menu from '../../components/Menu';

export default function ProfileScreen() {
  const nav = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [menuVisible, setMenuVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user?.displayName || 'Altere seu nome');
  const [selectedIcon, setSelectedIcon] = useState(require('../../img/perfil.png'));
  const [recipes, setRecipes] = useState([]);

  const iconList = [
    { id: '1', source: require('../../img/icon1.png') },
    { id: '2', source: require('../../img/icon2.png') },
    { id: '3', source: require('../../img/icon3.png') },
    { id: '4', source: require('../../img/icon4.png') },
    { id: '5', source: require('../../img/icon5.png') },
    { id: '6', source: require('../../img/icon6.png') },
    { id: '7', source: require('../../img/icon7.png') },
    { id: '8', source: require('../../img/icon8.png') },
    { id: '9', source: require('../../img/icon9.png') },
    { id: '10', source: require('../../img/icon10.png') },
    { id: '11', source: require('../../img/icon11.png') },
    { id: '12', source: require('../../img/icon12.png') },
  ];

  useEffect(() => {
    const loadSettings = async () => {
      try {
        if (user) {
          const storedUsername = await AsyncStorage.getItem(user.email + '_username');
          if (storedUsername) setUsername(storedUsername);

          const storedIconId = await AsyncStorage.getItem(user.email + '_selectedIconId');
          if (storedIconId) {
            const icon = iconList.find((icon) => icon.id === storedIconId);
            if (icon) setSelectedIcon(icon.source);
          } else {
            const index = Math.abs(emailHashCode(user.email)) % iconList.length;
            const icon = iconList[index];
            setSelectedIcon(icon.source);
            await AsyncStorage.setItem(user.email + '_selectedIconId', icon.id);
          }

          // Load all recipes
          const storedRecipes = await AsyncStorage.getItem('recipes');
          if (storedRecipes) setRecipes(JSON.parse(storedRecipes));
        }
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, [user]);

  const emailHashCode = (email) => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash;
  };

  const handleEditPress = () => {
    setEditing(true);
  };

  const handleSavePress = async () => {
    setEditing(false);
    try {
      if (user) {
        await updateProfile(user, { displayName: username });
        await AsyncStorage.setItem(user.email + '_username', username);
      }
    } catch (error) {
      console.error("Failed to save settings", error);
    }
  };

  const handleImagePress = (recipe) => {
    Alert.alert('Informações da Receita', `Nome da Receita: ${recipe.recipeName}\nIngredientes: ${recipe.ingredients}\nInstruções: ${recipe.instructions}`);
  };

  return (
    <ImageBackground source={require('../../img/fundo_perfil.png')} style={styles.container}>
      <Menu visible={menuVisible} onClose={() => setMenuVisible(false)} />
      <Pressable onPress={() => setMenuVisible(true)} style={styles.menuButton}>
        <FontAwesome name="bars" size={34} color="#FF8F7E" />
      </Pressable>
      <View style={styles.profileInfo}>
        <Image source={selectedIcon} style={styles.profileIcon} />
        <View style={styles.usernameContainer}>
          <TextInput
            style={styles.usernameInput}
            value={username}
            onChangeText={setUsername}
            editable={editing}
          />
          {!editing ? (
            <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
              <FontAwesome name="edit" size={24} color="#FF8F7E" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSavePress} style={styles.saveButton}>
              <FontAwesome name="save" size={24} color="#C6D3A1" />
            </TouchableOpacity>
          )}
        </View>
        <ScrollView style={styles.scrollContainer}>
          {recipes.map((recipe, index) => (
            <View key={index} style={styles.recipeContainer}>
              {recipe.photoUri && (
                <TouchableOpacity onPress={() => handleImagePress(recipe)}>
                  <Image source={{ uri: recipe.photoUri }} style={styles.savedImage} />
                </TouchableOpacity>
              )}
              <Text style={styles.recipeText}>{recipe.recipeName || 'Não definido'}</Text>

            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => nav.navigate('heranca')} style={styles.addButton}>
        <FontAwesome name="plus" size={24} color="#C6D3A1" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 110,
  },
  profileIcon: {
    width: 170,
    height: 170,
    borderRadius: 90,
    marginBottom: 40,
    borderWidth: 4,
    marginTop: 60,
    borderColor: '#FF8F7E',
    borderStyle: 'dotted',
  },
  usernameContainer: {
    width: '100%',
    alignItems: 'center',
  },
  usernameInput: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 4,
  },
  editButton: {
    position: 'absolute',
    right: 110,
    top: 2,
    zIndex: 1,
  },
  saveButton: {
    position: 'absolute',
    right: 110,
    top: 2,
    zIndex: 1,
  },
  menuButton: {
    position: 'absolute',
    left: 30,
    top: 80,
    zIndex: 1,
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    zIndex: 1,
  },
  savedImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  },
  recipeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  recipeText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
});
