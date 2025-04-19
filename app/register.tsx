import { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;

    // Validate email
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      // Proceed with registration (e.g., navigate to the login screen)
      router.push('/login');
    } else {
      Alert.alert('Validation Error', 'Please fix the errors in the form.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Sign Up Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Input Fields */}
      <TextInput
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, emailError ? styles.inputError : null]}
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        style={[styles.input, passwordError ? styles.inputError : null]}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Conditionally render the Confirm Password field if password is filled */}
      {password ? (
        <>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={[styles.input, confirmPasswordError ? styles.inputError : null]}
            secureTextEntry
          />
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        </>
      ) : null}

      {/* Register Button */}
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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

      {/* Sign In Link */}
      <View style={styles.loginWrapper}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.loginLink}>Login</Text>
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
  inputError: {
    borderColor: '#FF0000',
    borderWidth: 1,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
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
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 14,
  },
  loginLink: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
