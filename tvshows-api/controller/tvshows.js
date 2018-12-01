"use strict";

const tvShowsService = require("../service/tvshows");

const tvShows = {
  
  async get() {

    let tvShows = await tvShowsService.fetchTvShows();

    return tvShows;
  }
};

module.exports = tvShows;
