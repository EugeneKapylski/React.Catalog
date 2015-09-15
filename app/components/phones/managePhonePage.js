/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var PhoneForm = require('./phoneForm');
var PhoneApi = require('../../api/phoneApi');
var toastr = require('toastr');

var ManagePhonePage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    getInitialState: function() {
        return {
            phone: {
                id: '',
                manufacturer: ''
            }
        };
    },
    setPhoneState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.phone[field] = value;

        return this.setState({phone: this.state.phone});
    },
    savePhoneItem: function(event) {
        event.preventDefault();
        PhoneApi.savePhone(this.state.phone);
        toastr.success("Phone item saves");
        this.transitionTo('phones');
    },
    render: function() {
        return (
            <PhoneForm
                phone={this.state.phone}
                onChange={this.setPhoneState}
                onSave={this.savePhoneItem} />
        );
    }
});

module.exports = ManagePhonePage;