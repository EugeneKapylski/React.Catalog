/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"user strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul>
                        <li><Link to="app" >Home</Link></li>
                        <li><Link to="phones">Mobile phones</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
