var restify = require("restify");
var corsMiddleware = require('restify-cors-middleware');
// create restify server
var server = restify.createServer();

server.use(restify.plugins.queryParser());

var cors = corsMiddleware({
  origins: ['*']
});

server.pre(cors.preflight);
server.use(cors.actual);

// define routes
require("./route")(server);

// start server
server.listen(process.env.PORT || 8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
