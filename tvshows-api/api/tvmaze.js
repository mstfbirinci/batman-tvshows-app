"use strict";

const axios = require("axios");
const config = require("../config");

const omdb = axios.create({
  baseURL: config.tvmaze.baseURL,
  timeout: 5000
});

module.exports = omdb;
