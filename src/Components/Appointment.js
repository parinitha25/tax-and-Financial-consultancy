import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import './CSS/Appointment.css';
import Navbar from './Navbar';

class Appointment extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="backgroundci"></div>
            <div className="contactpa"><i>Appointment</i></div>
          </div>
          <Form>
            <label className="formg">Get in Touch</label>
            <Form.Group >
              <label><b>Name</b></label>
              <input type="text" className="width"/>
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label>
              <input type="text" className="width" />
            </Form.Group>
            <Form.Group className="date">
              <label><b>Date</b></label>
              <input type="text" className="width" />
              <label><b>Time</b></label>
              <input type="text" className="width"/>
            </Form.Group>
              <button  type="submit" className="sendbt">Send</button>
              <button type="submit" className="resetbt">Reset</button>
          </Form>
            </div>
            </div>
    );
  }
}
export default Appointment;