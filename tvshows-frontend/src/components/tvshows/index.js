import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {fetchTvShows} from '../../redux/actions/tvshows'; 
import Header from '../header';

import './assets/css/styles.scss';


class TvShows extends Component {

    componentDidMount(){
        this.props.dispatch(fetchTvShows());
    }

    mapTvShows(tvShows) {
        return tvShows.map(tvShow => {
            return (
                <li key={tvShow.show.id}>
                <Link to={{ pathname:`/detail/${tvShow.show.id}`, navigation: true}} >
                {tvShow.show.name}
                </Link>
                </li>
            )
        });
    }

    render() {
        const {error, loading, tvShows} = this.props.tvShowsState;
        
        if (error)
        {
            return (
                <div>
                    {error}
                </div>
            )
        }

        if(loading){
            return (
                <div>
                    'loading...'
                </div>
            )
        }

        if(!tvShows.length){
            return (
                <div>
                    no tv-show to show
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
