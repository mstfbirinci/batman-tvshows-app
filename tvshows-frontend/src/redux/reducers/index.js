import { combineReducers } from 'redux';
import tvShowsReducer from './tvshows';

const rootReducer = combineReducers({
  tvShowsState:tvShowsReducer
});

export default rootReducer;