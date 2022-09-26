import React from 'react';
import {Pressable} from 'react-native';
import {Typography} from '../../components';
import {HeaderContainer, HeaderTextWrapper, ImageWrapper} from './styles';
import CurrentLocation from '../../assets/images/CurrentLocation.png';
import LeftArrow from '../../assets/images/LeftArrow.png';

interface RestaurantHeaderProps {
  address?: string;
  onBackButtonPress?: () => void;
  onLocationButtonPress?: () => void;
}

const RestaurantHeader = ({
  address,
  onBackButtonPress,
  onLocationButtonPress,
}: RestaurantHeaderProps) => {
  return (
    <HeaderContainer>
      <Pressable onPress={onBackButtonPress}>
        <ImageWrapper source={LeftArrow} />
      </Pressable>
      <HeaderTextWrapper>
        <Typography fontWeight="bold" size={10} color="#008F7E">
          Tu ubicacion cercana
        </Typography>
        <Typography color="#008F7E" numberOfLines={1}>
          {address}
        </Typography>
      </HeaderTextWrapper>
      <Pressable onPress={onLocationButtonPress}>
        <ImageWrapper source={CurrentLocation} />
      </Pressable>
    </HeaderContainer>
  );
};

export default RestaurantHeader;
