import React, { Component } from 'react';
// import {login} from '../Action/LoginAction';
// import {register} from '../Action/Register';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import './CSS/Login.css';
import {login} from './Userindex';
  
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
  }
  render() {
    const { email, password } = this.state
    return (
      <div> 
        <div className="row">
          <div className="backgroundcl"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 loginf">
              <img src={logot}  alt="logo" />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <label><b>Email</b></label><br/>
                <input type="text" className="widthl" onChange={this.handleChange} name="email" value={email}/>
              </Form.Group>
              <Form.Group>
                <label><b>Password</b></label><br/>
                <input type="text" className="widthl" onChange={this.handleChange} name="password" value={password}/>
              </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
            </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
      </div>
    );
  }
}

export default Login;


