import React, { Component } from 'react';
import './CSS/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <footer>
              <div className="row"> 
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                  <label className="aboutf">About Us</label>
                  <p className="footp">
                  As the pace of innovation accelerates in a hyper competitive environment, success depends on putting customers at the center of everything a business does.
                  </p>
                    <a href="#" class="fa fa-facebook fac"></a>
                    <a href="#" class="fa fa-twitter fac"></a>
                    <a href="#" class="fa fa-linkedin fac"></a>
                    <a href="#" class="fa fa-instagram fac"></a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                  <label className="aboutf">Quick Links</label><br/>
                    <a href="#item2" className="Quick_Links" >>Home</a><br/>
                    <a href="#item2" className="Quick_Links" >>About us</a><br/>
                    <a href="#item3" className="Quick_Links" >>Services</a><br/>
                    <a href="#item4" className="Quick_Links" >>Appointment</a><br/>
                    <a href="#item7" className="Quick_Links" >>Contacts</a><br/>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                  <label className="aboutf">Subscribe</label><br/><br/>
                    <p className="pf">Get the latest Updates</p>
                    <input type="mail" className="enter_mail" placeholder="Enter Email" name="lastname" />
                    <input type="submit" value="Send" className="send"/><br/>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
              </div>
              </div>
            </footer>
         </div>
        </div>
      </div>
  	);
	}
}
export default Footer;
          