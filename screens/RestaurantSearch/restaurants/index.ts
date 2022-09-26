import {Restaurant, restaurantsData} from './restaurantData';

export const getRestaurants = (
  restaurantName: string,
  isSuccess: boolean,
  distanceFilter: number,
  isOpenFilter: boolean,
) => {
  return new Promise<Restaurant[]>((resolve, reject) => {
    if (isSuccess) {
      const filteredRestaurants = restaurantsData.filter(({name}) =>
        name.toLocaleLowerCase().includes(restaurantName.toLocaleLowerCase()),
      );

      const filterByDistance = filteredRestaurants.filter(
        ({distance}) => distance <= distanceFilter,
      );

      if (isOpenFilter) {
        const filterByIsOpen = filterByDistance.filter(
          ({isOpen}) => isOpen === isOpenFilter,
        );
        resolve(filterByIsOpen);
      }

      resolve(filterByDistance);
    } else {
      reject(new Error('Failed to fetch'));
    }
  });
};
