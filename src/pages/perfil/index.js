import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, updateProfile, signOut } from 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  const nav = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user?.displayName || 'Altere seu nome');
  const [selectedIcon, setSelectedIcon] = useState(require('../../img/perfil.png')); // ícone padrão

  // Lista de ícones
  const iconList = [
    { id: '1', source: require('../../img/icon1.png') },
    { id: '2', source: require('../../img/icon2.png') },
    { id: '3', source: require('../../img/icon3.png') },
    { id: '4', source: require('../../img/icon4.png') },
    { id: '5', source: require('../../img/icon5.png') },
  ];

  useEffect(() => {
    const loadSettings = async () => {
      try {
        if (user) {
          const storedUsername = await AsyncStorage.getItem(user.email + '_username');
          if (storedUsername) setUsername(storedUsername);

          // Gere um ícone aleatório baseado no email
          const index = Math.abs(emailHashCode(user.email)) % iconList.length;
          const icon = iconList[index];
          setSelectedIcon(icon.source);

          // Salvar ícone no AsyncStorage
          await AsyncStorage.setItem(user.email + '_selectedIconId', icon.id);
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
      hash |= 0; // Convert to 32bit integer
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

  const handleGoToLogin = async () => {
    try {
      await signOut(auth);
      // Remover configurações do AsyncStorage
      await AsyncStorage.removeItem(user.email + '_username');
      await AsyncStorage.removeItem(user.email + '_selectedIconId');
      nav.navigate('login'); // Navegar para a tela de login
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <ImageBackground source={require('../../img/fundo_perfil.png')} style={styles.container}>
      <View style={styles.container}>
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
        </View>
        <Pressable onPress={handleGoToLogin} style={styles.logoutButton}>
          <Text style={styles.buttonText}>Sair</Text>
        </Pressable>
        <TouchableOpacity  onPress={() => nav.navigate('heranca')} style={styles.saveButton}>
                <FontAwesome name="plus" size={24} color="#C6D3A1" />
              </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileIcon: {
    width: 180,
    height: 180,
    borderRadius: 50,
    marginBottom: 16,
    marginTop:130,
    
  },
  usernameContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  usernameInput: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20,
    
  },
  editButton: {
    position: 'absolute',
    right: 90,
    top: 20,
    zIndex: 1,
  },
  saveButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  logoutButton: {
    backgroundColor: '#DC3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
