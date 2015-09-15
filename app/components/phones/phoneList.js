/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PhoneList = React.createClass({
    render: function() {
        var createPhoneRow = function (phone) {
          return (
              <tr key={phone.id}>
                <td><Link to="editMobilePhoneItem" params={{id: phone.id}}>{phone.id}</Link></td>
                <td><Link to="editMobilePhoneItem" params={{id: phone.id}}>{phone.manufacturer}</Link></td>
              </tr>
          );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Manufacturer</th>
                    </thead>
                    <tbody>
                        {this.props.phones.map(createPhoneRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PhoneList;