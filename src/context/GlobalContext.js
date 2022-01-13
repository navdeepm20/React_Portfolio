import { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  return (
    <globalContext.Provider value={{ showPortfolio, setShowPortfolio }}>
      {props.children}
    </globalContext.Provider>
  );
};
