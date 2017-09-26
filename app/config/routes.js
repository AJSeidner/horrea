var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var hashHistory = Router.hashHistory;
var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main');

module.exports = (
    <Router history = {hashHistory}>
    <Route path='/' component={Main}>


  </Route>
</Router>
);
