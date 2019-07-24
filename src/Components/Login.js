import React, { Component } from 'react';
// import {login} from '../Action/LoginAction';
// import {register} from '../Action/Register';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import './CSS/Login.css';
import {login} from './Userindex';
  
class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        submitted: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
  
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
      e.preventDefault();
        const { email, password } = this.state;
         this.setState({ submitted: true });
      //    if (email && password) {
      //     this.props.history.push('/student')
      // }else{
      //   console.log('login successful');
      // }
  
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      login(user).then(res => {
        if (email && password) {
          this.props.history.push('/home')
      }else{
        console.log('login successful');
      }
      })
    }
  

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
                <input type="text" className="widthl" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <label><b>Password</b></label><br/>
                <input type="password" className="widthl" onChange={this.handleChange}/>
              </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>Login</Button>
            </Form>
            </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
      </div>
    );
  }
}

export default Login;


