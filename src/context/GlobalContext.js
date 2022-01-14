import { createContext, useState } from "react";
import data from "../assets/data/data.json";
export const globalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  return (
    <globalContext.Provider value={{ showPortfolio, setShowPortfolio, data }}>
      {props.children}
    </globalContext.Provider>
  );
};
