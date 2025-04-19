import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Text style={styles.title}>BUZZFADE</Text>
        <Text style={styles.subtitle}>Get the cleanest cuts in town.</Text>
      </View>

      <View style={styles.bottomButton}>
        <Pressable style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    padding: 20,
    justifyContent: 'space-between',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999, // Fully rounded
  },
  buttonText: {
    color: '#0d0e12',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
