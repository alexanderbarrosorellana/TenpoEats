import styled from 'styled-components/native';

export const BodyContainer = styled.View`
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 1;
  bottom: 15px;
  padding-top: 24px;
  padding-left: 16px;
  flex: 1;
`;

export const RestaurantItemContainer = styled.View`
  padding-right: 8px;
  padding-top: 8px;
`;

export const DiscountContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Discount = styled.View`
  top: -5%;
  left: 5%;
  border-radius: 25px;
  width: 35px;
  height: 35px;
  background-color: #00baa4;
  align-items: center;
  justify-content: center;
`;

export const RestaurantTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryContainer = styled.View`
  width: 150px;
  height: 70px;
`;

interface ImageBackroundStyledProps {
  height: string;
  width?: string;
}
export const ImageBackroundStyled = styled.ImageBackground<ImageBackroundStyledProps>`
  height: ${({height}) => height};
  width: ${({width}) => (width ? width : 'auto')};
  justify-content: center;
`;

export const FavoriteContainer = styled.View`
  width: 200px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-bottom: 30px;
  margin-right: 8px;
  elevation: 3;
`;

export const FavoriteImageWrapper = styled.View`
  justify-content: flex-start;
  height: 100%;
  padding: 8px;
`;
