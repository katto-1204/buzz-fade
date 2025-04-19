import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FFD700', // Yellow on active
        tabBarInactiveTintColor: '#FFFFFF', // White on inactive
        tabBarLabelPosition: 'below-icon',
        tabBarItemStyle: styles.tabItem,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'index':
              return <MaterialCommunityIcons name="home-variant" size={24} color={color} />;
            case 'services':
              return <MaterialCommunityIcons name="content-cut" size={24} color={color} />;
            case 'profile':
              return <MaterialCommunityIcons name="account-circle" size={24} color={color} />;
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
    backgroundColor: '#1e1f26', // Dark background
    borderRadius: 30,
    height: 70,
    paddingBottom: 10,
    paddingTop: 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
    textAlign: 'center',
  },
  tabItem: {
    justifyContent: 'center',
  },
});
