import { createContext, useEffect, useState } from "react";

const initialState = {
  user: {},
};

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      updateUser(JSON.parse(userStorage));
    }
  }, []);

  function updateUser(value) {
    setUser({ ...user, user: value });
  }

  return (
    <AppContext.Provider
      value={{ user: user.user, setUser: (value) => updateUser(value) }}
    >
      {children}
    </AppContext.Provider>
  );
};
