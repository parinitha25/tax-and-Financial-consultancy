import React, { Component } from 'react';
import { Form,Button, NavDropdown } from 'react-bootstrap';
import logot from '../logot.svg';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-info navbar">
        <a class="navbar-brand" href="#"> <img src={logot} className="img" alt="logo" /></a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link homen " href="./home">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./service">Services</a>
          </li>
          <li class="nav-item pages">
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="./appt">Appointment</NavDropdown.Item>
              <NavDropdown.Item href="./ourc">our client page</NavDropdown.Item>
              <NavDropdown.Item href="#">Schedule page</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact">ContactUs</a>
          </li>
          <li class="nav-item">
          <p className="nav-link searchp">Search</p>
          </li>
          <li class="nav-item">
          <input type="text" className="searchi"></input>
          <img src={require('../images/search.jpg')} alt="search image" className="searchia"/>
       
          </li>
          <li class="nav-item">
          <a class="nav-link logout" href="./home">Logout</a>
          </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;