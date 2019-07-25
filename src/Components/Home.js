import React, { Component } from 'react';
// import logot from '../logot.svg';
import './CSS/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Form,Button} from 'react-bootstrap';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';


class Home extends Component {
  render() {
    return (
      <div>
      <Navbar/>  
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img className="d-block w-60 imga" src={require('../images/financial.jpg')} alt="First slide" />
            <h4 className="font">Our capital markets team, helping clients identify and invest in opportunities across all markets and asset classes.</h4><br />
            <input type="submit" value="Make An Appointment" className="makes"></input>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block w-60 imga" src={require('../images/download1.jpg')} alt="Second slide" />
            <h4 className="font">Our capital markets team, helping clients identify and invest in opportunities across all markets and asset classes.</h4><br />
            <input type="submit" value="Make An Appointment" className="makes"></input>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img className="d-block w-60 imga" src={require('../images/download4.jpeg')} alt="Third slide"/>
            <h4 className="font">Our capital markets team, helping clients identify and invest in opportunities across all markets and asset classes.</h4><br />
            <a href='./appt'> <input type="submit" value="Make An Appointment" className="makes"></input></a>
          </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <p className="serviceo">Our Services</p>
      <CardGroup className="cfont">
        <Card>
          <CardBody>
            <img src={require('../images/service5.jpg')} alt="Card " className="cimg"/>
            <p className="servicep">Accounting Services</p>
            <p>Our firm offers a complete range of accounting Services, We prepare Financial Statement in accordance with GAAP, We also assist in Preparation of customs Financial report which suits the Managerial needs. </p>    
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/service4.jpg')} alt="Card " className="cimg" />
            <p className="servicep">GST Services</p>
            <p>In order to meet various demands of our esteemed clients, we are engaged in providing an optimum quality array of GST Services.</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/service3.jpg')} alt="Card" className="cimg" />
            <p className="servicep">Book Keeping Services</p>
            <p>We are offering a wide array of Book-Keeping Services. These presented bookkeeping services are offered by professionals in adherence to preset industry standards. In addition to this, offered bookkeeping services are appreciated due to their reasonable prices and perfect execution.  </p>
          </CardBody>
        </Card>
      </CardGroup>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <div className="about">
				    <div className="aboutt">
				    	<span className="aboutus"><i>About US</i></span>
						    <p>As the pace of innovation accelerates in a hyper competitive environment, success depends on putting customers at the center of everything a business does.</p>
                <p className="aboutp"> 1.Conducting research on tax laws<br/>
                  2.Strategizing with clients to minimize tax liability<br/>
                  3.Communicating with clients to explain tax issues<br/>
                  4.Preparing tax returns<br/>
                  5.Estate planning<br/>
                  6.Keeping clients compliant with their tax obligations  
						    </p>
					    <a href='./appt'><input type="submit" value="Make An Appointment" className="aptb"></input>  </a>
				    </div>
			    </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
        <p className="service">Tax Calculator</p>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
        <Form className="mtop">
          <Form.Group>
            <label><b>Choose your Business Area</b></label><br/>
            <Form as="select">
              <option>Ahmedabad</option>
              <option>Busan	</option>
              <option>Hiroshima</option>
            </Form>
          </Form.Group>
          <Form.Group>
            <label><b>Employees number</b></label><br/>
            <Form as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form>
          </Form.Group>
        </Form>
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
        <Form className="mtopa">
          <Form.Group>
            <label className="formc"><b>Country of residence</b></label><br/>
            <Form as="select">
              <option>India</option>
              <option>South Korea</option>
              <option>Japan</option>
            </Form>
          </Form.Group>
          <Form.Group>
              <label><b>Yearly Income</b></label><br/>
              <input type="text"  />
          </Form.Group>
              <Button variant="primary" type="submit" className="tbutton">Total payment </Button>
          </Form>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
            <img src={require('../images/calculator.jpg')} className="imgc" alt="calculator" />
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      </div>
          <p className="serviceo">Latest News</p>
      <CardGroup className="cfont">
        <Card>
          <CardBody>
            <img src={require('../images/latest.jpg')} alt="Card" className="timg" />
            <p className="servicep2">Registrations Service</p>
            <p className="servicep3">With our in-depth knowledge of this domain, we are actively engaged in providing an excellent quality range of Registrations Service.</p>
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/latest1.png')} alt="Card" className="timg" />
            <p className="servicep2">Band Registration Service</p>
            <p className="servicep3">With an objective to fulfill the demands of our clients, we are engaged in providing a wide array of Band Registration Service.</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/latest2.png')} alt="Card"  className="timg"/>
            <p className="servicep2">Domain Name Registration Service</p>
            <p >Backed by rich industry experiences; we are highly engaged in offering a premium quality range of Domain Name Registration Service.</p>
          </CardBody>
        </Card>
      </CardGroup>
      {/* </div> */}
     <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
     <Footer/>
      </div>
    );
  }
}

export default Home;
