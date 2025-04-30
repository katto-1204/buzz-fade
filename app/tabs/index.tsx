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
  SafeAreaView,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Constants
const userName = 'Alex';
const featuredBarberImage = require('../assets/barbernialana.png');
const welcomeBackground = require('../assets/welcomebackground.png');

// Data arrays
const services = [
  { name: 'Haircut', icon: 'scissors-cutting' },
  { name: 'Trim', icon: 'content-cut' },
  { name: 'Shaving', icon: 'razor-double-edge' },
  { name: 'Styling', icon: 'hair-dryer' },
  { name: 'Coloring', icon: 'palette' },
  { name: 'Massage', icon: 'hand-heart' },
];

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

  const navigateToServices = () => {
    router.push('/tabs/services');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
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
          source={welcomeBackground}
          style={styles.background}
          resizeMode="cover"
        >
          <Image source={featuredBarberImage} style={styles.featuredBarber} resizeMode="cover" />
        </ImageBackground>

        {/* TRENDING HAIRCUTS SECTION */}
        <Text style={styles.sectionTitle}>Trending</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.trendingRow}
          contentContainerStyle={styles.trendingContent}
        >
          {trendingHaircuts.map((cut, index) => (
            <View key={`trending-${index}`} style={styles.trendingBox}>
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
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.servicesRow}
          contentContainerStyle={styles.servicesContent}
        >
          {services.map((service, index) => (
            <View key={`service-${index}`} style={styles.serviceBox}>
              <MaterialCommunityIcons 
                name={service.icon} 
                size={40} 
                color="#FFD700" 
                style={styles.serviceIcon} 
              />
              <Text style={styles.serviceText}>{service.name}</Text>
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
          contentContainerStyle={styles.salonsContent}
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

        {/* BOTTOM SPACER */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
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
  trendingContent: {
    paddingHorizontal: 8,
  },
  trendingBox: {
    alignItems: 'center',
    marginRight: 16,
  },
  trendingImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 6,
    borderWidth: 2,
    borderColor: '#FFD700',
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
  servicesContent: {
    paddingHorizontal: 8,
  },
  serviceBox: {
    alignItems: 'center',
    marginRight: 16,
    width: 80,
  },
  serviceIcon: {
    marginBottom: 8,
  },
  serviceText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  salonsContent: {
    paddingHorizontal: 8,
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
  bottomSpacer: {
    height: 100,
  },
});