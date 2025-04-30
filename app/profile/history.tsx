import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function History() {
  const router = useRouter();
  
  const bookingHistory = [
    {
      id: '1',
      barber: 'John Cruz',
      shop: 'AllDayFade',
      date: '2024-04-15',
      service: 'Haircut',
      price: '₱150',
      image: require('../assets/barber1.png'),
    },
    // Add more history items
  ];

  const renderHistoryItem = ({ item }) => (
    <TouchableOpacity style={styles.historyCard}>
      <Image source={item.image} style={styles.barberImage} />
      <View style={styles.cardContent}>
        <Text style={styles.shopName}>{item.shop}</Text>
        <Text style={styles.barberName}>{item.barber}</Text>
        <Text style={styles.serviceInfo}>
          {item.service} • {item.price}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <TouchableOpacity style={styles.rateButton}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.rateText}>Rate</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Booking History</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={bookingHistory}
        renderItem={renderHistoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e1f26',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  barberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  shopName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  barberName: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 2,
  },
  serviceInfo: {
    color: '#FFD700',
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  rateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2b31',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  rateText: {
    color: '#FFD700',
    fontSize: 14,
  },
});