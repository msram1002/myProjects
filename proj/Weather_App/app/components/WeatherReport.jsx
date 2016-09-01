var React = require('react');

var WeatherReport = React.createClass ({
  render: function() {
    var {data, location} = this.props;
    var reportStyle = {
        marginLeft:"300",
        marginTop: "-125",
        fontWeight: 'bold'
      };
    return (
      <div style={reportStyle}>
        <h3><b><u>Various Weather Parameters for the {location} city</u></b></h3>
        <h4><i>(arranged alphabetically (KEYS and their respective values))</i></h4>
        <h4>{data}</h4>
      </div>
    );
  }
});

module.exports = WeatherReport;
