import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isForeground: true,
  counter: 0,
  nothing: false,
};

const appStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
    console.log('inc')

    const { counter } = state;
    return { ...state, counter: counter + 1 };

    case 'NOTHING':

    console.log('nothing happened')
    return { ...state, nothing: true }

    default:
      return state
  }
};

export const increase = () => ({
    type: 'INCREASE_COUNTER',
})

export const nothing = () => ({
    type: 'NOTHING',
})

export default combineReducers({
  appState: appStateReducer,
});
