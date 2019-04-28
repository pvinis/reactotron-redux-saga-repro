import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isForeground: true,
};

const appStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  appState: appStateReducer,
});
