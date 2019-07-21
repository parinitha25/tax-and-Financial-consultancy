import React, { Component } from 'react';
import Navbar from './Navbar';
import './CSS/Ourclient.css';

class Ourclient extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
             <h1 className="expert"><i>Our Clients</i></h1>
        <div className="row backgroundcolor">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo2.png')} alt="Card image" className="logoi"/>
              <p className="logop"><i>AICPA Tax Center</i></p>
              <p className="ausp">The AICPA's founding defined accountancy as a profession characterized by educational requirements, professional standards, 
                a code of professional ethics, and alignment with the public interest.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo3.png')} alt="Card image" className="logoi"/>
              <p className="logop"><i>Tax And Super Australia</i></p>
              <p className="ausp">Superannuation in Australia is taxed by the Australian taxation system at three points: on contributions received by a superannuation fund.
                on investment income earned by the fund, and on benefits paid by the fund.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo5.jpg')} alt="Card image" className="logoi"/>
              <p className="logop"><i>BP Strategic Solutions</i></p>
              <p className="ausp">Personalized Service, Business Plans, Financial Modeling, Budgeting and financial analysis. We have one goal at BP Strategics.the fields of accounting,and business strategy.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo4.jpg')} alt="Card image" className="logoi"/>
              <p className="logop"><i>JWSS Tax Center</i></p>
              <p className="ausp">I am professional tax accountant with over 5 years of experience. I pride myself in helping my clients save money on taxes and getting them the maximum refunds allowed legally.
             </p>
          </div>
        </div>
          </div>
        </div>
              <p className="ourcp"><i>What our clients say?</i></p>
              <p className="ourcpa">"Userback makes so much sense! It simply changes the way we communicate with our clients and the way our clients collect feedback from their customers"</p>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients1.jpg')} alt="First slide" />
            <p>Aahna</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients4.jpg')} alt="First slide" />
            <p>Aadita</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients6.jpg')} alt="First slide" />
            <p>Kumar Birla</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          </div>  
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients3.jpg')} alt="First slide" />
            <p>	Aaditya</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients2.jpg')} alt="First slide" />
            <p>Aaghnya</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients5.jpg')} alt="First slide" />
            <p>Aamod</p>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
        </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ourclient;