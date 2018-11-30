import React, { Component } from 'react';
import './assets/css/styles.scss';
import Header from '../header';

class TvShows extends Component {

    constructor(props) {
        super(props);

        this.tvShows = [{
            Name: 'Batman'
        },
        {
            Name: 'Batman1'
        },
        {
            Name: 'Batman2'
        },
        {
            Name: 'Batman3'
        },
        {
            Name: 'Batman4'
        }]
    }

    mapTvShows(tvShows) {
        return tvShows.map(tvShow => {
            return (
                <li>{tvShow.Name}</li>
            )
        });
    }

    render() {

        return (

            <div>
                <Header />
                <div className="tvShowListHeaderWrapper">
                    <h1 className="tvShowListHeader">Batman TV Shows</h1>
                </div>
                <div className="tvShowListWrapper">

                    <ul>
                        {this.mapTvShows(this.tvShows)}
                    </ul>
                </div>
            </div>
        );
    }
}


export default TvShows;
