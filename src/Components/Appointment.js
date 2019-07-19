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
          <label className="appointment">Appointment</label>
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
                <Button  type="submit" className="sendbt">Send</Button>
                <Button  type="submit"  className="resetbt">Reset</Button>
            </Form>
        </div>
    );
  }
}
export default Appointment;