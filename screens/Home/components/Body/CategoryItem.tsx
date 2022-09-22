import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Typography} from '../../../../components';
import {CategoryContainer, ImageBackroundStyled} from './styles';

interface Category {
  category: {
    name: string;
    image: ImageSourcePropType;
  };
}

const CategoryItem = ({category}: Category) => (
  <CategoryContainer>
    <ImageBackroundStyled
      source={category.image}
      height="100%"
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{resizeMode: 'stretch'}}>
      <Typography color="white" fontWeight="bold" alignSelf="center">
        {category.name}
      </Typography>
    </ImageBackroundStyled>
  </CategoryContainer>
);

export default CategoryItem;
