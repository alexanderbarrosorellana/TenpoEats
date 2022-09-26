import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export type Coords = {
  error?: string;
  latitude?: number;
  longitude?: number;
};

export const useGetCoords = (): Coords => {
  const [coords, setCoords] = useState<Coords>({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      success => {
        const {
          coords: {latitude, longitude},
        } = success;

        setCoords(prev => ({...prev, latitude, longitude}));
      },
      error => {
        setCoords(() => ({error: error.message}));
      },
      {enableHighAccuracy: true},
    );

    return () => {};
  }, []);

  return coords.error ? {error: coords.error} : coords;
};
