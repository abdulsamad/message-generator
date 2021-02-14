import * as types from './types';

const reducer = (state: types.IState, action: types.Action) => {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case types.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
