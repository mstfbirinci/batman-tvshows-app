"use strict";

const config = {};

config.development = {
  tvmaze: {
    baseURL: "http://api.tvmaze.com/"
  }
};

config.production = {
  tvmaze: {
    baseURL: "http://api.tvmaze.com/"
  }
};

module.exports = config[process.env.NODE_ENV || "development"];
