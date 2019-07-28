import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './CSS/Appointment.css';
import Navbar from './Navbar';
import Footer from './Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
      return (
      <div>
        <Navbar/>
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Appointment</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
          </div>
          <Form>
            <label className="formg">Get in Touch</label>
            <Form.Group className="date">
              <label><b>Name</b></label>
              <input type="text" className="width"/>
            </Form.Group>
            <Form.Group className="date">
              <label><b>Email</b></label>
              <input type="text" className="width" />
            </Form.Group>
            <Form.Group>
            <div>
              <label className="datet"><b>Date</b></label>
                <DatePicker className="dateta"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
            </div>
            </Form.Group>
            <Form.Group >
              <label className="datet"><b>Time</b></label>
                  <DatePicker className="dateta"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                  />
              </Form.Group>
                <button  type="submit" className="sendbta">Send</button>
                <button type="submit" className="resetbta">Reset</button>
          </Form>
        <Footer/>
      </div>
    );
  }
}
export default Appointment;

