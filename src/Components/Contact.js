import React, { Component } from 'react';
import './CSS/Contact.css';
import {Form} from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import browserHistory from '../Utils/browserHistory';
import api from '../Api/index';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
        cname:'',
        cemail:'',
        message:'',
        confirmm:'',
        nameError:'',
        emailError:'',
        messageError:'',
        confirmError:''
        
    }
}
handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});
}
handleSubmit = async (e) => {
  debugger
  const { cname,cemail,message, confirmm } = this.state;
  const payload = { cname,cemail,message, confirmm }
  e.preventDefault();
  let reg_user=/^[A-Za-z0-9]{2,10}$/;

  let reg_email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let t=0;
  if(!this.state.cname) this.setState({nameError:'Name is required'});
  else if(!reg_user.test(this.state.cname)) this.setState({nameError:'Invalid Name'});
  else{
       t++;
       this.setState({nameError:''});
  }
  if(!this.state.cemail) this.setState({emailError:'Email is required'});
  else if(!reg_email.test(this.state.cemail)) this.setState({emailError:'Invalid Email'}); 
  else {
      t++;
      this.setState({emailError:''});
  }
  if(!this.state.message) this.setState({messageError:'Message is required'});
  else {
      t++;
      this.setState({messageError:''});
  }
  if(!this.state.confirmm) this.setState({confirmError:'your appointment is confirm'});
  else {
      t++;
      this.setState({confirmError:''});
  }
  console.log(this.state);
  if(t>3) {
      await api.contact(payload).then(res => { 
          this.setState({
              cname: '',
              cemail: '',
              message:'',
              confirmm:''
          })
          browserHistory.push("/sch");
      })
  }
}

  render() {
    const { cemail, cname,message} = this.state
    return (
      <div>
        <Navbar/>
        <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Contactus</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
          </div>
        <div className="row1">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>  
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"> 
            <p className="taxfind">How To Find Us?</p>  
            <p className="taxhead"><i>Head Quarters</i></p> 
            <p className="addrp">A and D Consultancy
                38, 2nd Main, 7th Cross, Rangappa Laypout Banshankari, 3rd Stage, Near Annapurnay Shri Temple, Katriguppe, 
                canada-560085<br/>
                <p className="emailp">Email:</p>Adconsultancy@gmail.com<br/>
                <p className="emailp">Phonenumer:</p>0912347950</p>   
            <p className="suptp"><i>Support Center</i></p>   
            <p className="addrp">No 459/30, 30th Cross, 4th Block, Bangalore - 560011, Near Police Station
            <p className="emailp">Email:</p>Adconsultancy@gmail.com<br/>
                <p className="emailp">Phonenumer:</p>0912347950</p>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <Form onSubmit={this.handleSubmit}>
            <label className="form">Get in Touch</label>
            <Form.Group >
              <label><b>Name</b></label><br/>
              <input type="text" className="widthc"  name="cname" value={cname} onChange={this.handleChange}/>
              <p className='red'>{this.state.nameError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label><br/>
              <input type="text" className="widthc"  name="cemail" value={cemail}  onChange={this.handleChange}/>
              <p className='red'>{this.state.emailError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Message</b></label><br/>
              <textarea type="text" className="widthc"  name="message" value={message} onChange={this.handleChange}/>
              <p className='red'>{this.state.messageError}</p>
            </Form.Group>
            <p className='red'>{this.state.confirmError}</p>
              <button  type="submit" className="sendbt" >Send</button>
              <button  type="reset" className="resetbt">Reset</button>
          </Form>
          </div>
          </div>
        </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Contact;