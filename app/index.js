/**
// * Created by Evgeny.Kapylsky on 9/8/2015.
// */
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, function(Handler) {
   React.render(<Handler/>, document.getElementById('catalog-app'));
});