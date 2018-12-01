import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTvShows} from '../../redux/actions/tvshows'; 
import './assets/css/styles.scss';
import _ from 'lodash';

class Detail extends Component {

    componentDidMount(){
        if(!this.props.location.navigation){
            this.props.dispatch(fetchTvShows()); 
        }
    }

    render() {

        if(!this.props.location.navigation && !this.props.tvShowsState.tvShows.length){
            return (
                <div>
                    loading...
                </div>
            )
        }

        const { id } = this.props.match.params;
        const {tvShows} = this.props.tvShowsState;
        const tvShow = _.find(tvShows, { show: { id: Number(id) } });


        return (
            <div className="tvShowDetailWrapper">
                <img src={tvShow.show.image.medium} alt="batman" />
                <p>{tvShow.show.summary}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { tvShowsState: state.tvShowsState };
}

export default connect(mapStateToProps)(Detail);

