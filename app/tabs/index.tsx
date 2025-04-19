import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const userName = 'Alex';

const featuredBarberImage = require('../assets/barbernialana.png');

const services = ['Haircut', 'Trim', 'Shaving', 'Styling', 'Coloring'];

const trendingHaircuts = [
  { name: 'Buzzcut', image: require('../assets/buzzcut.png') },
  { name: 'Wolfcut', image: require('../assets/wolfcut.png') },
  { name: 'Undercut', image: require('../assets/undercut.png') },
  { name: '16-Guard', image: require('../assets/16guard.png') },
];

const topSalons = [
  {
    id: '1',
    name: 'AllDayFade',
    address: 'Obrero St, Davao City',
    price: '₱350',
    image: require('../assets/bshop.alldayfade.jpg'),
  },
  {
    id: '2',
    name: 'Barracks Barbershop',
    address: 'Bajada St, Davao City',
    price: '₱400',
    image: require('../assets/bshop.barracks.jpg'),
  },
  {
    id: '3',
    name: 'Atletiko Barbershop',
    address: '789 Sharp Rd, BGC',
    price: '₱380',
    image: require('../assets/bshop.atletiko.jpg'),
  },
];


export default function Home() {
  const router = useRouter();

  // Function to navigate to the Services tab when "View All" is pressed
  const navigateToServices = () => {
    router.push('/tabs/services'); // This will navigate to the Services tab
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning, {userName}</Text>
        <View style={styles.icons}>
          <Ionicons name="heart-outline" size={24} color="#fff" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search services or salons"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Feather name="filter" size={24} color="#fff" />
      </View>

      {/* FEATURED BARBER SECTION */}
      <Text style={styles.sectionTitle}>Featured Barber</Text>
      <ImageBackground
        source={require('../assets/welcomebackground.png')} // Corrected path
        style={styles.background}
        resizeMode="cover"
      >
        <Image source={featuredBarberImage} style={styles.featuredBarber}
          resizeMode="cover"
        />
      </ImageBackground>

      {/* TRENDING HAIRCUTS SECTION */}
      <Text style={styles.sectionTitle}>Trending</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingRow}>
        {trendingHaircuts.map((cut, index) => (
          <View key={index} style={styles.trendingBox}>
            <Image source={cut.image} style={styles.trendingImage} />
            <Text style={styles.trendingText}>{cut.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* SERVICES SECTION */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Services</Text>
        <TouchableOpacity onPress={navigateToServices}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesRow}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceBox}>
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </ScrollView>

      {/* TOP RATED SALONS */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Rated Shops</Text>
        <TouchableOpacity onPress={navigateToServices}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={topSalons}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.salonCard}>
            <Image source={item.image} style={styles.salonImage} />
            <View style={styles.salonInfo}>
              <Text style={styles.salonName}>{item.name}</Text>
              <Text style={styles.salonAddress}>{item.address}</Text>
              <Text style={styles.salonPrice}>Avg. Price: {item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* BLANK SECTION */}
      <View style={styles.blankSection} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
    fontSize: 16,
  },
  featuredBarber: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
  },
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  trendingRow: {
    marginBottom: 24,
  },
  trendingBox: {
    alignItems: 'center',
    marginRight: 16,
  },
  trendingImage: {
    padding: 10,
    paddingLeft:10,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 6,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  
  trendingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  viewAll: {
    color: '#4f8ef7',
    fontSize: 14,
  },
  servicesRow: {
    marginBottom: 24,
  },
  serviceBox: {
    backgroundColor: '#1e1f26',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 12,
  },
  serviceText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  salonCard: {
    backgroundColor: '#1e1f26',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    width: 200,
  },
  salonImage: {
    width: '100%',
    height: 120,
  },
  salonInfo: {
    padding: 10,
  },
  salonName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  salonAddress: {
    color: '#aaa',
    fontSize: 12,
    marginVertical: 4,
  },
  salonPrice: {
    color: '#4f8ef7',
    fontSize: 14,
    fontWeight: '500',
  },
  blankSection: {
    height: 100, // Adjust the height as needed
  },
});
