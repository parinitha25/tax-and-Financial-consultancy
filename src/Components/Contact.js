import React, { Component } from 'react';
import './CSS/Contact.css';
import {Form,Button } from 'react-bootstrap';
import Navbar from './Navbar';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="backgroundc"></div>
          </div>
          {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="taxfind"><i>How To Find Us?</i></p>  
            <p className="taxhead"><i>Head Quarters</i></p> 
            <p className="addrp">A&D Consultancy
                38, 2nd Main, 7th Cross, Rangappa Laypout Banshankari, 3rd Stage, Near Annapurnay Shri Temple, Katriguppe, 
                Bangalore-560085 </p>   
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>  
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">  
            <p className="suptp"><i>Support Center</i></p>   
            <p className="custpa">Tax Helplines​</p>
          <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
            <p className="custp">Aaykar Sampark Kendra 
            <img className="custimg" src={require('../images/customer.png')} alt="First slide" /></p>
            <p className="cparagraph">​​Income tax/PAN/TAN
              General Queries</p><br/>
            <p className="custp">Jeanne Bliss
            <img className="custimg" src={require('../images/customerw.png')} alt="First slide" /></p>
            <p className="cparagrapha">​​Income tax/
              General Queries</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
            <div><img className="phoneimg" src={require('../images/phone.jpg')} alt="First slide" /></div> 
            <div><img className="phoneimga" src={require('../images/phone.jpg')} alt="First slide" /></div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
            <p className="number">18001801961/1961</p>
          <p className="numbera">1800180546/6743</p>
            </div>
          </div>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <Form>
            <label className="form">Get in Touch</label>
            <Form.Group >
              <label><b>Name</b></label><br/>
              <input type="text" className="width"  />
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label><br/>
              <input type="text" className="width"  />
            </Form.Group>
            <Form.Group>
              <label><b>Message</b></label><br/>
              <input type="text" className="width"  />
            </Form.Group>
              <button  type="submit" className="sendbt">Send</button>
              <button type="submit" className="resetbt">Reset</button>
          </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;