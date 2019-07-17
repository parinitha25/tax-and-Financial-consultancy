import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';

class Appointment extends Component {
    render() {
      return (
          <div>
        <label>Appointment</label>
    <Form>
        <label>Get in Touch</label>
  <Form.Group>
    <label><b>Name</b></label><br/>
    <input type="text" className="width"  />
  </Form.Group>
  <Form.Group>
    <label><b>Email</b></label><br/>
    <input type="text" className="width"  />
  </Form.Group>
  <Form.Group>
    <label><b>Date.Timeinterval</b></label><br/>
    <input type="text" className="width"  />
  </Form.Group>
  <Button variant="primary" type="submit" className="sendb">Send</Button>
  <Button variant="primary" type="submit">Reset</Button>
</Form>
          </div>
      );
    }
}
export default Appointment;