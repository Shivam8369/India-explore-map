import { Location } from '../types/location';

export const locations: Location[] = [
  // Maharashtra
  {
    id: 1,
    name: 'Gateway of India',
    state: 'Maharashtra',
    description:
      "Historic arch monument built in 1924, symbolizing India's main port during the British Raj",
    coordinates: [18.922, 72.8347],
    type: 'monument',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
    yearEstablished: 1924,
  },
  {
    id: 2,
    name: 'Ajanta Caves',
    state: 'Maharashtra',
    description:
      'Ancient Buddhist cave monuments dating from 2nd century BCE to 650 CE',
    coordinates: [20.5519, 75.7033],
    type: 'heritage',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620558601903-9f2441730121',
    yearEstablished: -200,
    isUnesco: true,
  },
  {
    id: 3,
    name: 'Mumbai Port',
    state: 'Maharashtra',
    description: "India's second largest port by cargo traffic",
    coordinates: [18.9256, 72.8367],
    type: 'port',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1653299311171-31939b3b84b0',
  },

  // Rajasthan
  {
    id: 4,
    name: 'Hawa Mahal',
    state: 'Rajasthan',
    description:
      'Palace of Winds, built in 1799 as an extension to the Royal City Palace',
    coordinates: [26.9239, 75.8267],
    type: 'palace',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
    yearEstablished: 1799,
  },
  {
    id: 5,
    name: 'Mehrangarh Fort',
    state: 'Rajasthan',
    description: 'One of the largest forts in India, built around 1459',
    coordinates: [26.2982, 73.0188],
    type: 'fort',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7',
    yearEstablished: 1459,
  },
  {
    id: 6,
    name: 'Mount Abu',
    state: 'Rajasthan',
    description:
      'Only hill station in Rajasthan, home to the famous Dilwara Temples',
    coordinates: [24.5926, 72.7156],
    type: 'hillStation',
    rating: 4.5,
    image:
      'https://plus.unsplash.com/premium_photo-1697730481640-114d8546ef3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  // Kerala
  {
    id: 7,
    name: 'Kovalam Beach',
    state: 'Kerala',
    description:
      'Famous crescent-shaped beach known for its shallow waters and Ayurvedic centers',
    coordinates: [8.3989, 76.9733],
    type: 'beach',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1658933961784-dbc981dc93db',
  },
  {
    id: 8,
    name: 'Kochi Port',
    state: 'Kerala',
    description:
      'Major port on the Arabian Sea, known for Chinese fishing nets',
    coordinates: [9.9312, 76.2673],
    type: 'port',
    rating: 4.4,
    image:
      'https://plus.unsplash.com/premium_photo-1678131188332-693a503680ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  // Tamil Nadu
  {
    id: 9,
    name: 'Meenakshi Temple',
    state: 'Tamil Nadu',
    description: 'Historic Hindu temple dedicated to goddess Meenakshi',
    coordinates: [9.9195, 78.1193],
    type: 'temple',
    rating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    yearEstablished: 1636,
  },
  {
    id: 10,
    name: 'Mahabalipuram',
    state: 'Tamil Nadu',
    description:
      'Group of monuments carved out of rock in the 7th and 8th centuries',
    coordinates: [12.6269, 80.1927],
    type: 'heritage',
    rating: 4.7,
    image:
      'https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isUnesco: true,
  },

  // Karnataka
  {
    id: 11,
    name: 'Mysore Palace',
    state: 'Karnataka',
    description: 'Historical palace of the Wodeyar dynasty',
    coordinates: [12.3052, 76.6552],
    type: 'palace',
    rating: 4.8,
    image:
      'https://plus.unsplash.com/premium_photo-1697729434815-40ab4970ebc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    yearEstablished: 1912,
  },
  {
    id: 12,
    name: 'Hampi',
    state: 'Karnataka',
    description: 'UNESCO World Heritage Site with ruins of Vijayanagara Empire',
    coordinates: [15.335, 76.46],
    type: 'heritage',
    rating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isUnesco: true,
  },

  // West Bengal
  {
    id: 13,
    name: 'Victoria Memorial',
    state: 'West Bengal',
    description: "Large marble building dedicated to Queen Victoria's memory",
    coordinates: [22.5448, 88.3426],
    type: 'monument',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600080077823-a44592513861',
    yearEstablished: 1921,
  },
  {
    id: 14,
    name: 'Sundarbans',
    state: 'West Bengal',
    description: "World's largest mangrove forest and tiger reserve",
    coordinates: [21.9497, 88.9472],
    type: 'wildlife',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1616305375646-a3e95c5bdc82',
    isUnesco: true,
  },

  // Uttar Pradesh
  {
    id: 15,
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
    description: 'Iconic marble mausoleum built by Emperor Shah Jahan',
    coordinates: [27.1751, 78.0421],
    type: 'monument',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    yearEstablished: 1653,
    isUnesco: true,
  },
  {
    id: 16,
    name: 'Varanasi Ghats',
    state: 'Uttar Pradesh',
    description: 'Ancient spiritual site along the Ganges River',
    coordinates: [25.3176, 83.0064],
    type: 'heritage',
    rating: 4.8,
    image:
      'https://plus.unsplash.com/premium_photo-1697729634472-bb82561ef296?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
