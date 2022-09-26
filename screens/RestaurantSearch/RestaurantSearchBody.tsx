import React, {useRef, useState} from 'react';
import {
  COLOR,
  EmptyRestaurantContainer,
  RestaurantBodyContainer,
  EmptyRestaurantMessage,
  ScrollViewRestaurant,
  RestaurantItem,
  RestaurantItemImage,
  RestaurantTextWrapper,
  RestaurantDetail,
  RestaurantDetailTextWrapper,
} from './styles';
import {Typography} from '../../components';
import {Restaurant} from './restaurants/restaurantData';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import MeltImage from '../../assets/images/Melt.png';
import {Image} from 'react-native';

interface RestaurantSearchBodyProps {
  restaurants?: Restaurant[];
}

const RestaurantSearchBody = ({restaurants}: RestaurantSearchBodyProps) => {
  const bottomSheetModalRef = useRef();
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant>({});

  const handlePressRestaurant = (restaurant: Restaurant) => {
    setCurrentRestaurant(restaurant);
    bottomSheetModalRef.current.show();
  };

  return (
    <RestaurantBodyContainer>
      {restaurants && restaurants.length ? (
        <ScrollViewRestaurant>
          {restaurants.map(restaurant => (
            <RestaurantItem
              key={restaurant.address}
              onPress={() => handlePressRestaurant(restaurant)}>
              <RestaurantItemImage source={MeltImage} />
              <RestaurantTextWrapper>
                <Typography color="#333333">{restaurant.name}</Typography>
                <Typography size={12} color="#ADADAD">
                  {restaurant.address}
                </Typography>
              </RestaurantTextWrapper>
            </RestaurantItem>
          ))}
          <BottomSheet ref={bottomSheetModalRef} height={600}>
            <RestaurantDetail>
              <RestaurantDetailTextWrapper>
                <Image source={MeltImage} />
                <Typography fontWeight="bold" size={16}>
                  {currentRestaurant?.name}
                </Typography>
                <Typography size={12}>
                  {currentRestaurant?.description}
                </Typography>
              </RestaurantDetailTextWrapper>
              <Typography>Detalle de restaurante</Typography>
            </RestaurantDetail>
          </BottomSheet>
        </ScrollViewRestaurant>
      ) : (
        <EmptyRestaurantContainer>
          <Typography color={COLOR.BRAND}>Lo sentimos</Typography>
          <EmptyRestaurantMessage color="#ADADAD" size={18}>
            En este momento no hay locales abiertos en el área de búsqueda
            determinada.
          </EmptyRestaurantMessage>
        </EmptyRestaurantContainer>
      )}
    </RestaurantBodyContainer>
  );
};

export default RestaurantSearchBody;
