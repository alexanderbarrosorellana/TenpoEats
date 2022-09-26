import React from 'react';
import {AddressContainer, AddressTextWrapper} from './styles';
import Typography from '../Typography';
import LocationIcon from '../../assets/icons/Location.svg';

const ADDRESS_COLOR = '#008F7E';

interface AddressProps {
  onPress?: () => void;
  roundedTop?: boolean;
  address?: string;
}

const Address = ({onPress, roundedTop = false, address}: AddressProps) => {
  return (
    <AddressContainer onPress={onPress} roundedTop={roundedTop}>
      <LocationIcon />
      <AddressTextWrapper>
        {address && (
          <Typography color={ADDRESS_COLOR} paddingLeft={10} size={12}>
            Enviaremos tus pedidos a
          </Typography>
        )}

        <Typography color={ADDRESS_COLOR} paddingLeft={10} numberOfLines={1}>
          {address ? address : 'Agregar dirección de entrega'}
        </Typography>
      </AddressTextWrapper>
    </AddressContainer>
  );
};

export default Address;
