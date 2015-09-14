/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuiery = require('jquery');

var App = React.createClass(
    {
        render: function() {
            return (
                <div>
                    <Header/>
                    <RouteHandler/>
                </div>
            );
        }
    }
);

module.exports = App;
