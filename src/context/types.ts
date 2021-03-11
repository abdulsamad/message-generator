export type themeType = 'light' | 'dark';

export type textType = {
  name: string;
  count: string;
  delivery?: string;
};

export interface IState {
  theme: themeType;
  text: textType[];
  setTheme: (theme: themeType) => void;
  addText: (text: textType) => void;
  resetText: () => void;
}

interface setTheme {
  type: 'SET_THEME';
  payload: themeType;
}

interface addText {
  type: 'ADD_TEXT';
  payload: textType;
}

interface resetText {
  type: 'RESET_TEXT';
}

export type Action = setTheme | addText | resetText;

export const SET_THEME = 'SET_THEME';
export const ADD_TEXT = 'ADD_TEXT';
export const RESET_TEXT = 'RESET_TEXT';
