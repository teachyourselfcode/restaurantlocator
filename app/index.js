var React = require('react');
var ReactDOM = require('react-dom');

var Restaurants = React.createClass({
  getInitialState: function() {
    return {
      location: {'lat': 0, 'long':0},
      places: {}
    };
  },
  // Helper functions for our app

  // getLocation should return the user's latitude and longitude
  getLocation: function() {
    // TODO
    this.setState({
      location: {'lat': 0, 'long': 0}
    });
  },

  // getPlaces should return the place id's of restaurants within {radius} of our user
  getRestaurants: function() {
    // TODO
    this.setState({
      places: {
        0: '',
        1: '',
        2: ''
      }
    });
  },

  // getDetails should return the details of a place
  getDetails: function() {
    // TODO
    this.setState({
      places: {
        0: 'El Burrito Simpatico',
        1: 'Changs',
        2: 'Doc Lewis Chicken'
      }
    });
  },

  render: function() {
    this.getLocation();
    this.getPlaces(this.state.location, 5);
    this.getDetails([0,1,2]);
    return(
      <div>
        <h1>Restaurant Locator</h1>
        <p>Location: {JSON.stringify(this.state.location)}</p>
        <p>Places: {JSON.stringify(this.state.places)}</p>
      </div> 
    );
  }
});

ReactDOM.render(
  <Restaurants />,
  document.getElementById('app')
);