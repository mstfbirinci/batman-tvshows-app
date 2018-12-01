import { FETCH_TVSHOWS_FULLFILLED, FETCH_TVSHOWS_FAILURE, FETCH_TVSHOWS_LOADING } from '../constants/index';

export default function fetchTvShows(state = { tvShows: [], loading: true }, action) {
    switch (action.type) {
        case FETCH_TVSHOWS_FULLFILLED:
            return { tvShows: [...action.tvShows], loading: false }
        case FETCH_TVSHOWS_FAILURE:
            return { tvShows: [], error: action.error, loading: false }
        case FETCH_TVSHOWS_LOADING:
            return { tvShows: [], loading: true }
        default:
            return state;
    }
    
}