/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var PhoneForm = require('./phoneForm');
var PhoneActions = require('../../actions/phoneActions');
var PhoneStore = require('../../stores/phoneStore');
var toastr = require('toastr');

var ManagePhonePage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function() {
        return {
            phoneItem: {
                id: '',
                manufacturer: ''
            },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function() {
        var phoneId = this.props.params.id;//from the path '/phone:id'

        if(phoneId) {
            this.setState({phoneItem: PhoneStore.getPhoneItemById(parseInt(phoneId, 10))});
        }
    },
    setPhoneState: function(event) {
        this.setState({dirty: true});
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

        if(this.state.phoneItem.id) {
            PhoneActions.updatePhoneItem(this.state.phoneItem);
        } else {
            PhoneActions.createPhoneItem(this.state.phoneItem);
        }
        this.setState({dirty: false});
        toastr.success("Phone item saved");
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