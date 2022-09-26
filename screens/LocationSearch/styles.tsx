import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
`;

interface AddressInputSearchProps {
  color?: string;
}

export const AddressInputWrapper = styled.View`
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
`;

export const AddressInputSearch = styled.TextInput<AddressInputSearchProps>`
  padding-right: 8px;
  width: 95%;
  ${({color}) => color && `color: ${color}`};
`;

export const WaitingLocation = styled.View`
  flex: 1;
  padding-top: 30%;
  align-items: center;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(173, 173, 173, 0.5);
`;

export const MapViewStyled = styled(MapView)`
  height: 250px;
  width: 100%;
  top: -3%;
  z-index: 0;
`;

export const CloseIconWrapper = styled.Pressable`
  margin-right: 24px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const AddressDetailContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const DetailInputWrapper = styled.View`
  padding-top: 13px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const DetailInput = styled.TextInput`
  border-width: 1px;
  border-color: #e8e8e8;
  border-radius: 16px;
  height: 122px;
  width: 100%;
`;

export const SaveAddressButton = styled.Pressable`
  margin-top: 36px;
  align-items: center;
  justify-content: center;
  background-color: #00baa4;
  height: 56px;
  border-radius: 8px;
`;
