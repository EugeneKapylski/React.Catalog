/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"user strict";

var React = require('react');
var Input = require('../common/textInput');

var PhoneForm = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Manage Phone</h1>
                <Input
                    name="manufacturer"
                    label="Manufacturer"
                    value={this.props.phone.manufacturer}
                    onChange={this.props.onChange} />
                <br />
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-default"
                    onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = PhoneForm;