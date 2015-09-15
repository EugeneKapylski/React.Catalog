/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, this page is not found. You can go back to <Link to="app">home page</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
