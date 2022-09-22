import React, {useEffect, useState, useContext} from 'react';
import {Platform, Pressable, Alert, Modal, View} from 'react-native';
import {Address, Typography} from '../../components';
import {
  AddressInputSearch,
  KeyboardAvoidView,
  WaitingLocation,
  ModalView,
} from './styles';
import {requestLocationPermission, getCoords} from './utils';
import Loader from '../../assets/icons/Loader.svg';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {useUserLocationContext} from '../../context/LocationContext';

const LocationSearch = ({navigation}: any) => {
  const [showModal, setShowModal] = useState(true);
  const [aber, setAber] = useState({});
  const {userAddress, updateAddress} = useUserLocationContext();

  useEffect(() => {
    if (!Geocoder.isInit) {
      Geocoder.init('AIzaSyA1ejLz13IGfl5J4W7t5U5YYX86fY-_mgM');
    }
  }, []);

  useEffect(() => {
    const locationPermission = async () => {
      const granted = await requestLocationPermission();

      if (granted) {
        const coords = getCoords();
        console.log(coords);
        // const address = await Geocoder.from(coords.latitude, coords.longitude);
      }
    };

    locationPermission();
  }, []);

  const geoCode = async (lat: number, long: number) => {
    Geocoder.from(lat, long)
      .then(json => {
        const formattedAddress = json.results[0].formatted_address;
        console.log(formattedAddress);
        // setUserAddress((prevAddress: UserAddress) => ({
        //   ...prevAddress,
        //   address: formattedAddress,
        // }));
        // saveAddress({userAddress: formattedAddress});
        // setAber({formattedAddress});
      })
      .catch(error => console.warn(error));
  };

  

  return (
    <KeyboardAvoidView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Modal
        presentationStyle="overFullScreen"
        transparent={true}
        visible={showModal}>
        <ModalView>
          <Loader />
        </ModalView>
      </Modal>
      <Address />
      {/* text color #40AB9E when its setted*/}
      <AddressInputSearch placeholder="Escribe tu dirección" />

      <MapView
        style={{height: 250, width: '100%', top: '-5%', zIndex: 0}}
        initialRegion={{
          latitude: -33.459229,
          longitude: -70.645348,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <WaitingLocation>
        <Pressable onPress={async () => await requestLocationPermission()}>
          <Typography color="#c2c2c2" size={16}>
            Esperando tu ubicación...
          </Typography>
        </Pressable>
      </WaitingLocation>
    </KeyboardAvoidView>
  );
};

export default LocationSearch;
