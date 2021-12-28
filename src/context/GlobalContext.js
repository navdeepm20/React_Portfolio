import { createContext, useState, useReducer } from "react";

export const globalContext = createContext();

const globalContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action) {
      case "home":
        setBodyContent("home");
        return;
      case "resume":
        setBodyContent("resume");
      case "portfolio":
        setBodyContent("portfolio");
      default:
        return;
    }
  };
  const [newState, dispatch] = useReducer(reducer, initialState);
  const [bodyContent, setBodyContent] = useState(null);

  return (
    <globalContext.Provider
      value={[bodyContent, setBodyContent, newState, dispatch]}
    >
      {props.children}
    </globalContext.Provider>
  );
};
