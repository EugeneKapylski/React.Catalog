/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

//This file is mocking a web API by hitting hard coded data.
var phones = require('./phoneData').phones;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(phone) {
    return phone.id;
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PhoneApi = {
    getAllPhones: function() {
        return _clone(phones);
    },

    getPhoneById: function(id) {
        var phone = _.find(phones, {id: id});
        return _clone(phone);
    },

    savePhone: function(phone) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if (phone.id) {
            var existingAuthorIndex = _.indexOf(phones, _.find(phones, {id: phone.id}));
            phones.splice(existingAuthorIndex, 1, phone);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            phone.id = _generateId(phone);
            phones.push(phone);
        }

        return _clone(phone);
    },

    deletePhone: function(id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(phones, { id: id});
    }
};

module.exports = PhoneApi;