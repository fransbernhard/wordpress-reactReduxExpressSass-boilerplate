const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const setupApiRoutes = require('./middlewares/api');
const open = require('open');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 8080;

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV); // set environment
app.use(bodyParser.json()); // basically tells the system that you want json to be used

// application routes
setupApiRoutes(app);
setupAppRoutes(app);

// http.createServer creates a server on your computer
http.createServer(app).listen(process.env.HTTP_PORT, (err) => {
  if(err){
    console.log(err);
  } else {
    console.log("runnin on: " + process.env.HTTP_PORT)
    open(`http://localhost:${process.env.HTTP_PORT}`)
  }
});
