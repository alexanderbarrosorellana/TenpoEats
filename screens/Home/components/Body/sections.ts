import McDonalds from '../../../../assets/images/McDonalds.png';
import Melt from '../../../../assets/images/Melt.png';
import Yokono from '../../../../assets/images/Yokono.png';
import PapaJhons from '../../../../assets/images/PapaJhons.png';
import Burgers from '../../../../assets/images/Burgers.png';
import Italiana from '../../../../assets/images/Italiana.png';
import Pizza from '../../../../assets/images/Pizza.png';
import McDonnaldsImg from '../../../../assets/images/McDonnaldsImg.png';
import MeltImage from '../../../../assets/images/MeltImage.png';
import McDonnaldsSmall from '../../../../assets/images/McDonnaldsSmall.png';
import MeltSmall from '../../../../assets/images/MeltSmall.png';

export const SECTIONS = [
  {
    title: 'RESTAURANTES',
    data: [
      {
        name: 'McDonalds',
        discount: '50%',
        stars: 3.5,
        deliveryTime: '10-50 min',
        image: McDonalds,
      },
      {
        name: 'MELT pizzas',
        discount: '30%',
        stars: 4.5,
        deliveryTime: '10-60 min',
        image: Melt,
      },
      {
        name: 'YOKONO',
        discount: '20%',
        stars: 3.5,
        deliveryTime: '10-50 min',
        image: Yokono,
      },
      {
        name: "Papa Jhon's",
        discount: '10%',
        stars: 3.5,
        deliveryTime: '10-50 min',
        image: PapaJhons,
      },
    ],
  },
  {
    title: 'CATEGORÍAS',
    data: [
      {
        name: 'HAMBURGUESAS',
        image: Burgers,
      },
      {
        name: 'ITALIANA',
        image: Italiana,
      },
      {
        name: 'PIZZAS',
        image: Pizza,
      },
    ],
  },
  {
    title: 'TUS FAVORITOS',
    data: [
      {
        name: 'Combo Hamburguesa Bigmac',
        stars: 3.5,
        restaurantName: 'McDonalds',
        deliveryTime: '10-50 min.',
        image: McDonnaldsImg,
        restaurantImage: McDonnaldsSmall,
      },
      {
        name: 'Pizza Mediana 3 Ingredientes',
        stars: 3.5,
        restaurantName: 'MELT Pizzas',
        deliveryTime: '10-50 min.',
        image: MeltImage,
        restaurantImage: MeltSmall,
      },
    ],
  },
];
