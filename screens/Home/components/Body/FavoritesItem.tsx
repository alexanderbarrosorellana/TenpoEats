import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {Typography} from '../../../../components';
import {
  FavoriteContainer,
  ImageBackroundStyled,
  FavoriteImageWrapper,
} from './styles';

interface Favorites {
  favorite: {
    name: string;
    stars: number;
    restaurantName: string;
    deliveryTime: string;
    image: ImageSourcePropType;
    restaurantImage: ImageSourcePropType;
  };
}
const FavoritesItem = ({favorite}: Favorites) => {
  return (
    <FavoriteContainer>
      <ImageBackroundStyled
        height="100px"
        width="200px"
        source={favorite.image}
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{
          resizeMode: 'stretch',
        }}>
        <FavoriteImageWrapper>
          <Image source={favorite.restaurantImage} />
        </FavoriteImageWrapper>
      </ImageBackroundStyled>
      <View>
        <Typography size={10} color="black" paddingLeft={8}>
          {favorite.name}
        </Typography>
      </View>
    </FavoriteContainer>
  );
};

export default FavoritesItem;
