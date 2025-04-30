import React, { createContext, useContext, useState } from 'react';

type Booking = {
  id: string;
  salon: string;
  barber: string;
  service: string;
  price: string;
  status: string;
  date: Date;
};

type BookingsContextType = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  cancelBooking: (id: string) => void;
  updateBooking: (id: string, updatedBooking: Partial<Booking>) => void;
};

const BookingsContext = createContext<BookingsContextType | undefined>(undefined);

export function BookingsProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  const cancelBooking = (id: string) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const updateBooking = (id: string, updatedBooking: Partial<Booking>) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, ...updatedBooking } : booking
    ));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, cancelBooking, updateBooking }}>
      {children}
    </BookingsContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingsContext);
  if (context === undefined) {
    throw new Error('useBookings must be used within a BookingsProvider');
  }
  return context;
}