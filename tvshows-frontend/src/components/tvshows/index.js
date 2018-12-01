import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link'

import { fetchTvShows } from '../../redux/actions/tvshows';
import Header from '../header';

class TvShows extends Component {

    componentDidMount() {
        if(!this.props.tvShowsState.tvShows.length)
            this.props.dispatch(fetchTvShows());
    }

    mapTvShows(tvShows) {
        return tvShows.map(tvShow => {
            return (
                <li key={tvShow.show.id}>
                    <Link href={{ pathname: `/detail`, query: { id: `${tvShow.show.id}` } }} >
                        <a>{tvShow.show.name}</a>
                    </Link>
                </li>
            )
        });
    }

    render() {
        const { error, loading, tvShows } = this.props.tvShowsState;
        
        if (error) {
            return (
                <div>
                    {error}
                </div>
            )
        }

        if (loading) {
            
            return (
                <div>
                    'loading...'
                </div>
            )
        }
        
        return (

            <div>
                <Header />
                <div className="tvShowListHeaderWrapper">
                    <h1 className="tvShowListHeader">Batman TV Shows</h1>
                </div>
                <div className="tvShowListWrapper">

                    <ul>
                        {this.mapTvShows(tvShows)}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { tvShowsState: state.tvShowsState };
}

export default connect(mapStateToProps)(TvShows);
