import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';

class Login extends Component {
    render() {
      return (
          <div>
        <img src={logot}  alt="logo" />
    <Form>
  <Form.Group>
    <label><b>Email Id</b></label><br/>
    <input type="text" className="width"  />
  </Form.Group>

  <Form.Group>
    <label><b>Password</b></label><br/>
    <input type="password" className="width" />
  </Form.Group>
  <Button variant="primary" type="submit">Login</Button>
</Form>
          </div>
      );
    }
}
export default Login;