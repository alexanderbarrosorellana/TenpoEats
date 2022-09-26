import styled from 'styled-components/native';
import {Typography} from '../../components';
import MapView from 'react-native-maps';

export const COLOR = {
  BRAND: '#008f7e',
  BRAND_DISABLED: 'rgba(0, 143, 126, 0.3)',
};

export const HeaderContainer = styled.View`
  background-color: #d4f9f5;
  flex-direction: row;
  height: 170px;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const HeaderTextWrapper = styled.View`
  align-items: flex-start;
  width: 85%;
  height: 40px;
`;

const ICON_SIZE = '32px';
export const ImageWrapper = styled.Image`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
`;

export const SearchInputWrapper = styled.View`
  elevation: 1;
  border-width: 1px;
  border-color: #f1f1f1;
  border-radius: 25px;
  top: -3%;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  height: 56px;
  justify-content: space-between;
`;

export const RestaurantSearchWrapper = styled.View`
  height: 100%;
  background-color: white;
`;

interface RestaurantFiltersProps {
  showFilters: boolean;
}

export const RestaurantFilters = styled.View<RestaurantFiltersProps>`
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  height: 80px;
  top: -5%;
  ${({showFilters}) => showFilters && 'background-color: #f2f2f2'};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface FilterProps {
  enabled?: boolean;
}
export const Filter = styled.Pressable<FilterProps>`
  border-width: 1px;
  border-color: ${({enabled = true}) =>
    enabled ? COLOR.BRAND : COLOR.BRAND_DISABLED};
  border-radius: 4px;
  height: 32px;
  width: 160px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const RestaurantBodyContainer = styled.View`
  flex: 1;
`;

export const EmptyRestaurantContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 120px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const EmptyRestaurantMessage = styled(Typography)`
  text-align: center;
`;

export const ScrollViewRestaurant = styled.ScrollView`
  margin-bottom: 16px;
`;

export const RestaurantItem = styled.Pressable`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  flex-direction: row;
  align-items: center;
`;

const RESTAURANT_IMAGE_SIZE = '40px';
export const RestaurantItemImage = styled.Image`
  width: ${RESTAURANT_IMAGE_SIZE};
  height: ${RESTAURANT_IMAGE_SIZE};
`;

export const RestaurantTextWrapper = styled.View`
  padding-left: 16px;
`;

export const RestaurantDistanceContainer = styled.View`
  flex: 1;
  background-color: #f1f1f1;
`;

export const DistanceTextContainer = styled.View`
  background-color: white;
  height: 150px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const DistanceTextDetail = styled(Typography)`
  width: 280px;
  text-align: center;
`;

export const DistanceLimitWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SliderWrapper = styled.View`
  padding: 16px;
  height: 100px;
  justify-content: center;
`;

const TRACK_MARK_SIZE = 14;
export const TrackMark = styled.View`
  background-color: ${COLOR.BRAND};
  border-radius: ${TRACK_MARK_SIZE / 2}px;
  height: ${TRACK_MARK_SIZE}px;
  width: ${TRACK_MARK_SIZE}px;
`;

export const MapViewStyled = styled(MapView)`
  height: 250px;
  width: 100%;
`;

export const ApplyDistanceWrapper = styled.Pressable`
  bottom: 50px;
  width: 320px;
  align-items: center;
  height: 58px;
  align-self: center;
  justify-content: center;
  position: absolute;
  background-color: #00baa4;
  border-radius: 4px;
`;

export const RestaurantDetail = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
  justify-content: space-around;
`;

export const RestaurantDetailTextWrapper = styled.View`
  align-items: center;
`;
