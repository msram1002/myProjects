var React = require('react');
var {Link, IndexLink} = require('react-router');

var MediaQuery = require('react-responsive');

var Header = React.createClass({
  render: function() {
    var headerStyle = {
        textAlign:"center",
        marginTop:"20",
        backgroundColor:"#FF0"
      };
      var headerStyle2 = {
          textAlign:"center",
          marginTop:"20",
          backgroundColor:"#9F9"
        };
    return (
      <div>

        <MediaQuery minDeviceWidth={700}>
          <div style={headerStyle}>
            <h2>WEATHER APPLICATION USING REACT JS</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <br></br>
            <br></br>
            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={700}>
          <div style={headerStyle2}>
            <h2><u>Weather Application</u></h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <br></br>
            <br></br>
            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </div>
        </MediaQuery>

      </div>
    );
  }
});

module.exports = Header;
