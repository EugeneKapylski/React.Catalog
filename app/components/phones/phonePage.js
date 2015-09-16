/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
//var PhoneActions = require('../../actions/phoneActions');
var PhoneStore = require('../../stores/phoneStore');
var PhoneList = require('./phoneList');

var PhonePage = React.createClass({
    getInitialState: function() {
        return {
            phoneItems: PhoneStore.getAllPhoneItems()
        };
    },
    componentWillMount: function() {
        PhoneStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PhoneStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({phoneItems: PhoneStore.getAllPhoneItems()})
    },
    render: function() {
        return (
            <div>
                <h1>Phones</h1>
                <Link to="addMobilePhone" className="btn btn-default">Add mobile phone</Link>
                <PhoneList phoneItems = {this.state.phoneItems}/>
            </div>
        );
    }
});

module.exports = PhonePage;