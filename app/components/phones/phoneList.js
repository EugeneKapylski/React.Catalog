/**
 * Created by Evgeny.Kapylsky on 9/14/2015.
 */
"use strict";

var React = require('react');

var PhoneList = React.createClass({
    render: function() {
        var createPhoneRow = function (phone) {
          return (
              <tr key={phone.id}>
                <td><a href={"/#phones/" + phone.id}>{phone.id}</a></td>
                <td><a href={"/#phones/" + phone.id}>{phone.manufacturer}</a></td>
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