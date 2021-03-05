import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('locations').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          location: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('locations').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">location List</Link></h4>
            <h3 class="panel-title">
              {this.state.location.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.location.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.location.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.location.city}</dd>
              <dt>State:</dt>
              <dd>{this.state.location.state}</dd>
              <dt>Zip:</dt>
              <dd>{this.state.location.zip}</dd>
              <dt>Cuisine:</dt>
              <dd>{this.state.location.cuisine}</dd>
              <dt>Risk Profile:</dt>
              <dd>{this.state.location.riskProfile}</dd>
              <dt>Risk Score:</dt>
              <dd>{this.state.location.riskScore}</dd>
              <dt>Type:</dt>
              <dd>{this.state.location.type}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;