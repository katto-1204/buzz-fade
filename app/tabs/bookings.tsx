import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, TextInput } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function Bookings() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // Default to false for editing
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // Show/hide the date picker
  const [showModal, setShowModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const handleDateChange = (event: DateTimePickerEvent, selected?: Date) => {
    if (selected) {
      setSelectedDate(selected);
    }
    setShowDatePicker(false); // Hide the date picker after selection
  };

  const confirmBooking = () => {
    setBookingConfirmed(true); // Confirm the booking
  };

  const cancelBooking = () => {
    setShowModal(true); // Show the cancellation modal
  };

  const handleConfirmCancel = () => {
    setBookingConfirmed(false); // Reset to allow editing
    setCancelReason('');
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookings</Text>

      <Text style={styles.label}>Selected Salon:</Text>
      <Text style={styles.text}>AllDayFade</Text>

      <Text style={styles.label}>Chosen Barber:</Text>
      <Text style={styles.text}>Jay Fadez</Text>

      <Text style={styles.label}>Service:</Text>
      <Text style={styles.text}>Haircut</Text>

      <Text style={styles.label}>Schedule:</Text>
      <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>
          {selectedDate.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
          textColor="#fff" // Ensures text matches the dark theme
        />
      )}

      <Pressable
        style={[styles.button, bookingConfirmed ? styles.cancelButton : styles.confirmButton]}
        onPress={bookingConfirmed ? cancelBooking : confirmBooking}
      >
        <Text style={styles.buttonText}>
          {bookingConfirmed ? 'Cancel Booking' : 'Confirm Booking'}
        </Text>
      </Pressable>

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure to cancel?</Text>
            <TextInput
              style={styles.input}
              placeholder="State your reason"
              placeholderTextColor="#aaa"
              value={cancelReason}
              onChangeText={setCancelReason}
            />
            <View style={styles.modalButtons}>
              <Pressable onPress={handleConfirmCancel} style={styles.modalConfirm}>
                <Text style={styles.modalText}>Yes</Text>
              </Pressable>
              <Pressable onPress={() => setShowModal(false)} style={styles.modalCancel}>
                <Text style={styles.modalText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d0e12', // Dark background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700', // Gold color for labels
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: '#fff', // White text
  },
  datePickerButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1e1f26',
    borderRadius: 8,
    alignItems: 'center',
  },
  datePickerText: {
    color: '#FFD700', // Gold text for the selected date
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#4CAF50', // Green for confirm
  },
  cancelButton: {
    backgroundColor: '#FF3B30', // Red for cancel
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#1e1f26', // Dark modal background
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700', // Gold border
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    color: '#fff', // White text
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
});
