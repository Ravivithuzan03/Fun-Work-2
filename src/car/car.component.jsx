import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
  render(){
    // Get data from route props
    const cars = this.props.route.data;

    // Map through cars and return linked cars
    const carNode = cars.map((car) => {
      return (
        
        <Link
          to={"/cars/"+car.id}
          className="list-group-item"
          key={car.id}>
          {car.name}
        </Link>
       
      )
    });
    return (
      <div className="place">
        <h1><b>Sri Lanka</b></h1>
        <h2>Famous Tourist Places</h2>
        <div className="list-group">
          {carNode}
        </div>
      </div>
    );
  
  }
}
export default Car
