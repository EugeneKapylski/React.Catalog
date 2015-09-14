/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');
var PhoneApi = require('../../api/phoneApi');
var PhoneList = require('./phoneList');

var Phones = React.createClass({
    getInitialState: function() {
        return {
            phones: []
        };
    },
    render: function() {
        return (
            <div>
                <h1>Phones</h1>
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

module.exports = Phones;