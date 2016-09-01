var React = require('react');
var WeatherSearchForm = require('WeatherSearchForm');
var WeatherReport = require('WeatherReport');
var openWeather = require('openWeather');

var Weather = React.createClass ({
    getInitialState: function () {
      return {
        isLoading: false
        }
    },
    handleSearch: function (location) {
      var _this = this;
      this.setState({isLoading: true});

      openWeather.getResults(location).then(function (data) {
        _this.setState({
          location: location,
          data: data,
          isLoading: false
        });
      }, function (errorMessage) {
        _this.setState({isLoading: false});
        alert(errorMessage);
      });
    },
   render: function(){
     var {isLoading, data, location} = this.state;
     function renderMessage (){
       if(isLoading) {
         return <h3>Fetching Weather Parameters ...</h3>;
       } else if (data && location) {
         return <WeatherReport data={data} location={location}/>;
       }
     }

     var searchFormStyle = {
         marginLeft:"150",
         marginTop:"100"
       };

     return (
      <div style={searchFormStyle}>
        <h4><i>Enter the CITY Name</i></h4>
        <WeatherSearchForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
