/**
 * Created by Evgeny.Kapylsky on 9/9/2015.
 */
var AppDispatcher = require('../app-dispatcher');
var StoreManager = require('../utils/store-manager');

var mobilePhoneStore  = StoreManager.create(AppDispatcher, {
    data: [],
    dispatch: function (payload) {
        switch (payload.type) {
            case 'updateData':
                this.data = payload.data;
                this.flush();
                break;
        }
    }
});

module.exports = mobilePhoneStore;