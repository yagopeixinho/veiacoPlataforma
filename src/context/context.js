import { createContext, useState } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <context.Provider value={{ user, setUser }}>{children}</context.Provider>
  );
};
