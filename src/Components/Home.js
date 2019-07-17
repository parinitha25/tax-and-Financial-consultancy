import React, { Component } from 'react';
import logot from '../logot.svg';
import './CSS/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Form,Button, NavDropdown } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import {Card,CardImg, CardTitle, CardText, CardGroup, CardBody} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
      <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-info navbar">
        <a class="navbar-brand" href="#"> <img src={logot} className="img" alt="logo" /></a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
        <a class="nav-link " href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#">Appointment</NavDropdown.Item>
                <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                </NavDropdown>
            </li>
            <li class="nav-item">
        <a class="nav-link" href="#">ContactUs</a>
            </li>
            </ul>
        </div>
      </nav>
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
            <input type="submit" value="Make An Appointment" className="make"></input>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block w-60 imga" src={require('../images/download1.jpg')} alt="Second slide" />
            <h4 className="font">Our capital markets team, helping clients identify and invest in opportunities across all markets and asset classes.</h4><br />
            <input type="submit" value="Make An Appointment" className="make"></input>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img className="d-block w-60 imga" src={require('../images/download4.jpeg')} alt="Third slide"/>
            <h4 className="font">Our capital markets team, helping clients identify and invest in opportunities across all markets and asset classes.</h4><br />
            <a href='./appt'> <input type="submit" value="Make An Appointment" className="make"></input></a>
          </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <h2 className="service">Our Services</h2>
      <CardGroup>
        <Card>
          <CardBody>
            <img src={require('../images/service1.jpg')} alt="Card image" className="cimg"/>
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/service2.jpg')} alt="Card image" className="cimg" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/service3.jpg')} alt="Card image" className="cimg" />
          </CardBody>
        </Card>
      </CardGroup>
      <div className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <div className="background">
       
          <div className="about">
            <h2 className="aboutb">About US</h2>
            <p>As the pace of innovation accelerates in a hyper—competitive environment, success depends on putting customers at the center of everything a business does. 
              That's why RRD's mission is to enable our clients to better connect with their customers.No other organization gives clients the means to connect to their customers across the entire breadth of the customer journey, from marketing programs 
              that generate new customers to the critical business operations that serve and extend the brand. </p>
         <a href='./appt'><input type="submit" value="Make An Appointment" className="apt"></input>  </a>
        </div>
        </div>
      </div>
      </div>

      <div className="row">
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
        <h2 className="service">Tax Calculator</h2>
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
  <Form.Group>
    <label><b>Country of residence</b></label><br/>
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
  <Button variant="primary" type="submit">Total payment </Button>
</Form>
</div>
<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
<img src={require('../images/calculator.jpg')} className="imgc" alt="calculator" />
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
</div>
<h2 className="service">Latest News</h2>
<CardGroup>

        <Card>
          <CardBody>
            <img src={require('../images/tax.jpg')} alt="Card image" className="timg" />
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/tax2.jpg')} alt="Card image" className="timg" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/tax3.jpg')} alt="Card image"  className="timg"/>
          </CardBody>
        </Card>
      </CardGroup>
      </div>
    );
  }
}

export default Home;
