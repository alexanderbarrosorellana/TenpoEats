export interface Restaurant {
  name: string;
  address: string;
  isOpen: boolean;
  description: string;
  restaurantName: string;
  distance: number;
}

export const restaurantsData: Restaurant[] = [
  {
    name: 'Melt Pizzas',
    address: 'Av. Francisco Bilbao 3975, La Reina',
    isOpen: true,
    description: 'Pizzeria - Snacks',
    restaurantName: 'Melt',
    distance: 1,
  },
  {
    name: 'Melt Bilbao',
    address: 'Americo Vespucio 51 - Local 128, Pajaritos, Maipú',
    isOpen: true,
    description: 'Pizzeria - Snacks',
    restaurantName: 'Melt',
    distance: 1,
  },
  {
    name: 'Melt Barrio Brasil',
    address: 'Compañia de Jesús 1909, Santiago',
    isOpen: false,
    description: 'Pizzeria - Snacks',
    restaurantName: 'Melt',
    distance: 5,
  },
  {
    name: 'Melt El Bosque',
    address: 'Callao 2912, Las Condes',
    isOpen: false,
    description: 'Pizzeria - Snacks',
    restaurantName: 'Melt',
    distance: 5,
  },
];
