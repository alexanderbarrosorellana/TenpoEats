import styled from 'styled-components/native';

interface AddressContainerProps {
  roundedTop?: boolean;
}

export const AddressContainer = styled.Pressable<AddressContainerProps>`
  background-color: #d4f9f5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  ${({roundedTop}) =>
    roundedTop &&
    `
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  `}
  z-index: 0;
`;
