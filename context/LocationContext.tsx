import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

export type UserAddress = {
  address?: string;
  latitude?: number;
  longitude?: number;
};

export type LocationContextType = {
  userAddress: UserAddress;
  updateAddress: (userAddress: UserAddress) => void;
};

const LocationContext = createContext<LocationContextType | null>({
  userAddress: {},
  updateAddress: () => {},
});

type Props = {
  children?: ReactNode;
};

const LocationContextProvider: React.FC<Props> = ({children}) => {
  const [userAddress, setUserAddress] = useState<UserAddress>({});

  const updateAddress = useCallback(() => {
    (address: UserAddress) => {
      setUserAddress((prev: UserAddress) => ({...prev, ...address}));
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      userAddress,
      updateAddress,
    }),
    [userAddress, updateAddress],
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
};

const useUserLocationContext = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error('useUserLocationContext was used outside of its Provider');
  }

  return context;
};

export {LocationContextProvider, useUserLocationContext, LocationContext};
