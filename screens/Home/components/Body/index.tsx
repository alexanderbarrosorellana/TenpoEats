import React from 'react';
import {View} from 'react-native';
import {BodyContainer} from './styles';
import CategoryItem from './CategoryItem';
import RestaurantItem from './RestaurantItem';
import FavoritesItem from './FavoritesItem';
import {FlatList} from 'react-native';
import {SECTIONS} from './sections';
import {Typography} from '../../../../components';

const Body = () => (
  <BodyContainer>
    {SECTIONS.map(section => (
      <View key={section.title}>
        <Typography
          fontWeight="bold"
          color="black"
          paddingTop={24}
          paddingBottom={16}>
          {section.title}
        </Typography>
        <FlatList
          horizontal
          data={section.data}
          renderItem={({item}: any) => {
            if (section.title === 'RESTAURANTES') {
              return <RestaurantItem restaurant={item} />;
            }

            if (section.title === 'CATEGORÍAS') {
              return <CategoryItem category={item} />;
            }

            return <FavoritesItem favorite={item} />;
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    ))}
  </BodyContainer>
);

export default Body;
