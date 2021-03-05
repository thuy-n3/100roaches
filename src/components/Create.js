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
      riskScore: '',
      riskProfile: ''
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

    const { name, riskScore, riskProfile } = this.state;

    this.ref.add({
      name,
      riskScore: Number(riskScore),
      riskProfile: Number(riskProfile)
    }).then((docRef) => {
      this.setState({
        name: '',
        riskScore: '',
        riskProfile: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { name, riskScore, riskProfile } = this.state;
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
                <label for="riskScore">riskScore:</label>
                <textArea class="form-control" name="riskScore" onChange={this.onChange} placeholder="riskScore" cols="80" rows="3">{riskScore}</textArea>
              </div>
              <div class="form-group">
                <label for="riskProfile">riskProfile:</label>
                <input type="text" class="form-control" name="riskProfile" value={riskProfile} onChange={this.onChange} placeholder="riskProfile" />
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