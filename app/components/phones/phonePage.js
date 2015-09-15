/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var PhoneApi = require('../../api/phoneApi');
var PhoneList = require('./phoneList');

var PhonePage = React.createClass({
    getInitialState: function() {
        return {
            phones: []
        };
    },
    render: function() {
        return (
            <div>
                <h1>Phones</h1>
                <Link to="addMobilePhone" className="btn btn-default">Add mobile phone</Link>
                <PhoneList phones = {this.state.phones}/>
            </div>
        );
    },
    componentDidMount: function() {
        if(this.isMounted()) {
            this.setState({phones: PhoneApi.getAllPhones() });
        }
    }
});

module.exports = PhonePage;