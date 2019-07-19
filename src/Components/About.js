import React, { Component } from 'react';
import './CSS/About.css';
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="backgrounda"></div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <h1 className="taxs"><i>What is TAX?</i></h1><br/>
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
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
          <img  src={require('../images/benifits.jpg')} alt="Card image" className="bimg" />
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 benifit"> 
            <h1 className="benifita">Benifits</h1>
            <p><h3>1.Nature of income</h3>
              The income received from consultancy is classified as income from profits and gains of business or profession, whereas in case of employment, it is considered as salary income. </p>
            <p><h3>2.Advance tax</h3>
              In case of employment, tax is withheld by the employer every month at an average rate of tax applicable to the employee. </p> 
          </div>
        </div>
           </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>   
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h1 className="paragraph"><i>Why US?</i></h1><br/>
            <p><i>Tax consultants, also know as tax advisors, are experts in tax law, planning and compliance. They serve businesses and individuals alike by staying current on new tax law and positioning taxpayers for short and long term tax optimization. A tax consultant typically expands on the role of tax preparer. While tax consultants prepare tax returns, they also often 
              work closely with clients throughout the year to ensure client tax liability is minimized. 
              Tax consultants are strong written and verbal communicators able to explain tax law and strategies in a way that is accessible and easy for clients to understand. Tax consultants work for public accounting firms, law offices, financial consulting firms and many even have their own independent tax preparation and consultation businesses. In all settings, tax consultants can be expected to perform duties that include:</i><br></br>
                  <p className="p1">1.Conducting research on tax laws<br/>
                  2.Strategizing with clients to minimize tax liability<br/>
                  3.Communicating with clients to explain tax issues<br/>
                  4.Preparing tax returns<br/>
                  5.Estate planning<br/>
                  6.Keeping clients compliant with their tax obligations</p></p>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h1 className="teamc"><i>Our Team</i></h1>
        <CardGroup className="cardimgt">
        <Card>
          <CardBody>
          <div class="dropdown">
            <img src={require('../images/expert3.jpg')} alt="Card image" className="tmimg" />
            <p>Ross McEwan</p>
            <p>CEO</p>
            <div class="dropdown-content">
              <center><label className="labeln">rossmen12@gmail.com</label></center>
              <p> 08048921603</p>
              {/* <img src={require('../images/email1.png')} alt="Card image" className="emaili" /> */}
            </div>
          </div>
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
          <div class="dropdown">
            <img  src={require('../images/expert4.jpg')} alt="Card image" className="tmimg" />
            <p>Sarah Danckert</p>
            <p>Business Reporter.</p>
            <div class="dropdown-content">
              <center><label className="labeln">sarah345@gmail.com</label></center>
              <p> 0804567891</p>
            </div>
          </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <div class="dropdown">
            <img  src={require('../images/expert2.jpg')} alt="Card image"  className="tmimg"/>
            <p>	Kumar Birla</p>
            <p>Advisor</p>
            <div class="dropdown-content">
              <center><label className="labeln">kumar789@gmail.com</label></center>
              <p> 0947393027</p>
            </div>
          </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <div class="dropdown">
            <img  src={require('../images/expert1.png')} alt="Card image"  className="tmimg"/>
            <p>Jeff Bezos</p>
            <p>Manager</p>
            <div class="dropdown-content">
              <center><label className="labeln">jeff456@gmail.com</label></center>
              <p> 0354830922</p>
            </div>
          </div>
          </CardBody>
        </Card>
      </CardGroup>
      </div>
      </div>
      </div>
    );
  }
}

export default About;

// <div class="dropdown">
//                 <img className="pic1" src={require('../Image/pic1.jpg')} alt="no image"></img>
//                 <div class="dropdown-content">
//                   <center><label>Veg Fired Rice</label></center>
//                 </div>
//               </div>