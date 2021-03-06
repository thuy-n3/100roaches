import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('locations');
    this.unsubscribe = null;
    this.state = {
     locations: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const locations = [];
    querySnapshot.forEach((doc) => {
      const { name, address, city, state, zip, cuisine, riskScore, riskProfile, type } = doc.data();
      console.log(name);
      locations.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        address,
        city, 
        state,
        zip,
        cuisine,
        riskScore,
        riskProfile,
        type
      });
    });
    this.setState({
     locations
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              LOCATION LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Location</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Cuisine</th>
                  <th>Risk Score</th>
                  <th>Risk Profile</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.locations.map(location =>
                  <tr>
                    <td><Link to={`/show/${location.key}`}>{location.name}</Link></td>
                    <td>{location.address}</td>
                    <td>{location.city}</td>
                    <td>{location.state}</td>
                    <td>{location.zip}</td>
                    <td>{location.cuisine}</td>
                    <td>{location.riskScore}</td>
                    <td>{location.riskProfile}</td>
                    <td>{location.type}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default App;