import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Get screen dimensions for responsive spacing
const { height } = Dimensions.get('window');

const featuredShops = [
  {
    id: '1',
    name: 'AllDayFade',
    address: 'Obrero St, Davao City',
    rating: '4.9',
    image: require('../assets/bshop.alldayfade.jpg'),
  },
  {
    id: '2',
    name: 'Barracks Barbershop',
    address: 'Bajada St, Davao City',
    rating: '4.8',
    image: require('../assets/bshop.barracks.jpg'),
  },
  {
    id: '3',
    name: 'Atletiko Barbershop',
    address: '789 Sharp Rd, BGC',
    rating: '4.8',
    image: require('../assets/bshop.atletiko.jpg'),
  },
  {
    id: '4',
    name: 'Macho Mucho',
    address: 'Bolton St, Davao City',
    rating: '4.7',
    image: require('../assets/bshop.machomucho1.png'),
  },
  {
    id: '5',
    name: 'Boss Barbershop',
    address: 'Ecoland, Davao City',
    rating: '4.6',
    image: require('../assets/bshop.boss.jpg'), 
  },
  {
    id: '6',
    name: 'Kingsman Barbershop',
    address: 'Ruby Street, Poblacion District, Davao City',
    rating: '4.5',
    image: require('../assets/bshop.kingsman.jpg'),
  },
];

const highRatedBarbers = [
  {
    id: 'b1',
    name: 'John Cruz',
    shopName: 'AllDayFade',
    rating: '4.9',
    image: require('../assets/barber1.png'),
  },
  {
    id: 'b2',
    name: 'Mike Santos',
    shopName: 'Barracks',
    rating: '4.8',
    image: require('../assets/barber2.png'),
  },
  {
    id: 'b3',
    name: 'Rey Gomez',
    shopName: 'Atletiko',
    rating: '4.8',
    image: require('../assets/barber3.png'),
  },
];

export default function Services() {
  const router = useRouter();

  const renderShopItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.salonCard}
      onPress={() => router.push(`/Barbershops/${item.name.toLowerCase().replace(/\s+/g, '')}barbershop`)}
    >
      {item.image ? (
        <Image source={item.image} style={styles.salonImage} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Ionicons name="cut" size={40} color="#FFD700" />
        </View>
      )}
      <View style={styles.salonInfo}>
        <Text style={styles.salonName}>{item.name}</Text>
        <Text style={styles.salonAddress}>{item.address}</Text>
        <View style={styles.salonFooter}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <TouchableOpacity 
            style={styles.bookButton}
            onPress={() => router.push(`/Barbershops/${item.name.toLowerCase().replace(/\s+/g, '')}barbershop`)}
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderBarberItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.barberCard}
    >
      <Image source={item.image} style={styles.barberImage} />
      <View style={styles.barberInfo}>
        <Text style={styles.barberName}>{item.name}</Text>
        <Text style={styles.barberShop}>{item.shopName}</Text>
        <View style={styles.barberFooter}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <TouchableOpacity 
            style={styles.bookBarberButton}
            onPress={() => router.push(`/Barbers/${item.id.split('b')[1]}`)}
          >
            <Text style={styles.bookButtonText}>Book Barber</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={featuredShops}
        renderItem={renderShopItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.sectionTitle}>High Rated Barbers</Text>
            <FlatList
              horizontal
              data={highRatedBarbers}
              renderItem={renderBarberItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.barbersContainer}
            />
            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Featured Barbershops</Text>
          </>
        )}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    flexGrow: 1,
  },
  bottomSpacer: {
    height: 600, // Increased significantly
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 20,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 120, // Add extra padding at bottom for tab bar
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  salonCard: {
    backgroundColor: '#1e1f26',
    borderRadius: 16,
    overflow: 'hidden',
    width: '48%',
    marginBottom: 16,
  },
  salonImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#2a2b32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  salonInfo: {
    padding: 12,
  },
  salonName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  salonAddress: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 8,
  },
  salonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  bookButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  bookButtonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBuffer: {
    height: 80, // Height of tab bar plus extra padding
    backgroundColor: '#0d0e12',
  },
  barbersContainer: {
    paddingVertical: 16,
  },
  barberCard: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    overflow: 'hidden',
  },
  barberImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  barberInfo: {
    padding: 12,
  },
  barberName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  barberShop: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 4,
  },
  barberFooter: {
    marginTop: 8,
    flexDirection: 'column',
    gap: 8,
  },
  bookBarberButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
});