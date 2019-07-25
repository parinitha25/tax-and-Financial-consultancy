import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';
import {register} from './Userindex';


class Signup extends Component {
  constructor(props){
      super(props);
      this.state={
          firstname:'',
          lastname:'',
          email:'',
          password:'',
          phone:'',
          fnameError:'',
          lnameError:'',
          emailError:'',
          passwordError:'',
          phoneError:'', 
      }
  }
  handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=(e)=>{
    debugger
      e.preventDefault();
      let t=0;
      let reqobj={
          Firstname:this.state.firstname,
          Lastname:this.state.lastname,
          Email:this.state.email,
          Password:this.state.password,
          Phone:this.state.phone
      }
      let reg_user=/^[A-Za-z0-9]{2,10}$/;
      let reg_pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
     
      if(!this.state.firstname) this.setState({fnameError:'Firstname is required'});
      else if(!reg_user.test(this.state.firstname)) this.setState({fnameError:'Invalid Firstname'});
      else{
           t++;
           this.setState({fnameError:''});
      }
         
      if(!this.state.lastname) this.setState({lnameError:'Lastname is required'});
      else if(!reg_user.test(this.state.lastname)) this.setState({lnameError:'Invalid Lastname'}); 
      else {
          t++;
          this.setState({lnameError:''});
      }
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
      if(!this.state.phone) this.setState({phoneError:'Mobile number is required'});
      else if(!reg_mob.test(this.state.phone)) this.setState({phoneError:'Invalid Mobile number'});
      else {
          t++;
          this.setState({phoneError:''});
      }
      if(t>4) {
          
          this.props.history.push('/signin')    
      }
      console.log(reqobj);
      register(reqobj).then(res => {
      })
      .catch (res=> {
          prompt(res)
      })
  }  
  render() {
    const { firstname,lastname,email, password,phone } = this.state
    return (
      <div> 
      <div className="row">
        <div className="backgroundcl"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 loginf">
            <img src={logot}  alt="logo" />
          <Form onSubmit= {this.handleSubmit}>
          <Form.Group>
              <label><b>Firstname</b></label><br/>
              <input type="text" className="widthl" name="firstname" onChange={this.handleChange} value={firstname} /> 
              <p className="colorform">{this.state.fnameError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Lastname</b></label><br/>
              <input type="text" className="widthl" name="lastname" onChange={this.handleChange} value={lastname} /> 
              <p className="colorform">{this.state.lnameError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label><br/>
              <input type="text" className="widthl" name="email" onChange={this.handleChange} value={email} /> 
              <p className="colorform">{this.state.emailError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Password</b></label><br/>
              <input type="text" className="widthl" name="password" onChange={this.handleChange} value={password} /> 
              <p className="colorform">{this.state.passwordError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>MobileNumber</b></label><br/>
              <input type="number" className="widthl" name="phone"  onChange={this.handleChange}  value={phone}/>
              <p className="colorform">{this.state.phoneError}</p>/
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