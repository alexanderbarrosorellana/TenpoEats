import React from 'react';
import {ScrollView} from 'react-native';
import {SafeArea, Header, Address, Body} from './components';
import {useUserLocationContext} from '../../context/LocationContext';

const HomeScreen = ({navigation}) => {
  const {userAddress} = useUserLocationContext();
  return (
    <SafeArea>
      <ScrollView>
        <Header />
        <Address
          address={userAddress?.address}
          roundedTop
          onPress={() => navigation.navigate('LocationSearch')}
        />
        <Body />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;
