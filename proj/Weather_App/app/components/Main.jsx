// Main Component
var React = require('react');
var Header = require('Header');

var MediaQuery = require('react-responsive');

var Main = React.createClass({
  render: function () {
    var mainStyle = {
        backgroundColor: "#9F9"
      };
      var mainStyle2 = {
          backgroundColor: "#378"
        };
    return (
      <div>

        <MediaQuery minDeviceWidth={700}>
          <div style={mainStyle}>
              <Header/>
              {this.props.children}
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={700}>
          <div style={mainStyle2}>
              <Header/>
              {this.props.children}
          </div>
        </MediaQuery>

      </div>
    );
  }
});

module.exports = Main;
