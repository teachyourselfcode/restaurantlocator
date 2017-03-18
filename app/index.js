var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  // Helper functions for our app

  // getLocation should return the user's latitude and longitude
  getLocation: function() {
    // TODO
    return {'lat': 0, 'long': 0};
  },

  // getPlaces should return the place id's of restaurants within {radius} of our user
  getPlaces: function(location, radius) {
    // TODO
    return [1, 2, 3, 4, 5];
  },

  // getDetails should return the details of a place
  getDetails: function(id) {
    // TODO
    return {'name': 'restaurant'};
  },

  render: function() {
    var loc = getLocation();
    var places = getPlaces();
    var details = {};

    for(place in places) {
      details.push(getDetails(place));
    }

    return(
      <div>
        <h1>Restaurant Locator</h1>
        <p>Location: {loc}</p>
        <p>Details: {details}</p>
      </div> 
    )
  }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
  );