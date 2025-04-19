import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { router } from 'expo-router';

// Use the local image
const backgroundImage = require('./assets/welcomebackground.png');

const Welcome = () => {
  return (
    <ImageBackground
      source={backgroundImage} // Use the local image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.centeredContent}>
          <Text style={styles.title}>BUZZFADE</Text>
          <Text style={styles.subtitle}>Get the cleanest cuts in town.</Text>
        </View>

        <View style={styles.bottomButton}>
          <Pressable style={styles.button} onPress={() => router.push('/login')}>
            <Text style={styles.buttonText}>Book Now</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 14, 18, 0.6)', // semi-transparent dark overlay
    padding: 20,
    justifyContent: 'space-between',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomButton: {
    alignItems: 'center',
    marginBottom: 90, // Adjusted to move the button up
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999,
  },
  buttonText: {
    color: '#0d0e12',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
