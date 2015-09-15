/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="phones" handler={require('./components/phones/phonePage')}/>
        <Route name="phone" handler={require('./components/phones/phonePage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
    </Route>
);

module.exports = routes;