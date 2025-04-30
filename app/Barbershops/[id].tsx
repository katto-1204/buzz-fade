import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { shopData } from '../data/shopAndBarberData';
import BookingModal from '../components/BookingModal';

const { width } = Dimensions.get('window');

export default function BarbershopProfile() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isBookingVisible, setIsBookingVisible] = useState(false);

  const shop = shopData[id as string];

  const handleBooking = (details) => {
    console.log('Booking details:', details);
    // Add your booking logic here
  };

  if (!shop) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Shop not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Image */}
        <View style={styles.headerContainer}>
          <Image source={shop.image} style={styles.coverImage} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Shop Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.rating}>{shop.rating}</Text>
          </View>
          <View style={styles.addressRow}>
            <Ionicons name="location" size={18} color="#aaa" />
            <Text style={styles.address}>{shop.address}</Text>
          </View>
          {/* Hours */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Business Hours</Text>
            <Text style={styles.sectionText}>{shop.hours}</Text>
          </View>
          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Us</Text>
            <Text style={styles.sectionText}>{shop.description}</Text>
          </View>
          {/* Services */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Services</Text>
            {shop.services.map((service, index) => (
              <View key={index} style={styles.serviceRow}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            ))}
          </View>
          {/* Book Button */}
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => setIsBookingVisible(true)}
          >
            <Text style={styles.bookButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BookingModal
        visible={isBookingVisible}
        onClose={() => setIsBookingVisible(false)}
        shop={shop}
        onBook={handleBooking}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    height: 250,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 20,
    marginTop: -30,
    backgroundColor: '#0d0e12',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  shopName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    color: '#FFD700',
    fontSize: 16,
    marginLeft: 5,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  address: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 5,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  sectionText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1e1f26',
  },
  serviceName: {
    color: '#fff',
    fontSize: 16,
  },
  servicePrice: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  bookButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});