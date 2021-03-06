import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';



class Home extends Component {


home 

  render() {
    return (
      <div class="container">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">

                <link to="/home">Home</link>
                <link to="/fame">AllStars</link>
                <link to="/shame">Hall of Shame</link>
                <link to="/roulette">Roach Roulette</link>
                <link to="/search">Search</link>
            </h3>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;






//component:React.Component
// const FancyLink = React.forwardRef((props, ref) => (
//     <a ref={ref} {...props}>💅 {props.children}</a>
//   ))
  
//   <Link to="/" component={FancyLink} />