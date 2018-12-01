"use strict";

const tvmaze = require("../api/tvmaze");

const tvShows = {
  
  async fetchTvShows() {
    let tvShowsResult = await tvmaze.get('search/shows?q=batman');
    
    if (!tvShowsResult.data) {
      throw new Error('oops something goes wrong...');
    }

    return tvShowsResult.data;
  }
};

module.exports = tvShows;
