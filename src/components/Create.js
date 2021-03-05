import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('locations');
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cuisine: '',
      riskScore: '',
      riskProfile: '',
      type: ''
    };
  }


  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    console.log(state[e.target.name]);
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, state, zip, cuisine, riskScore, riskProfile, type } = this.state;

    this.ref.add({
      name,
      address,
      city,
      state,
      zip,
      cuisine,
      riskScore: Number(riskScore),
      riskProfile,
      type
    }).then((docRef) => {
      this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cuisine: '',
        riskScore: '',
        riskProfile: '',
        type: '',
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { name, address, city, state, zip, cuisine, riskScore, riskProfile, type } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-name">
              ADD location
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="name" />
              </div>
              <div class="form-group">
                <label for="address">address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="address" />
              </div>
              <div class="form-group">
                <label for="city">city:</label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="city" />
              </div>
              <div class="form-group">
                <label for="state">state:</label>
                <input type="text" class="form-control" name="state" value={state} onChange={this.onChange} placeholder="state" />
              </div>
              <div class="form-group">
                <label for="zip">zip:</label>
                <input type="text" class="form-control" name="zip" value={zip} onChange={this.onChange} placeholder="zip" />
              </div>
              <div class="form-group">
                <label for="cuisine">cuisine:</label>
                <input type="text" class="form-control" name="cuisine" value={cuisine} onChange={this.onChange} placeholder="cuisine" />
              </div>
              <div class="form-group">
                <label for="riskScore">riskScore:</label>
                <input type="text" class="form-control" name="riskScore" value={riskScore} onChange={this.onChange} placeholder="riskScore" />
              </div>
              <div class="form-group">
                <label for="riskProfile">riskProfile:</label>
                <input type="text" class="form-control" name="riskProfile" value={riskProfile} onChange={this.onChange} placeholder="riskProfile" />
              </div>
              <div class="form-group">
                <label for="type">type:</label>
                <input type="text" class="form-control" name="type" value={type} onChange={this.onChange} placeholder="type" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;