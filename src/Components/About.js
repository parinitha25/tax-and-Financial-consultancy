import React, { Component } from 'react';
import './CSS/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="backgrounda"></div>
            <div className="abouta">About US</div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <h1 className="taxs">What is TAX?</h1><br/>
            <p><i>A tax is a compulsory financial charge or some other type of levy imposed upon a taxpayer by a governmental organization in order to fund various public expenditures.A failure to pay,
                along with evasion of or resistance to taxation, is punishable by law. Taxes consist of direct or indirect taxes and may be paid in money or as its labour equivalent.</i></p>
            <p><i>Most countries have a tax system in place to pay for public, common or agreed national needs and government functions. Some levy a flat percentage rate of taxation 
                  on personal annual income, but most scale taxes based on annual income amounts. </i></p>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <img src={require('../images/tax5.jpeg')} className="taximg" alt="calculator" />
            <input type="submit" value="Read More" className="readb"></input>
          </div>
         
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 backgroundb">
          <img  src={require('../images/benifits.jpg')} alt="Card image" className="bimg" />
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
          {/* <div className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <div className="backgroundb">
       
          <div className="about">
            <h2 className="aboutb">About US</h2>
            <p>As the pace of innovation accelerates in a hyper—competitive environment, success depends on putting customers at the center of everything a business does. 
              That's why RRD's mission is to enable our clients to better connect with their customers.No other organization gives clients the means to connect to their customers across the entire breadth of the customer journey, from marketing programs 
              that generate new customers to the critical business operations that serve and extend the brand. </p>
         <a href='./appt'><input type="submit" value="Make An Appointment" className="apt"></input>  </a>
        </div>
        </div>
      </div>
      </div> */}
      
      </div>
    );
  }
}

export default About;