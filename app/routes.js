/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="phones" handler={require('./components/phones/phonePage')}/>
        <Route name="addMobilePhone" path="phone" handler={require('./components/phones/managePhonePage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
        <Redirect from="mobile-phones" to="phones" />
    </Route>
);

module.exports = routes;