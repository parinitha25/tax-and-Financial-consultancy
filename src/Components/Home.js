import React, { Component } from 'react';
import logot from '../logot.svg';
import '../App.css';
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
            <input type="submit" value="Make An Appointment" className="make"></input>
          </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <h2 className="service">Our Services</h2>
      <CardGroup>
        <Card>
          <CardBody>
            <CardImg src={require('../images/service1.jpg')} alt="Card image" className="cimg"/>
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <CardImg top width="100%" src={require('../images/service2.jpg')} alt="Card image" className="cimg" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardImg top width="100%" src={require('../images/service3.jpg')} alt="Card image" className="cimg" />
          </CardBody>
        </Card>
      </CardGroup>
        <div>
          <img  src={require('../images/about.png')} alt="about" className="imgb"></img>
          <input type="submit" value="Make An Appointment" className="apt"></input>
        </div>
        <h2 className="service">Tax Calculator</h2>
        <Form>
  <Form.Group>
    <label><b>Choose your Business Area</b></label><br/>
    <input type="text"  className="c" />
  </Form.Group>

  <Form.Group>
    <label><b>Employees number</b></label><br/>
    <input type="text"  />
  </Form.Group>
  <Form.Group>
    <label><b>Country of residence</b></label><br/>
    <input type="text"  />
  </Form.Group>
  <Form.Group>
    <label><b>Yearly Income</b></label><br/>
    <input type="text"  />
  </Form.Group>
  <Button variant="primary" type="submit">Total payment </Button>
</Form>
      </div>
    );
  }
}

export default Home;
