import * as types from "./types";

const reducer = (state: types.IState, action: types.Action) => {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case types.ADD_TEXT:
      return {
        ...state,
        text: [...state.text, action.payload],
      };

    case types.RESET_TEXT:
      return {
        ...state,
        text: [],
      };

    default:
      return state;
  }
};

export default reducer;
