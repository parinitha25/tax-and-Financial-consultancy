import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';
import {register} from './Userindex';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      mobileNumber: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // const { name, value } = e.target;
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password, mobileNumber } = this.state;
    this.setState({ submitted: true });

   
    const user = {
      email: this.state.email,
      password: this.state.password,
      mobileNumber: this.state.mobileNumber
    }
    console.log(user);
    register(user).then(res => {
      if (email && password ) {
        this.props.history.push('/login')
      }
    })
  }
    render() {
      // const { email, password, mobileNumber, submitted } = this.state;
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
                <input type="text" className="widthl" name="email" onChange={this.handleChange} value={this.state.email} />
              </Form.Group>
              <Form.Group>
                <label><b>Password</b></label><br/>
                <input type="password" className="widthl" name="password" onChange={this.handleChange} value={this.state.password} />
              </Form.Group>
              <Form.Group>
                <label><b>Mobile number</b></label><br/>
                <input type="text" className="widthl" name="mobilenumber"  onChange={this.handleChange}/>
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