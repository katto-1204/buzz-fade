import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();

  // State for editable fields
  const [name, setName] = useState('Alana Gundaya');
  const [email, setEmail] = useState('Alana.Gundaya@gmail.com');
  const [isEditing, setIsEditing] = useState(false);

  const menuItems = [
    {
      title: 'My Appointments',
      icon: 'calendar',
      count: '2 Upcoming',
      route: '/profile/appointments',
    },
    {
      title: 'Booking History',
      icon: 'time',
      count: '12 Past Bookings',
      route: '/profile/history',
    },
    {
      title: 'Favorite Barbers',
      icon: 'heart',
      count: '3 Favorites',
      route: '/favorites',
    },
    {
      title: 'Payment Methods',
      icon: 'card',
      count: '2 Cards Saved',
      route: '/payments',
    },
    {
      title: 'Notifications',
      icon: 'notifications',
      count: '4 New',
      route: '/notifications',
    },
    {
      title: 'Settings',
      icon: 'settings',
      route: '/settings',
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to persist the changes, e.g., API call
    console.log('Saved:', { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/default-avatar.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => router.push('/profile/edit')}
            >
              <Ionicons name="camera" size={20} color="#FFD700" />
            </TouchableOpacity>
          </View>
          {isEditing ? (
            <>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#666"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.email}>{email}</Text>
              <TouchableOpacity
                style={styles.editProfileButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => router.push(item.route)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={24} color="#FFD700" />
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <View style={styles.menuItemRight}>
                {item.count && (
                  <Text style={styles.menuItemCount}>{item.count}</Text>
                )}
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutButton, { marginTop: 20 }]}
          onPress={() => router.push('/login')} // Navigate to login page
        >
          <Ionicons name="log-out" size={24} color="#FF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
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
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#1e1f26',
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 16,
  },
  editProfileButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  editProfileText: {
    color: '#FFD700',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#1e1f26',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e1f26',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemCount: {
    color: '#aaa',
    fontSize: 14,
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#1e1f26',
  },
  logoutText: {
    color: '#FF4444',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#1e1f26',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFD700',
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  saveButtonText: {
    color: '#0d0e12',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

