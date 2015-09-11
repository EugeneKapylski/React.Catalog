///**
// * Created by Evgeny.Kapylsky on 9/8/2015.
// */
//var CatalogApp = require('components/catalog-app');

var React = require('react');

//React.render(<CatalogApp/>, document.getElementById('catalog-app'));

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

React.render(<Hello name="World" />, document.getElementById('catalog-app'));
