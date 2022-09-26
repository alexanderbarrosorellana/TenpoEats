import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useMemo,
} from 'react';

export type UserAddress = {
  address?: string;
  latitude?: number;
  longitude?: number;
  details?: string;
};

export type LocationContextType = {
  userAddress: UserAddress;
  setUserAddress: (userAddress: UserAddress) => void;
};

const LocationContext = createContext<LocationContextType>({
  userAddress: {},
  setUserAddress: () => {},
});

type Props = {
  children?: ReactNode;
};

const LocationContextProvider: React.FC<Props> = ({children}) => {
  const [userAddress, setUserAddress] = useState<UserAddress>({});

  const contextValue = useMemo(
    () => ({
      userAddress,
      setUserAddress,
    }),
    [userAddress, setUserAddress],
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
