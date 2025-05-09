import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const favoriteBarbers = [
  {
    id: '1',
    name: 'John Doe',
    shop: 'AllDayFade',
    image: require('../assets/barber1.png'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    shop: 'Barracks Barbershop',
    image: require('../assets/barber2.png'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    shop: 'Atletiko Barbershop',
    image: require('../assets/barber1.png'),
  },
];

export default function Favorites() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorite Barbers</Text>
      <FlatList
        data={favoriteBarbers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shop}>{item.shop}</Text>
            </View>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push(`/barber/${item.id}`)}
            >
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
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
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1f26',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  shop: {
    color: '#aaa',
    fontSize: 14,
  },
  iconButton: {
    padding: 8,
  },
});