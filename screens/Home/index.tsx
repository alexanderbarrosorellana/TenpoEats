import React from 'react';
import {ScrollView} from 'react-native';
import {SafeArea, Header, Address, Body} from './components';

const HomeScreen = ({navigation}) => {
  return (
    <SafeArea>
      <ScrollView>
        <Header />
        <Address
          roundedTop
          onPress={() => navigation.navigate('LocationSearch')}
        />
        <Body />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;
