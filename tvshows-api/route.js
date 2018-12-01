"use strict";

const tvShowsController = require("./controller/tvshows");

const route = server => {
  server.get({ path: "/api/search" }, async (req, res, next) => {
    try {
      
      let tvShows = await tvShowsController.get();
      
      res.send({ tvShows, success: true });
      return next();
    } catch (err) {
      res.send({
        message: err.message,
        success: false
      });
      return next();
    }
  });
};

module.exports = route;
