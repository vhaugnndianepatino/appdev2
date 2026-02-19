import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/login.png')}
        style={styles.image}
        resizeMode="contain"
      />


      <Text style={styles.title}>Login</Text>


      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>


      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.hyperLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },


  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff6bda',
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    height: 50,
  },


  input: {
    flex: 1,
    marginLeft: 10,
  },


  button: {
    backgroundColor: '#ff6bda',
    paddingVertical: 12,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },


  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },


  linkContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },


  linkText: {
    fontSize: 14,
    color: '#444',
  },


  hyperLink: {
    color: '#ff6bda',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

