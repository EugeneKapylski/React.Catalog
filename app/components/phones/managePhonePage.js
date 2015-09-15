/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"use strict";

var React = require('react');
var PhoneForm = require('./phoneForm');
var PhoneApi = require('../../api/phoneApi');

var ManagePhonePage = React.createClass({
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
    savePhone: function(event) {
        event.preventDefault();
        PhoneApi.savePhone(this.state.phone);

    },
    render: function() {
        return (
            <PhoneForm
                phone={this.state.phone}
                onChange={this.setPhoneState}
                onSave={this.savePhone} />
        );
    }
});

module.exports = ManagePhonePage;