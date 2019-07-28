import React, { Component } from 'react';
import './CSS/Service.css';
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';

class Service extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Service</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
         </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <h1 className="expert"><i>Expert Solution</i></h1><br/>
            <p><i>*Welcome to Expert Solutions Tax and Financial Services Inc, an independent full- service firm offering services and solutions for tax management, 
                  accounting, income tax, retirement planning, insurance, consulting, and wealth management needs.<br/>
                  *Enrolled agents (EAs) are America’s Tax Experts. EAs are the only federally licensed tax preparers who also have unlimited rights to represent taxpayers before the IRS.<br/>
                  </i></p>
            <input type="submit" value="Read More" className="reade"></input>
          </div>    
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <img src={require('../images/teamh.jpg')} className="expertimg" alt="teamimage" />
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
             <h1 className="expert"><i>Our Clients</i></h1>
        <div className="row backgroundcolor">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo2.png')} alt="Card" className="logoi"/>
              <p className="logop"><i>AICPA Tax Center</i></p>
              <p className="ausp1">The AICPA's founding defined accountancy as a profession characterized by educational requirements, professional standards, 
                a code of professional ethics, and alignment with the public interest.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo3.png')} alt="Card" className="logoi"/>
              <p className="logop"><i>Tax And Super Australia</i></p>
              <p className="ausp">Superannuation in Australia is taxed by the Australian taxation system at three points: on contributions received by a superannuation fund.
                on investment income earned by the fund, and on benefits paid by the fund.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo5.jpg')} alt="Card" className="logoi"/>
              <p className="logop"><i>BP Strategic Solutions</i></p>
              <p className="ausp">Personalized Service, Business Plans, Financial Modeling, Budgeting and financial analysis. We have one goal at BP Strategics.the fields of accounting,and business strategy.</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">      
              <img src={require('../images/logo4.jpg')} alt="Card " className="logoi"/>
              <p className="logop"><i>JWSS Tax Center</i></p>
              <p className="ausp1">I am professional tax accountant with over 5 years of experience. I pride myself in helping my clients save money on taxes and getting them the maximum refunds allowed legally.
             </p>
          </div>
        </div>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h1 className="taxus"><i>Tax Service</i></h1>
          <CardGroup className="cfonts">
        <Card>
          <CardBody>
            <img src={require('../images/calculatora.jpg')} alt="Card" className="cimgs"/>
            <p className="servicep">CORPORATE TAX</p>
            <p>Our Tax Knowledge and Solutions Team is a dedicated group of professionals, rich in experience on Tax and Regulatory matters. Our team stays constantly abreast with changes in tax policies, administration  and international jurisprudence. We endeavor to identify potential threats & opportunities and advise on appropriate strategies to mitigate exposure and optimize tax incidence on our clients.</p>    
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/calculatorb.jpg')} alt="Card" className="cimgs" />
            <p className="servicep">INTERNATIONAL TAX</p>
            <p>Our International Tax specialists offer services that successfully align all the different areas of taxation into a benefit-driven strategy that is reflected favorably in the various financial parameters. Our people and global resources are able to help clients develop and execute business strategies quickly and effectively, with strong accountability and governance.</p></CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/calculatorc.jpg')} alt="Card" className="cimgs" />
            <p className="servicep">GST</p>
            <p>We have designed a comprehensive approach, which is aligned to the needs of our clients and we assist our clients in undertaking GST compliances.In order to meet various demands of our esteemed clients, we are engaged in providing an optimum quality array of GST Services. </p>
          </CardBody>
        </Card>
      </CardGroup>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <Footer/>
      </div>
     
    );
  }
}

export default Service;


