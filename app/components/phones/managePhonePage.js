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
            phoneItem: {
                id: '',
                manufacturer: ''
            },
            errors: {}
        };
    },
    setPhoneState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.phoneItem[field] = value;

        return this.setState({phoneItem: this.state.phoneItem});
    },
    phoneFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};//clear any previous errors.

        if (this.state.phoneItem.manufacturer.length === 0) {
            this.state.errors.manufacturer = 'Manufacturer is a required field.';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});

        return formIsValid;
    },
    savePhoneItem: function(event) {
        event.preventDefault();

        if(!this.phoneFormIsValid()) {
            return;
        }

        PhoneApi.savePhone(this.state.phoneItem);
        toastr.success("Phone item saves");
        this.transitionTo('phones');
    },
    render: function() {
        return (
            <PhoneForm
                phoneItem={this.state.phoneItem}
                onChange={this.setPhoneState}
                onSave={this.savePhoneItem}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManagePhonePage;