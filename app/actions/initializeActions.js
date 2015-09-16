/**
 * Created by Evgeny.Kapylsky on 9/16/2015.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PhoneApi = require('../api/phoneApi');

var InitializeActions = {
   initApp: function() {
       Dispatcher.dispatch({
           actionType: ActionTypes.INITIALIZE,
           initialData: {
               phoneItems: PhoneApi.getAllPhoneItems()
           }
       });
   }
};

module.exports = InitializeActions;