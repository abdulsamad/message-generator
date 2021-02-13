export type themeTypes = 'light' | 'dark';

export interface IState {
  theme: themeTypes;
  setTheme: (theme: themeTypes) => void;
}

interface theme {
  type: 'THEME';
}

interface setTheme {
  type: 'SET_THEME';
  payload: themeTypes;
}

export type Action = theme | setTheme;

export const THEME = 'THEME';
export const SET_THEME = 'SET_THEME';
