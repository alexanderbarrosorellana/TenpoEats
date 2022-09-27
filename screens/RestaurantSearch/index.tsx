import React, {useState, useRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  Alert,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserLocationContext} from '../../context/LocationContext';
import RestaurantHeader from './RestaurantHeader';
import RestaurantSearchBody from './RestaurantSearchBody';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import CheckIcon from '../../assets/icons/Check.svg';
import {
  SearchInputWrapper,
  RestaurantSearchWrapper,
  RestaurantFilters,
  Filter,
  COLOR,
} from './styles';
import {Typography} from '../../components';
import {getRestaurants} from './restaurants';
import {Restaurant} from './restaurants/restaurantData';
// @ts-ignore
import BottomSheet from 'react-native-gesture-bottom-sheet';
import RestaurantDistance from './RestaurantDistance';

const RestaurantSearch = ({navigation}) => {
  const {userAddress} = useUserLocationContext();
  const [searchedRestaurant, setSearchedRestaurant] = useState<string>('');
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [fetchedRestaurants, setFetchedRestaurants] = useState<Restaurant[]>(
    [],
  );
  const [conditionStore, setConditionStore] = useState<boolean[]>([]);
  const [distanceSearch, setDistanceSearch] = useState(1);
  const [distanceSlideValue, setdistanceSlideValue] = useState(1);
  // bottom sheet ref
  const bottomSheetModalRef = useRef();

  const handleCondition = (): boolean => {
    let isSuccess = Math.random() < 0.4;

    const conditionStoreFalseCount = conditionStore.filter(
      condition => condition === false,
    ).length;

    if (conditionStoreFalseCount >= 2) {
      isSuccess = true;
    }

    const conditionStoreSize = conditionStore.length;
    if (conditionStoreSize >= 10) {
      setConditionStore([isSuccess]);
    }

    if (conditionStoreSize < 10) {
      setConditionStore(prev => [...prev, isSuccess]);
    }

    return isSuccess;
  };

  const handleFetchRestaurants = async () => {
    const condition = handleCondition();
    try {
      const restaurants = await getRestaurants(
        searchedRestaurant,
        condition,
        distanceSearch,
        isAvailable,
      );
      setFetchedRestaurants(restaurants);
    } catch (error) {
      Alert.alert('Error', 'Error trying to fetch', [
        {text: 'Retry', onPress: async () => handleFetchRestaurants},
        {text: 'Cancel'},
      ]);
    }
  };

  const handleSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (e.nativeEvent.text) {
      handleFetchRestaurants();
    }
  };

  const handleApplyDistanceSearch = async () => {
    setDistanceSearch(distanceSlideValue);
    bottomSheetModalRef.current.close();
    await handleFetchRestaurants();
  };

  return (
    <SafeAreaView>
      <RestaurantSearchWrapper>
        <RestaurantHeader
          address={userAddress?.address}
          onBackButtonPress={() => navigation.goBack()}
          onLocationButtonPress={() => navigation.navigate('LocationSearch')}
        />
        <SearchInputWrapper>
          <TextInput
            value={searchedRestaurant}
            placeholder="Escribe nombre del restaurante que búscas"
            onChangeText={setSearchedRestaurant}
            onSubmitEditing={handleSubmitEditing}
          />
          {!!searchedRestaurant && (
            <Pressable onPress={handleFetchRestaurants}>
              <SearchIcon />
            </Pressable>
          )}
        </SearchInputWrapper>
        <RestaurantFilters showFilters={!!searchedRestaurant}>
          {!!searchedRestaurant && (
            <>
              <Filter enabled={isAvailable}>
                <Typography
                  color={isAvailable ? COLOR.BRAND : COLOR.BRAND_DISABLED}
                  size={12}
                  onPress={() => setIsAvailable(!isAvailable)}>
                  Solo locales abiertos
                </Typography>
                <CheckIcon
                  style={{
                    color: isAvailable ? COLOR.BRAND : COLOR.BRAND_DISABLED,
                  }}
                  color="black"
                />
              </Filter>
              <Filter onPress={() => bottomSheetModalRef.current.show()}>
                <Typography color={COLOR.BRAND} size={12}>
                  Area de búsqueda:
                </Typography>
                <Typography color={COLOR.BRAND} size={12} fontWeight="bold">
                  {distanceSearch} KM
                </Typography>
              </Filter>
            </>
          )}
        </RestaurantFilters>
        {fetchedRestaurants && !!fetchedRestaurants.length && (
          <RestaurantSearchBody restaurants={fetchedRestaurants} />
        )}
      </RestaurantSearchWrapper>
      <BottomSheet ref={bottomSheetModalRef} height={600}>
        <RestaurantDistance
          slideValue={distanceSlideValue}
          setSlideValue={([distance]: number[]) =>
            setdistanceSlideValue(distance)
          }
          onApplyDistancePress={handleApplyDistanceSearch}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RestaurantSearch;
