import { Stack } from 'expo-router';
import { BookingsProvider } from './context/BookingsContext';

export default function Layout() {
  return (
    <BookingsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {/* ...existing stack screens... */}
      </Stack>
    </BookingsProvider>
  );
}