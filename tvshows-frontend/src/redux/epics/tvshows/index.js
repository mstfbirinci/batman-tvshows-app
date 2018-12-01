import api from '../../api';
import 'rxjs';
import { FETCH_TVSHOWS } from '../../constants'
import { filter, mergeMap } from 'rxjs/operators';
import { fetchTvShowsFullfilled, fetchTvShowsFailure, fetchTvShowsLoading } from '../../actions/tvshows';
import { of, concat } from 'rxjs';

const fetchEpicTvShows = (action$) => {
    return action$.pipe(
        filter(action => action.type === FETCH_TVSHOWS),
        mergeMap(action => {
            
            // before the api request show loading state
            return concat(of(fetchTvShowsLoading()),
                api.get(`/api/search`)
                    // list tvshows
                    .then(result => {
                        if (!result.data.success) {
                            //error state
                            return fetchTvShowsFailure(`We didn't find anything`);
                        }
                        return fetchTvShowsFullfilled(result.data.tvShows);
                    })
                    .catch(err => {
                        // handle error state
                        return fetchTvShowsFailure('Oops something goes wrong...');
                    }))
        })
    );
}


export default fetchEpicTvShows;