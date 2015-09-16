/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var PhoneActions = require('../../actions/phoneActions');
var Link = Router.Link;


var PhoneList = React.createClass({
    propTypes: {
        phoneItems: React.PropTypes.array.isRequired
    },
    deletePhoneItem: function(id, event) {
        event.preventDefault();
        PhoneActions.deletePhoneItem(id);
        toastr.success('Phone item deleted');
    },
    render: function() {
        var createPhoneRow = function (phone) {
          return (
              <tr key={phone.id}>
                <td><a href="#" onClick={this.deletePhoneItem.bind(this, phone.id)}>Delete</a></td>
                <td><Link to="editMobilePhoneItem" params={{id: phone.id}}>{phone.id}</Link></td>
                <td><Link to="editMobilePhoneItem" params={{id: phone.id}}>{phone.manufacturer}</Link></td>
              </tr>
          );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Manufacturer</th>
                    </thead>
                    <tbody>
                        {this.props.phoneItems.map(createPhoneRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PhoneList;