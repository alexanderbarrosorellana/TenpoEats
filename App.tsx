import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LocationContextProvider} from './context/LocationContext';
import HomeScreen from './screens/Home';
import LocationSearch from './screens/LocationSearch';
import RestaurantSearch from './screens/RestaurantSearch';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <LocationContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LocationSearch"
              component={LocationSearch}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RestaurantSearch"
              component={RestaurantSearch}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </LocationContextProvider>
  );
};

export default App;
