import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  DistanceTextContainer,
  RestaurantDistanceContainer,
  DistanceTextDetail,
  SliderWrapper,
  DistanceLimitWrapper,
  TrackMark,
  MapViewStyled,
  ApplyDistanceWrapper,
  COLOR,
} from './styles';
import {Typography} from '../../components';
import {Slider} from '@miblanchard/react-native-slider';
import {Circle, Marker} from 'react-native-maps';
import {useUserLocationContext} from '../../context/LocationContext';

interface RestaurantDistanceProp {
  slideValue: number;
  setSlideValue: (value: number | number[]) => void;
  onApplyDistancePress: () => void;
}

const RestaurantDistance = ({
  slideValue,
  setSlideValue,
  onApplyDistancePress,
}: RestaurantDistanceProp) => {
  const {userAddress} = useUserLocationContext();
  const mapRef = useRef(null);

  return (
    <RestaurantDistanceContainer>
      <DistanceTextContainer>
        <Typography paddingTop={8} fontWeight="bold" size={24}>
          Área de búsqueda
        </Typography>
        <DistanceTextDetail color="#ADADAD" alignSelf="center">
          Puedes modificar el radio de distancia para encontrar tu restaurante
        </DistanceTextDetail>
      </DistanceTextContainer>
      <SliderWrapper>
        <DistanceLimitWrapper>
          <Typography
            color={slideValue === 1 && COLOR.BRAND}
            fontWeight={slideValue === 1 && 'bold'}>
            1 KM
          </Typography>
          <Typography
            color={slideValue === 5 && COLOR.BRAND}
            fontWeight={slideValue === 5 && 'bold'}>
            5 KM
          </Typography>
        </DistanceLimitWrapper>
        <Slider
          value={slideValue}
          onValueChange={value => setSlideValue(value)}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbTintColor={COLOR.BRAND}
          renderTrackMarkComponent={() => <TrackMark />}
          trackMarks={[1, 2, 3, 4, 5]}
          minimumTrackTintColor={COLOR.BRAND}
          trackStyle={{backgroundColor: COLOR.BRAND}}
          thumbStyle={styles.thumb}
        />
      </SliderWrapper>
      {/* @ts-ignore */}
      <MapViewStyled
        ref={mapRef}
        region={{
          latitude: userAddress.latitude,
          longitude: userAddress.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}>
        <Marker
          coordinate={{
            latitude: userAddress.latitude,
            longitude: userAddress.longitude,
          }}
          image={require('../../assets/images/TenpoWhiteMarker.png')}
        />
        <Circle
          center={{
            latitude: userAddress.latitude,
            longitude: userAddress.longitude,
          }}
          radius={slideValue * 1000}
          strokeColor="#75E7D974"
          fillColor="#75E7D974"
        />
      </MapViewStyled>
      <ApplyDistanceWrapper onPress={onApplyDistancePress}>
        <Typography color="white" fontWeight="bold">
          APLICAR
        </Typography>
      </ApplyDistanceWrapper>
    </RestaurantDistanceContainer>
  );
};

const thumbSize = 24;
const styles = StyleSheet.create({
  thumb: {
    backgroundColor: '#D4F9F5',
    borderColor: COLOR.BRAND,
    borderRadius: thumbSize / 2,
    borderWidth: 3,
    height: thumbSize,
    width: thumbSize,
  },
});

export default RestaurantDistance;
