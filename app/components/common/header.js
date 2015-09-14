/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"user strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul>
                        <li>
                            <a href ="/" >Home</a>
                        </li>
                        <li>
                            <a href ="/#phones">Mobile phones</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
