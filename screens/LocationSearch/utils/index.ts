import Geolocation from '@react-native-community/geolocation';
import {useGetCoords} from './hooks';
import {PermissionsAndroid} from 'react-native';

const getCoords = () => {
  Geolocation.getCurrentPosition(
    success => {
      const {
        coords: {latitude, longitude},
      } = success;

      return {latitude, longitude};
    },
    error => {
      return {error: 'Error obteniendo ubicacion', detail: error.message};
    },
    {enableHighAccuracy: true},
  );
};

const requestLocationPermission = async () => {
  try {
    const checkLocationPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (checkLocationPermission) {
      return true;
    }

    const isGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title:
          '¿Permitir que "Tenpo" acceda a tu ubicación mientras usas la app?',
        message:
          'Tu ubicación actual se mostrará en el mapa y se usará para las indicaciones, los resultados de búsqueda y la hora aproximada de llegada',
        buttonNegative: 'No Permitir',
        buttonPositive: 'Permitir',
      },
    );

    if (isGranted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export {getCoords, useGetCoords, requestLocationPermission};
