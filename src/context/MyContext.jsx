
import { createContext, useState } from 'react';

const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider
      value={{
        toggle,
        setToggle,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default MyStore;
