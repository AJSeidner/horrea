var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
//These routes may be incorrect, and uneeded
var apiRoutes = require('./controllers/api-routes');
var employeeRoutes = require('./controllers/employee-routes');
var htmlRoutes = require('./controllers/html-route');
var managerRoutes = require('./controllers/manager-routes');

ReactDOM.render(

  <Router>{routes}</Router>,
  document.getElementById('app')

);