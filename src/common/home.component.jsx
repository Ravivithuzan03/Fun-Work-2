import React, { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div className="head">
        <h4><b>Sri Lanka Travel Guide</b></h4> 
        <p>Country in South Asia</p>
        <button type="button" class="btn btn-outline-primary">Places</button>
        <img src="bus.png" alt="bus"></img>
      </div>
    );
  }
}

export default Home
