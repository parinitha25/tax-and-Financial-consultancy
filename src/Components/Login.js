import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import './CSS/Login.css';
import axios from 'axios';
import browserHistory from '../Utils/browserHistory';
import setAuthorizationToken from '../Utils/setAuthorizationToken';
import api from '../Api/index';
// import {login} from './Userindex';
// import {setAuthorizationToken} from '../Utils/Setauthorization';
  
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}
handleSubmit=async(e)=>{
  const {email,password } = this.state
    const payload = { email,password }
    e.preventDefault();
    let t=0;
    // let reqobj={
    //   Email:this.state.email,
    //   Password:this.state.password,
    // }
    let reg_pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.state.email) this.setState({emailError:'Email is required'});
      else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
      else {
          t++;
          this.setState({emailError:''});
      }

      if(!this.state.password) this.setState({passwordError:'Password is required'});
      else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
      else {
          t++;
          this.setState({passwordError:''});
      }
      if(t>1) {   
        console.log("hii")
        debugger;
                await api.login(payload).then(res => {
                    this.setState({
                      email: '',
                      password:'' 
                    })
                    console.log('hello')
                    browserHistory.push("/home");
                });       
            }
}

handleSignin=async()=>{
  debugger
  const { email,password} = this.state;
  const payload = { email,password }
  const signinRes = await api.login(payload)
  sessionStorage.setItem('authentication', signinRes.data.token)
  sessionStorage.setItem('userEmail', signinRes.data.email)
  browserHistory.push("/home");
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
                <p className="colorform">{this.state.emailError}</p>
              </Form.Group>
              <Form.Group>
                <label><b>Password</b></label><br/>
                <input type="text" className="widthl" onChange={this.handleChange} name="password" value={password}/>
                <p className="colorform">{this.state.passwordError}</p>
              </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSignin}>Login</Button>
            </Form>
            </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
      </div>
    );
  }
}

export default Login;


// handleSignin=async()=>{
        
//   const { email,password} = this.state;
//   const payload = { email,password }
//   await api.signin(payload).then(res => {
//       if(res.data==="User succesfully signIn"){
//           alert("login succesfull")
//           browserHistory.push("home");
//       }
//       else
//           alert("login fail");
//   })
// }