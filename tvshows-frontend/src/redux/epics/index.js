import fetchEpicTvShows from './tvshows';
import {combineEpics} from 'redux-observable';

export default combineEpics(
    fetchEpicTvShows
  );