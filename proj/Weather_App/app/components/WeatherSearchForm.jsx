var React = require('react');

var WeatherSearchForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); // prevents entire page from reloading
    var location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type="text" ref="location"/>
          <br/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherSearchForm;
