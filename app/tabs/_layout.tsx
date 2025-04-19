import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FFD700',  // Active tab icon color
        tabBarInactiveTintColor: '#FFFFFF',  // Inactive tab icon color
        tabBarLabelPosition: 'below-icon',
        tabBarItemStyle: styles.tabItem,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'index':
              return (
                <MaterialCommunityIcons
                  name="home-variant"
                  size={28}  // Adjusted size
                  color={color}
                />
              );
            case 'services':
              return (
                <MaterialCommunityIcons
                  name="content-cut"
                  size={28}  // Adjusted size
                  color={color}
                />
              );
            case 'bookings':
              return (
                <MaterialCommunityIcons
                  name="calendar-plus"  // Updated icon
                  size={28}  // Adjusted size
                  color={color}
                />
              );
            case 'profile':
              return (
                <MaterialCommunityIcons
                  name="account-circle"
                  size={28}  // Adjusted size
                  color={color}
                />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          headerShown: false,
          tabBarLabel: 'Services',
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          headerShown: false,
          tabBarLabel: 'Bookings',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#1e1f26',  // Dark background for the tab bar
    borderRadius: 30,
    height: 70,
    paddingBottom: 10,
    paddingTop: 5,
    justifyContent: 'center',  // Center content horizontally
    alignItems: 'center',  // Ensure items are aligned horizontally in the center
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,  // Adjust label position
    textAlign: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',  // Align items in the center
    marginHorizontal: 15,  // Reduced margin to bring icons closer
  },
});
