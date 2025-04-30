import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useBookings } from '../context/BookingsContext';
import { useRouter } from 'expo-router';

export default function BookingModal({ visible, onClose, shop }) {
  const router = useRouter();
  const { addBooking } = useBookings();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const barbers = [
    { id: 1, name: 'John Cruz', rating: '4.9' },
    { id: 2, name: 'Mike Santos', rating: '4.8' },
    { id: 3, name: 'Rey Gomez', rating: '4.8' },
  ];

  const handleDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleConfirmBooking = () => {
    const newBooking = {
      id: Date.now().toString(),
      salon: shop.name,
      barber: selectedBarber.name,
      service: selectedService.name,
      price: selectedService.price,
      status: 'Confirmed',
      date: selectedDate
    };

    addBooking(newBooking);
    onClose();
    router.push('/tabs/bookings');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Book Appointment</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
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
                {shop.services.map((service, index) => (
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

            {/* Barber Selection */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select Barber</Text>
              <View style={styles.barberList}>
                {barbers.map((barber) => (
                  <TouchableOpacity
                    key={barber.id}
                    style={[
                      styles.barberItem,
                      selectedBarber === barber && styles.selectedBarber
                    ]}
                    onPress={() => setSelectedBarber(barber)}
                  >
                    <Text style={styles.barberName}>{barber.name}</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.rating}>{barber.rating}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity 
            style={[
              styles.bookButton,
              (!selectedTime || !selectedService || !selectedBarber) && styles.disabledButton
            ]}
            onPress={handleConfirmBooking}
            disabled={!selectedTime || !selectedService || !selectedBarber}
          >
            <Text style={styles.bookButtonText}>Confirm Booking</Text>
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
  barberList: {
    gap: 12,
  },
  barberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1e1f26',
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedBarber: {
    borderColor: '#FFD700',
  },
  barberName: {
    color: '#fff',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    color: '#FFD700',
    fontSize: 14,
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