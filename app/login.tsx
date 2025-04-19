import { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Sign In Title */}
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={() => router.replace('/tabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {/* Social Login Buttons Row */}
      <View style={styles.socialRow}>
        <Pressable style={[styles.socialButton, styles.facebook]} onPress={() => {}}>
          <FontAwesome name="facebook" size={22} color="#fff" />
        </Pressable>

        <Pressable style={[styles.socialButton, styles.google]} onPress={() => {}}>
          <AntDesign name="google" size={22} color="#000" />
        </Pressable>

        <Pressable style={[styles.socialButton, styles.apple]} onPress={() => {}}>
          <Ionicons name="logo-apple" size={22} color="#fff" />
        </Pressable>
      </View>

      {/* Create Account Link */}
      <View style={styles.registerWrapper}>
        <Text style={styles.registerText}>New here? </Text>
        <Pressable onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Create account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#000',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 14,
    borderRadius: 999,
    marginTop: 8,
  },
  buttonText: {
    color: '#0d0e12',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 12,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
  google: {
    backgroundColor: '#ffffff',
  },
  apple: {
    backgroundColor: '#000000',
  },
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  registerText: {
    color: '#ffffff',
    fontSize: 14,
  },
  registerLink: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
