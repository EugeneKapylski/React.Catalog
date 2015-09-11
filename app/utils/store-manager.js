var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var mergeInto = require('react/lib/mergeInto');

var StoreManager = function () {}
StoreManager.prototype = merge(EventEmitter.prototype, {
    dispatch: function () {},
    flush: function () {
        this.emit('update');
    }
});
StoreManager.create = function (Dispatcher, props) {
    if (arguments.length < 1 || !Dispatcher.register || !Dispatcher.dispatch) {
        throw new Error('You have to pass a Dispatcher and optionally an object to merge ');
    }
    props = props || {};
    var store = new StoreManager();
    mergeInto(store, props);
    Dispatcher.register(store, store.dispatch.bind(store));
    return store;
};
module.exports = StoreManager;