import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';  // Import both Ionicons and Feather icons

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#000000',  // Black for active tab icon and label
        tabBarInactiveTintColor: '#000000',  // Black for inactive tab icon and label
        tabBarLabelPosition: 'below-icon',  // Ensures label is under the icon
        tabBarItemStyle: styles.tabItem,
        tabBarLabelStyle: styles.tabLabel, // Ensure label is styled properly
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="#000000" />  // Home icon with black color
          ),
          tabBarLabel: 'Home',  // Label under the icon
        }} 
      />
      <Tabs.Screen 
        name="services" 
        options={{
          title: 'Services',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="scissors" size={24} color="#000000" />  // Services (cut) icon with black color
          ),
          tabBarLabel: 'Services',  // Label under the icon
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color="#000000" />  // Profile icon with black color
          ),
          tabBarLabel: 'Profile',  // Label under the icon
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFD700',  // Yellow background for the tab bar
    height: 70,  // Adjust tab bar height for better spacing
    paddingBottom: 5,  // Less padding at the bottom
  },
  tabLabel: {
    color: '#000000',  // Set label text color to black
    fontSize: 12,  // Smaller font size for labels
    fontWeight: 'bold',
    marginTop: -2,  // Move the label upwards closer to the icon
    textAlign: 'center',  // Center align the label
  },
  tabItem: {
    marginHorizontal: 12,  // Space between tabs
    padding: 6,  // Padding inside each tab item
    justifyContent: 'center',  // Align items in the center vertically
  },
});
