import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTvShows} from '../../redux/actions/tvshows'; 
import Link from 'next/link'
import _ from 'lodash';

class Detail extends Component {
    

    componentDidMount(){
        if(!this.props.tvShowsState.tvShows.length){
            this.props.dispatch(fetchTvShows()); 
        }
    }

    render() {
        if(!this.props.tvShowsState.tvShows.length){
            return (
                <div>
                    loading...
                </div>
            )
        }


        const tvShowId = this.props.id;
        const {tvShows} = this.props.tvShowsState;
        const tvShow = _.find(tvShows, { show: { id: tvShowId} });

        return (
            <div>
            <Link href={{ pathname: `/` }} >
                        <a>Back </a>
                    </Link>
            <div className="tvShowDetailWrapper">
                <img src={tvShow.show.image.medium} alt="batman" />
                <p>{tvShow.show.summary}</p>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { tvShowsState: state.tvShowsState };
}

export default connect(mapStateToProps)(Detail);

