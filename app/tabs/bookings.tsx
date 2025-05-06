import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useBookings } from '../context/BookingsContext';

export default function Bookings() {
  const { bookings, cancelBooking } = useBookings(); // Assuming `cancelBooking` is provided by the context
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCancelPress = (booking) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  const confirmCancellation = () => {
    if (selectedBooking) {
      cancelBooking(selectedBooking.id); // Call the cancellation function
    }
    setModalVisible(false);
    setSelectedBooking(null);
  };

  if (bookings.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="calendar-outline" size={64} color="#FFD700" />
        <Text style={styles.emptyText}>No bookings yet</Text>
        <Text style={styles.emptySubtext}>
          Your confirmed appointments will appear here
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {bookings.map((booking) => (
        <View key={booking.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.salonName}>{booking.salon}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{booking.status}</Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <Ionicons name="person" size={24} color="#FFD700" />
            <View style={styles.cardContent}>
              <Text style={styles.label}>Barber</Text>
              <Text style={styles.text}>{booking.barber}</Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <Ionicons name="cut" size={24} color="#FFD700" />
            <View style={styles.cardContent}>
              <Text style={styles.label}>Service</Text>
              <Text style={styles.text}>{booking.service}</Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <Ionicons name="calendar" size={24} color="#FFD700" />
            <View style={styles.cardContent}>
              <Text style={styles.label}>Schedule</Text>
              <Text style={styles.text}>
                {booking.date.toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <Ionicons name="cash" size={24} color="#FFD700" />
            <View style={styles.cardContent}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.text}>{booking.price}</Text>
            </View>
          </View>

          <Pressable
            style={[styles.button, styles.cancelButton]}
            onPress={() => handleCancelPress(booking)}
          >
            <Text style={styles.buttonText}>Cancel Booking</Text>
          </Pressable>
        </View>
      ))}

      {/* Cancel Booking Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Booking</Text>
            <Text style={styles.text}>
              Are you sure you want to cancel your booking at{' '}
              <Text style={styles.editableText}>{selectedBooking?.salon}</Text>?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalConfirm}
                onPress={confirmCancellation}
              >
                <Text style={styles.modalText}>Yes, Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.modalCancel}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalText}>No, Go Back</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d0e12',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  editableText: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 30,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  rescheduleButton: {
    backgroundColor: '#2196F3',
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#1e1f26',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    color: '#fff',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalConfirm: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  modalCancel: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#0d0e12',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptySubtext: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  salonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
