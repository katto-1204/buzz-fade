import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingConfirmation({ visible, onClose, booking, onConfirm }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Booking Summary</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            <View style={styles.summaryContainer}>
              <View style={styles.summaryItem}>
                <Ionicons name="business" size={24} color="#FFD700" />
                <View style={styles.summaryText}>
                  <Text style={styles.label}>Barbershop</Text>
                  <Text style={styles.value}>{booking.shop}</Text>
                </View>
              </View>

              <View style={styles.summaryItem}>
                <Ionicons name="person" size={24} color="#FFD700" />
                <View style={styles.summaryText}>
                  <Text style={styles.label}>Barber</Text>
                  <Text style={styles.value}>{booking.barber.name}</Text>
                </View>
              </View>

              <View style={styles.summaryItem}>
                <Ionicons name="calendar" size={24} color="#FFD700" />
                <View style={styles.summaryText}>
                  <Text style={styles.label}>Date</Text>
                  <Text style={styles.value}>{formatDate(booking.date)}</Text>
                </View>
              </View>

              <View style={styles.summaryItem}>
                <Ionicons name="time" size={24} color="#FFD700" />
                <View style={styles.summaryText}>
                  <Text style={styles.label}>Time</Text>
                  <Text style={styles.value}>{booking.time}</Text>
                </View>
              </View>

              <View style={styles.summaryItem}>
                <Ionicons name="cut" size={24} color="#FFD700" />
                <View style={styles.summaryText}>
                  <Text style={styles.label}>Service</Text>
                  <Text style={styles.value}>{booking.service.name}</Text>
                </View>
              </View>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Total Amount</Text>
              <Text style={styles.price}>{booking.service.price}</Text>
            </View>

            <View style={styles.paymentMethods}>
              <Text style={styles.paymentTitle}>Payment Method</Text>
              <TouchableOpacity style={styles.paymentOption}>
                <Ionicons name="cash" size={24} color="#FFD700" />
                <Text style={styles.paymentText}>Cash</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentOption}>
                <Ionicons name="card" size={24} color="#FFD700" />
                <Text style={styles.paymentText}>Credit/Debit Card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentOption}>
                <Ionicons name="phone-portrait" size={24} color="#FFD700" />
                <Text style={styles.paymentText}>GCash</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirm & Pay</Text>
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
    height: '80%',
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
  summaryContainer: {
    gap: 20,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  summaryText: {
    flex: 1,
  },
  label: {
    color: '#aaa',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
  priceContainer: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#1e1f26',
    borderRadius: 12,
  },
  priceLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  price: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  paymentMethods: {
    marginTop: 32,
  },
  paymentTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#1e1f26',
    borderRadius: 12,
    marginBottom: 12,
  },
  paymentText: {
    color: '#fff',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});