var React = require('react');
var ReactDOM = require('react-dom');

// New in ES6; Destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');

ReactDOM.render(
    <Router history = {hashHistory}>
      <Route path="/" component = {Main}>
        <Route path="About" component = {About}/>
        //Render the main component children
        <IndexRoute component={Weather}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
