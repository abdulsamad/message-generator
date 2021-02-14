export type themeType = 'light' | 'dark';

export type textType = {
  name: string;
  count: string;
};

export interface IState {
  theme: themeType;
  text: textType[];
  setTheme: (theme: themeType) => void;
  addText: (text: textType) => void;
}

interface setTheme {
  type: 'SET_THEME';
  payload: themeType;
}

interface addText {
  type: 'ADD_TEXT';
  payload: textType;
}

export type Action = setTheme | addText;

export const SET_THEME = 'SET_THEME';
export const ADD_TEXT = 'ADD_TEXT';
