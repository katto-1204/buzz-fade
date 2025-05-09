import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Payments() {
  const router = useRouter();

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      details: '**** **** **** 1234',
      icon: 'card',
    },
    {
      id: 2,
      type: 'PayPal',
      details: 'john.doe@example.com',
      icon: 'logo-paypal',
    },
    {
      id: 3,
      type: 'Apple Pay',
      details: 'Connected',
      icon: 'logo-apple',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <View style={styles.cardContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.card}>
            <Ionicons name={method.icon} size={32} color="#FFD700" />
            <View style={styles.cardDetails}>
              <Text style={styles.cardType}>{method.type}</Text>
              <Text style={styles.cardInfo}>{method.details}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('../payments/add')}
      >
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add Payment Method</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1f26',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardDetails: {
    marginLeft: 16,
  },
  cardType: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardInfo: {
    color: '#aaa',
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  addButtonText: {
    color: '#0d0e12',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});