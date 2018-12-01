import { FETCH_TVSHOWS,FETCH_TVSHOWS_FULLFILLED,FETCH_TVSHOWS_FAILURE, FETCH_TVSHOWS_LOADING } from '../../constants'

export const fetchTvShows = () => {
    return {type: FETCH_TVSHOWS}
}

export const fetchTvShowsLoading = () => {
    return {type: FETCH_TVSHOWS_LOADING}
}

export const fetchTvShowsFullfilled = (tvShows) => {
    return {type: FETCH_TVSHOWS_FULLFILLED, tvShows: tvShows}

}

export const fetchTvShowsFailure = (error) => {
    return {type: FETCH_TVSHOWS_FAILURE, error: error}

}
