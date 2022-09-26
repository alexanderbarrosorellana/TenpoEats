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
      console.log('filterByDistance :>> ', filterByDistance);

      if (isOpenFilter) {
        console.log('como ke si')
        const filterByIsOpen = filterByDistance.filter(
          ({isOpen}) => isOpen === isOpenFilter,
        );
        console.log('filterByItsOpen :>> ', filterByIsOpen);
        resolve(filterByIsOpen);
      }

      resolve(filterByDistance);
    } else {
      reject(new Error('Failed to fetch'));
    }
  });
};
