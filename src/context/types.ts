export type themeTypes = 'light' | 'dark';

export interface IState {
  theme: themeTypes;
  setTheme: (theme: themeTypes) => void;
  text: string | null;
  setText: (text: string) => void;
}

interface setTheme {
  type: 'SET_THEME';
  payload: themeTypes;
}

interface setText {
  type: 'SET_TEXT';
  payload: string;
}

export type Action = setTheme | setText;

export const SET_THEME = 'SET_THEME';
export const SET_TEXT = 'SET_TEXT';
