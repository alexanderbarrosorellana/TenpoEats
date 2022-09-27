import React, {useEffect, useState, useRef, useCallback} from 'react';
import {Platform, Modal, View, Text} from 'react-native';
import {Address, Typography} from '../../components';
import {
  AddressInputSearch,
  KeyboardAvoidView,
  WaitingLocation,
  ModalView,
  MapViewStyled,
  AddressInputWrapper,
  CloseIconWrapper,
  AddressDetailContainer,
  DetailInput,
  SaveAddressButton,
  DetailInputWrapper,
} from './styles';
import {requestLocationPermission, useGetCoords} from './utils';
import Loader from '../../assets/icons/Loader.svg';
import Close from '../../assets/icons/Close.svg';
import Geocoder from 'react-native-geocoding';
import {useUserLocationContext} from '../../context/LocationContext';
import {Marker} from 'react-native-maps';
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import config from '../../config';

const LocationSearch = ({navigation}: any) => {
  const [showModal, setShowModal] = useState(false);
  const [localAddress, setLocalAddressValue] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [granted, setGranted] = useState(false);
  const [manual, setManual] = useState(false);

  const {userAddress: globalUserAddress, setUserAddress: setGlobalUserAddress} =
    useUserLocationContext();

  const [regionCoords, setRegionCoords] = useState({
    latitude: -33.459229,
    longitude: -70.645348,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (!Geocoder.isInit) {
      Geocoder.init(config.ALEX_GOOGLE_MAPS_API_KEY);
    }
  }, []);

  const coords = useGetCoords();

  const goToLocation = useCallback(() => {
    if (mapRef?.current) {
      mapRef.current.animateToRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    }
  }, [coords.latitude, coords.longitude]);

  useEffect(() => {
    setShowModal(true);
    const locationPermission = async () => {
      const isGranted = await requestLocationPermission();

      if (isGranted && coords.latitude && coords.longitude) {
        setGranted(true);
        const address = await Geocoder.from(coords.latitude, coords.longitude);
        const currentAddress = address.results[0].formatted_address;

        setLocalAddressValue(currentAddress);

        goToLocation();
        setRegionCoords(prev => ({
          ...prev,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }));
      }
    };

    locationPermission();
    setShowModal(false);
    return () => {};
  }, [
    coords.latitude,
    coords.longitude,
    setGlobalUserAddress,
    globalUserAddress,
    goToLocation,
    showModal,
  ]);

  const handleSaveAddress = () => {
    if (!localAddress) {
      return;
    }

    setGlobalUserAddress(prev => {
      return {
        ...prev,
        address: localAddress,
        latitude: coords.latitude,
        longitude: coords.longitude,
        details: addressDetails,
      };
    });

    navigation.navigate('Home');
  };

  const handleCloseIconPress = () => {
    setLocalAddressValue('');
    setManual(true);
  };

  const handlePressSuggestion = (details: GooglePlaceDetail | null) => {
    if (!details) {
      return;
    }

    setLocalAddressValue(details.formatted_address);
    setRegionCoords(prev => ({
      ...prev,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    }));
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

      <AddressInputWrapper>
        {granted && !manual ? (
          <>
            <AddressInputSearch
              placeholder="Escribe tu dirección"
              value={localAddress}
              color={globalUserAddress?.address ? '#40AB9E' : 'black'}
              onChangeText={setLocalAddressValue}
            />
            <CloseIconWrapper onPress={handleCloseIconPress}>
              <Close />
            </CloseIconWrapper>
          </>
        ) : (
          <>
            <GooglePlacesAutocomplete
              placeholder="Escribe tu dirección"
              query={{key: config.ALEX_GOOGLE_MAPS_API_KEY}}
              fetchDetails
              onPress={(_data, details = null) =>
                handlePressSuggestion(details)
              }
              listEmptyComponent={() => (
                <View style={{flex: 1}}>
                  <Text>No se encontraron resultados</Text>
                </View>
              )}
            />
            <SearchIcon />
          </>
        )}
      </AddressInputWrapper>

      {granted && !manual && (
        <MapViewStyled
          ref={mapRef}
          region={
            regionCoords && {
              ...regionCoords,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          }>
          {granted &&
            regionCoords.latitude &&
            regionCoords.longitude &&
            !manual && (
              <Marker
                identifier="currentLocation"
                coordinate={{
                  latitude: regionCoords.latitude,
                  longitude: regionCoords.longitude,
                }}
                image={require('../../assets/images/TenpoMarker.png')}
              />
            )}
        </MapViewStyled>
      )}

      {!granted && manual && (
        <WaitingLocation>
          <Typography color="#c2c2c2" size={16}>
            Esperando tu ubicación...
          </Typography>
        </WaitingLocation>
      )}

      {!showModal && (
        <AddressDetailContainer>
          <Typography size={16} fontWeight="bold" color="#333333">
            Agregar informacion de Entrega
          </Typography>
          <Typography size={14} color="#ADADAD">
            Depto, Oficina, Piso, Block.
          </Typography>
          <DetailInputWrapper>
            <DetailInput
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={addressDetails}
              onChangeText={setAddressDetails}
            />
          </DetailInputWrapper>
          <SaveAddressButton onPress={handleSaveAddress}>
            <Typography color="white" size={16}>
              AGREGAR DIRECCIÓN
            </Typography>
          </SaveAddressButton>
        </AddressDetailContainer>
      )}
    </KeyboardAvoidView>
  );
};

export default LocationSearch;
