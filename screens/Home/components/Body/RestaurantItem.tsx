import React from 'react';
import {
  RestaurantItemContainer,
  Discount,
  RestaurantTextContainer,
  ImageBackroundStyled,
  DiscountContainer,
} from './styles';
import {Typography} from '../../../../components';
import StarIcon from '../../../../assets/icons/Star.svg';

interface Restaurant {
  restaurant: {
    name: string;
    discount: string;
    stars: number;
    deliveryTime: string;
    image: JSX.Element;
  };
}

const RestaurantItem = ({restaurant}: Restaurant) => {
  return (
    <RestaurantItemContainer>
      <ImageBackroundStyled
        height="100px"
        width="100px"
        source={restaurant.image}>
        {restaurant.discount && (
          <DiscountContainer>
            <Discount>
              <Typography size={10} color="white">
                {restaurant.discount}
              </Typography>
              <Typography size={10} color="white">
                DCTO
              </Typography>
            </Discount>
          </DiscountContainer>
        )}
      </ImageBackroundStyled>
      <Typography alignSelf="center">{restaurant.name}</Typography>
      <RestaurantTextContainer>
        <StarIcon />
        <Typography paddingLeft={4}>{restaurant.stars} </Typography>
        <Typography> {restaurant.deliveryTime}</Typography>
      </RestaurantTextContainer>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;
