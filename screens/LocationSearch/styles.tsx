import styled from 'styled-components/native';

export const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
`;

export const AddressInputSearch = styled.TextInput`
  elevation: 1;
  border-width: 1px;
  border-color: #f1f1f1;
  border-radius: 25px;
  top: -3%;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 1;
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
