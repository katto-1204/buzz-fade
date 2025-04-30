import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useBookings } from '../context/BookingsContext';
import { useRouter } from 'expo-router';

export default function BarberBookingModal({ visible, onClose, barber, services }) {
  const router = useRouter();
  const { addBooking } = useBookings();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleConfirmBooking = () => {
    if (!barber || !selectedService || !selectedTime) return;

    const newBooking = {
      id: Date.now().toString(),
      salon: barber.shopName,
      barber: barber.name,
      service: selectedService.name,
      price: selectedService.price,
      status: 'Confirmed',
      date: selectedDate,
      time: selectedTime,
      isDirectBarberBooking: true
    };

    addBooking(newBooking);
    onClose();
    router.push('/tabs/bookings');
  };

  if (!barber) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Book with {barber.name}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            <View style={styles.barberInfoSection}>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={styles.ratingText}>{barber.rating}</Text>
              </View>
              <Text style={styles.shopName}>{barber.shopName}</Text>
            </View>

            {/* Date Selection */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select Date</Text>
              <TouchableOpacity 
                style={styles.dateButton}
                onPress={() => setShowDatePicker(true)}
              >
                <Ionicons name="calendar" size={24} color="#FFD700" />
                <Text style={styles.dateText}>
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={handleDateChange}
                  minimumDate={new Date()}
                />
              )}
            </View>

            {/* Time Selection */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select Time</Text>
              <View style={styles.timeGrid}>
                {timeSlots.map((time) => (
                  <TouchableOpacity
                    key={time}
                    style={[
                      styles.timeSlot,
                      selectedTime === time && styles.selectedTimeSlot
                    ]}
                    onPress={() => setSelectedTime(time)}
                  >
                    <Text style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedTimeText
                    ]}>{time}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Service Selection */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select Service</Text>
              <View style={styles.serviceList}>
                {services.map((service, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.serviceItem,
                      selectedService === service && styles.selectedService
                    ]}
                    onPress={() => setSelectedService(service)}
                  >
                    <Text style={styles.serviceName}>{service.name}</Text>
                    <Text style={styles.servicePrice}>{service.price}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity 
            style={[
              styles.bookButton,
              (!selectedTime || !selectedService) && styles.disabledButton
            ]}
            onPress={handleConfirmBooking}
            disabled={!selectedTime || !selectedService}
          >
            <Text style={styles.bookButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#0d0e12',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 30,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e1f26',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  barberInfoSection: {
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    gap: 12,
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#1e1f26',
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedTimeSlot: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
  },
  selectedTimeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  serviceList: {
    gap: 12,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1e1f26',
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedService: {
    borderColor: '#FFD700',
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    color: '#FFD700',
    fontSize: 18,
    marginLeft: 8,
  },
  shopName: {
    color: '#aaa',
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#FFD700',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#666',
  },
  bookButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});