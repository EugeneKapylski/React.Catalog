/**
 * Created by Evgeny.Kapylsky on 9/15/2015.
 */
"user strict";

var React = require('react');
var Input = require('../common/textInput');

var PhoneForm = React.createClass({
    propTypes: {
        phoneItem: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
            <form>
                <h1>Manage Phone</h1>
                <Input
                    name="manufacturer"
                    label="Manufacturer"
                    value={this.props.phoneItem.manufacturer}
                    onChange={this.props.onChange}
                    error={this.props.errors.manufacturer} />
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