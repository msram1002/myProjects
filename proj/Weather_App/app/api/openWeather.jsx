var axios = require('axios');

//ES6, making a variable as constant
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=38dc945fbe2beb0faa91374031e85ebf&units=imperial';

module.exports = {
  getResults: function (location) {
    // To avoid unexpected requests to the server
    var locationEncoded = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_URL}&q=${locationEncoded}`;
    // Make the request which is a promise here
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
          function isArray(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
          }
          function isPlainObject(a) {
            return Object.prototype.toString.call(a) === "[object Object]"
          }
          function sortJSON(a) {
            var b = {};
            if (isArray(a)) {
              b = a.sort();
              b.forEach(function(c, d) {
                  b[d] = sortJSON(c)
              })
          } else {
            if (isPlainObject(a)) {
              b = {};
              Object.keys(a).sort().forEach(function(c) {
              b[c] = sortJSON(a[c])
            })
            } else {
                b = a
              }
            }
            return b
          }
        var alphabeticData = res.data;
        var d = sortJSON(alphabeticData);
        alphabeticData = JSON.stringify(d, null, 4);
        return alphabeticData;
      }
    }, function () {
      throw new Error(res.data.message);
    });
  }
}
