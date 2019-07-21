import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';

class Signup extends Component {
    render() {
      return (
        <div> 
        <div className="row">
          <div className="backgroundcl"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 loginf">
              <img src={logot}  alt="logo" />
            <Form>
              <Form.Group>
                <label><b>Email</b></label><br/>
                <input type="text" className="widthl"  />
              </Form.Group>
              <Form.Group>
                <label><b>Password</b></label><br/>
                <input type="password" className="widthl" />
              </Form.Group>
              <Form.Group>
                <label><b>Mobile number</b></label><br/>
                <input type="number" className="widthl" />
              </Form.Group>
                <Button variant="primary" type="submit">Signup</Button>
            </Form>
            </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
      </div>
      );
    }
}
export default Signup;