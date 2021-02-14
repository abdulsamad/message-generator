import { createContext, useContext, useReducer, useEffect, FC } from 'react';

import reducer from './reducer';
import * as types from './types';

const initialState = {
  theme: 'dark' as types.themeTypes,
  setTheme: () => null,
  text: null,
  setText: () => null,
};

const AppContext = createContext<types.IState>(initialState);

const Context: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const theme: string = localStorage.getItem('theme') as string;

    if (theme) setTheme(theme);
  }, []);

  const setTheme = (theme: string): void => {
    dispatch({
      type: types.SET_THEME,
      payload: theme as types.themeTypes,
    });
  };

  const setText = (text: string) => {
    dispatch({
      type: types.SET_TEXT,
      payload: text,
    });
  };

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        text: state.text,
        setText,
        setTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error('useContext must be used within a AppContext Provider.');

  return context;
};

export { Context, useAppContext };
