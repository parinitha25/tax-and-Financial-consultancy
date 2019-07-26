import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './CSS/Appointment.css';
import Navbar from './Navbar';
import Footer from './Footer';
// import mobiscroll from '@mobiscroll/react-lite';

// mobiscroll.settings = {
//   theme: 'ios'
// };

class Appointment extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="backgroundci"></div>
            <div className="contactpa"><i>Appointment</i></div>
          </div>
          <Form>
            <label className="formg">Get in Touch</label>
            <Form.Group >
              <label><b>Name</b></label>
              <input type="text" className="width"/>
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label>
              <input type="text" className="width" />
            </Form.Group>
            <Form.Group className="date">
              <label><b>Date</b></label> */}
              <input type="text" className="width" />
              {/* <mobiscroll.Form>
              <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>Try different display modes</mobiscroll.FormGroupTitle>
        <label>
                      Bubble
                      <mobiscroll.Date
                          display="bubble"
                          placeholder="Please Select..."
                      />
                  </label>
              </mobiscroll.FormGroup>
              <mobiscroll.FormGroup className="mbsc-padding">
                  <p className="mbsc-thin">With inline display you can embed the Date & Time component in almost any markup or form.</p>
              </mobiscroll.FormGroup>
              <mobiscroll.FormGroup>
                  <mobiscroll.FormGroupTitle>Embedded date picker</mobiscroll.FormGroupTitle>
                  <mobiscroll.Date
                      type="hidden"
                      display="inline"
                      layout="liquid"
                      placeholder="Please Select..."
                  />
              </mobiscroll.FormGroup>
          </mobiscroll.Form> */}
  

              <label><b>Time</b></label>
              <input type="text" className="width"/>
            </Form.Group>
              <button  type="submit" className="sendbt">Send</button>
              <button type="submit" className="resetbt">Reset</button>
          </Form>
        </div>
          <Footer/>
       </div>
    );
  }
}

export default Appointment;

// mobiscroll.settings = {
//   theme: 'ios'
// };

// class App extends React.Component {
//   render() {
//       return (
//           <mobiscroll.Form>
//               <mobiscroll.FormGroup>
//         <mobiscroll.FormGroupTitle>Try different display modes</mobiscroll.FormGroupTitle>
//                   <label>
//                       Bottom
//                       <mobiscroll.Date
//                           display="bottom"
//                           placeholder="Please Select..."
//                       />
//                   </label>
//                   <label>
//                       Top
//                       <mobiscroll.Date
//                           display="top"
//                           placeholder="Please Select..."
//                       />
//                   </label>
//                   <label>
//                       Center
//                       <mobiscroll.Date
//                           display="center"
//                           placeholder="Please Select..."
//                       />
//                   </label>
//                   <label>
//                       Bubble
//                       <mobiscroll.Date
//                           display="bubble"
//                           placeholder="Please Select..."
//                       />
//                   </label>
//               </mobiscroll.FormGroup>
//               <mobiscroll.FormGroup className="mbsc-padding">
//                   <p className="mbsc-thin">With inline display you can embed the Date & Time component in almost any markup or form.</p>
//               </mobiscroll.FormGroup>
//               <mobiscroll.FormGroup>
//                   <mobiscroll.FormGroupTitle>Embedded date picker</mobiscroll.FormGroupTitle>
//                   <mobiscroll.Date
//                       type="hidden"
//                       display="inline"
//                       layout="liquid"
//                       placeholder="Please Select..."
//                   />
//               </mobiscroll.FormGroup>
//           </mobiscroll.Form>
//       );
//   }   
// }
