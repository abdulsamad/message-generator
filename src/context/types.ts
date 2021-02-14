export type themeType = 'light' | 'dark';

export type textType = {
  name: string;
  count: string;
};

export interface IState {
  theme: themeType;
  setTheme: (theme: themeType) => void;
  text: null | textType[];
  setText: (text: textType[]) => void;
}

interface setTheme {
  type: 'SET_THEME';
  payload: themeType;
}

interface setText {
  type: 'SET_TEXT';
  payload: textType[];
}

export type Action = setTheme | setText;

export const SET_THEME = 'SET_THEME';
export const SET_TEXT = 'SET_TEXT';
