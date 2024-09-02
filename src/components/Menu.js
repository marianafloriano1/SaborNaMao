// src/Components/Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Menu = ({ visible, onClose }) => {
  const navigation = useNavigation();

  if (!visible) return null;

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesome name="times" size={24} color="#C6D3A1" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigation.navigate('home')}
      >
        <FontAwesome name="home" size={24} color="#C6D3A1" />
        <Text style={styles.sidebarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigation.navigate('perfil')}
      >
        <FontAwesome name="user" size={24} color="#C6D3A1" />
        <Text style={styles.sidebarText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigation.navigate('login')} 
      >
        <FontAwesome name="sign-out" size={24} color="#C6D3A1" />
        <Text style={styles.sidebarText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    zIndex: 10,
  },
  closeButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop:90,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarText: {
    color: '#565656',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Menu;
