/**
 * Created by Evgeny.Kapylsky on 9/16/2015.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _phoneItems = [];

var PhoneStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getAllPhoneItems: function () {
        return _phoneItems;
    },
    getPhoneItemById: function(id) {
        return _.find(_phoneItems, {id: id});
    }
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _phoneItems = action.initialData.phoneItems;
            PhoneStore.emitChange();
            break;
        case ActionTypes.CREATE_PHONE_ITEM:
            _phoneItems.push(action.phoneItem);
            PhoneStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingPhoneItem = _.find(_phoneItems, {id: action.phoneItem.id});
            var existingAuthorIndex = _.indexOf(_phoneItems, existingPhoneItem);
            _phoneItems.splice(existingAuthorIndex, 1, action.phoneItem);
            PhoneStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_phoneItems,function(phoneItem) {
                return action.id == phoneItem.id;
            });
            PhoneStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = PhoneStore;