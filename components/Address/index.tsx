import React from 'react';
import {AddressContainer} from './styles';
import Typography from '../Typography';
import LocationIcon from '../../assets/icons/Location.svg';

interface AddressProps {
  onPress?: () => void;
  roundedTop?: boolean;
}

const Address = ({onPress, roundedTop = false}: AddressProps) => (
  <AddressContainer onPress={onPress} roundedTop={roundedTop}>
    <LocationIcon />
    <Typography color="#008F7E" paddingLeft={10}>
      Agregar dirección de entrega
    </Typography>
  </AddressContainer>
);

export default Address;
