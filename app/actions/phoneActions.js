/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var PhoneApi = require('../api/phoneApi');
var ActionTypes = require('../constants/actionTypes');

var PhoneActions = {
    createPhoneItem: function(phoneItem) {
        var newPhoneItem = PhoneApi.savePhoneItem(phoneItem);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PHONE_ITEM,
            phoneItem: newPhoneItem
        });
    },
    updatePhoneItem: function(phoneItem) {
        var updatedPhoneItem = PhoneApi.savePhoneItem(phoneItem);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            phoneItem: updatedPhoneItem
        });
    },
    deletePhoneItem: function(id) {
        PhoneApi.deletePhoneItem(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = PhoneActions;