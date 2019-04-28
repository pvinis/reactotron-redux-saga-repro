import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isForeground: true,
  counter: 0,
};

const appStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
    
    const { counter } = state;
    return { ...state, counter: counter + 1 };

    default:
      return state
  }
};

export const increase = () => (
    {
      type: 'INCREASE_COUNTER',
    }
  );

export default combineReducers({
  appState: appStateReducer,
});
