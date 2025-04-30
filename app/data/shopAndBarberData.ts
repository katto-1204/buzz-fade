export const shopData = {
  alldayfadebarbershop: {
    id: '1',
    name: 'AllDayFade',
    rating: '4.9',
    address: 'Obrero St, Davao City',
    image: require('../assets/bshop.alldayfade.jpg'),
    hours: 'Monday - Sunday: 10:00 AM - 9:00 PM',
    services: [
      { name: 'Haircut', price: '₱150' },
      { name: 'Beard Trim', price: '₱100' },
      { name: 'Hair Color', price: '₱500' },
      { name: 'Hair Treatment', price: '₱300' },
    ],
    description: 'Premium barbershop offering modern cuts and traditional grooming services.'
  },
  barracksbarbershop: {
    id: '2',
    name: 'Barracks',
    rating: '4.8',
    address: 'Bajada St, Davao City',
    image: require('../assets/bshop.barracks.jpg'),
    hours: 'Monday - Saturday: 9:00 AM - 8:00 PM',
    services: [
      { name: 'Classic Cut', price: '₱180' },
      { name: 'Fade', price: '₱200' },
      { name: 'Shave', price: '₱120' },
      { name: 'Hair Spa', price: '₱350' },
    ],
    description: 'Military-themed barbershop known for precision cuts and exceptional service.'
  },
  atletikobarbershop: {
    id: '3',
    name: 'Atletiko Barbershop',
    rating: '4.8',
    address: '789 Sharp Rd, BGC',
    image: require('../assets/bshop.atletiko.jpg'),
    hours: 'Tuesday - Sunday: 10:00 AM - 8:00 PM',
    services: [
      { name: 'Sports Cut', price: '₱170' },
      { name: 'Beard Grooming', price: '₱130' },
      { name: 'Hair Design', price: '₱250' },
      { name: 'Kids Cut', price: '₱120' },
    ],
    description: 'Sports-themed barbershop catering to athletes and fitness enthusiasts.'
  },
  machomucho: {
    id: '4',
    name: 'Macho Mucho',
    rating: '4.7',
    address: 'Bolton St, Davao City',
    image: require('../assets/bshop.machomucho1.png'),
    hours: 'Monday - Sunday: 9:00 AM - 9:00 PM',
    services: [
      { name: 'Signature Cut', price: '₱160' },
      { name: 'Hot Towel Shave', price: '₱140' },
      { name: 'Hair Color', price: '₱450' },
      { name: 'Facial', price: '₱280' },
    ],
    description: 'Modern barbershop combining traditional techniques with contemporary styles.'
  },
  bossbarbershop: {
    id: '5',
    name: 'Boss Barbershop',
    rating: '4.6',
    address: 'Ecoland, Davao City',
    image: require('../assets/bshop.boss.jpg'),
    hours: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    services: [
      { name: 'Executive Cut', price: '₱200' },
      { name: 'Premium Shave', price: '₱150' },
      { name: 'Hair Treatment', price: '₱400' },
      { name: 'Styling', price: '₱180' },
    ],
    description: 'Executive-style barbershop providing premium grooming services for professionals.'
  },
  kingsmanbarbershop: {
    id: '6',
    name: 'Kingsman Barbershop',
    rating: '4.5',
    address: 'Ruby Street, Poblacion District, Davao City',
    image: require('../assets/bshop.kingsman.jpg'),
    hours: 'Monday - Sunday: 11:00 AM - 8:00 PM',
    services: [
      { name: 'Royal Cut', price: '₱190' },
      { name: 'Gentleman Shave', price: '₱160' },
      { name: 'Color & Style', price: '₱550' },
      { name: 'VIP Package', price: '₱800' },
    ],
    description: 'British-inspired barbershop offering sophisticated grooming experience.'
  }
};

export const barberData = {
  '1': {
    id: 'b1',
    name: 'John Cruz',
    shop: 'AllDayFade',
    rating: '4.9',
    shopImage: require('../assets/bshop.alldayfade.jpg'),
    image: require('../assets/barber1.png'),
    experience: '5+ years',
    specialties: ['Fade Haircuts', 'Beard Styling', 'Hair Design'],
    schedule: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    description: 'Specializing in modern fades and classic cuts with a contemporary twist.'
  },
  '2': {
    id: 'b2',
    name: 'Mike Santos',
    shop: 'Barracks',
    rating: '4.8',
    shopImage: require('../assets/bshop.barracks.jpg'),
    image: require('../assets/barber2.png'),
    experience: '7+ years',
    specialties: ['Military Cuts', 'Classic Styles', 'Precision Fades'],
    schedule: 'Tuesday - Sunday: 9:00 AM - 6:00 PM',
    description: 'Expert in military-style cuts and traditional barbering techniques.'
  },
  '3': {
    id: 'b3',
    name: 'Rey Gomez',
    shop: 'Atletiko',
    rating: '4.8',
    shopImage: require('../assets/bshop.atletiko.jpg'),
    image: require('../assets/barber3.png'),
    experience: '4+ years',
    specialties: ['Sports Cuts', 'Modern Styles', 'Hair Art'],
    schedule: 'Monday - Saturday: 11:00 AM - 8:00 PM',
    description: 'Passionate about creating stylish looks for active lifestyles.'
  }
};