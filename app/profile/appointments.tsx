import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Appointments() {
  const router = useRouter();
  
  const appointments = [
    {
      id: '1',
      barber: 'John Cruz',
      shop: 'AllDayFade',
      date: '2024-05-03',
      time: '10:00 AM',
      service: 'Haircut',
    },
    {
      id: '2',
      barber: 'Mike Santos',
      shop: 'Barracks',
      date: '2024-05-05',
      time: '2:30 PM',
      service: 'Fade + Beard Trim',
    },
  ];

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.shopName}>{item.shop}</Text>
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => {/* Add cancel logic */}}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="person" size={20} color="#FFD700" />
          <Text style={styles.detailText}>{item.barber}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Ionicons name="cut" size={20} color="#FFD700" />
          <Text style={styles.detailText}>{item.service}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Ionicons name="calendar" size={20} color="#FFD700" />
          <Text style={styles.detailText}>{item.date} at {item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>My Appointments</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={appointments}
        renderItem={renderAppointment}
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
  appointmentCard: {
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  shopName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FF4444',
  },
  cancelText: {
    color: '#FF4444',
    fontSize: 14,
  },
  cardDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailText: {
    color: '#aaa',
    fontSize: 16,
  },
});