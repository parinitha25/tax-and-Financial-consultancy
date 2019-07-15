import React, { Component } from 'react';
import logot from '../logot.svg';
import '../App.css';
import download from '../images/download.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="style">
                <img src={logot} className="img" alt="logo" />
                    <a href="./home">Home</a>
                    <a href="./home">AboutUs</a>
                    <a href="./home">Services</a>
                    <a href="./home">Pages</a>
                    <a href="./home">ContactUS</a>
                </nav>    
                {/* <mdb-carousel [isControls]="false" [animation]="'slide'"> */}
  <mdb-carousel-item>
    <img  src=" logot" alt="First slide"></img>
  </mdb-carousel-item>
  {/* <mdb-carousel-item>
    <img  src="download" alt="Second slide"></img>
  </mdb-carousel-item>
  <mdb-carousel-item>
    <img  src="download" alt="Third slide"></img>
  </mdb-carousel-item> */}
{/* </mdb-carousel> */}
            </div>
        );
    }
} 

export default Home;
