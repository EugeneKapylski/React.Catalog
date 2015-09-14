/**
// * Created by Evgeny.Kapylsky on 9/8/2015.
// */
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) {
   React.render(<Handler/>, document.getElementById('catalog-app'));
});
