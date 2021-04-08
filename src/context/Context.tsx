import { createContext, useContext, useReducer, useEffect, FC } from "react";

import reducer from "./reducer";
import * as types from "./types";

const initialState = {
  theme: "dark" as types.themeType,
  text: [],
  setTheme: () => null,
  addText: () => null,
  resetText: () => null,
};

const AppContext = createContext<types.IState>(initialState);

const Context: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const theme = localStorage.getItem("theme") as types.themeType;

    if (theme) setTheme(theme);
  }, []);

  const setTheme = (theme: types.themeType) => {
    dispatch({
      type: types.SET_THEME,
      payload: theme,
    });
  };

  const addText = (text: types.textType) => {
    dispatch({
      type: types.ADD_TEXT,
      payload: text,
    });
  };

  const resetText = () => {
    dispatch({
      type: types.RESET_TEXT,
    });
  };

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        text: state.text,
        setTheme,
        addText,
        resetText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("useContext must be used within a AppContext Provider.");

  return context;
};

export { Context, useAppContext };
