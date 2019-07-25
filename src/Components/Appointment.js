// import React, { Component } from 'react';
// import {Form} from 'react-bootstrap';
// import './CSS/Appointment.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import {mobiscroll} from "mobiscroll-react"

// class Appointment extends Component {
//   constructor(props) {
//     super(props);
//     const now = new Date();
    
//     this.state = {
//         items: [{
//             id: 1,
//             text: 'Town council meeting'
//         }, {
//             id: 2,
//             text: 'Town hall closed'
//         }, {
//             id: 3,
//             text: 'Garbage collection'
//         }, {
//             id: 4,
//             text: 'Special events'
//         }, {
//             id: 5,
//             text: 'National holidays'
//         }],
//         marked: [{
//             d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
//             color: 'rgb(28, 161, 227)'
//         }, {
//             d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8),
//             color: 'rgb(28, 161, 227)'
//         }, {
//             d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9),
//             color: 'rgb(28, 161, 227)'
//         }, {
//             d: new Date(now.getFullYear(), now.getMonth() + 1, 15),
//             color: 'rgb(28, 161, 227)'
//         }, {
//             d: '11/30',
//             color: 'rgb(163, 0, 38)'
//         }, {
//             d: '5/23',
//             color: 'rgb(163, 0, 38)'
//         }, {
//             d: '3/12',
//             color: 'rgb(163, 0, 38)'
//         }, {
//             d: '14',
//             color: 'rgb(204,204,0)'
//         }, {
//             d: 'w5',
//             color: 'rgb(34, 139, 34)'
//         }, {
//             d: '1/1',
//             color: 'rgb(250,104,0)'
//         }, {
//             d: '1/2',
//             color: 'rgb(250,104,0)'
//         }, {
//             d: '6/4',
//             color: 'rgb(250,104,0)'
//         }, {
//             d: '8/4',
//             color: 'rgb(250,104,0)'
//         }, {
//             d: '12/25',
//             color: 'rgb(250,104,0)'
//         }, {
//             d: '12/26',
//             color: 'rgb(250,104,0)'
//         }]
//     }
// }

//   render() {
//     return (
//       // <div>
//       //   <Navbar/>
//       //   <div className="row">
//       //     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//       //     <div className="backgroundci"></div>
//       //       <div className="contactpa"><i>Appointment</i></div>
//       //     </div>
//       //     <Form>
//       //       <label className="formg">Get in Touch</label>
//       //       <Form.Group >
//       //         <label><b>Name</b></label>
//       //         <input type="text" className="width"/>
//       //       </Form.Group>
//       //       <Form.Group>
//       //         <label><b>Email</b></label>
//       //         <input type="text" className="width" />
//       //       </Form.Group>
//       //       <Form.Group className="date">
//               // {/* <label><b>Date</b></label> */}
//               // {/* <input type="text" className="width" /> */}
//               <div className="md-marked">
//                <mobiscroll.Calendar 
//                    className="md-i-hide"
//                    theme="ios"
//                    display="inline"
//                    layout="liquid"
//                    markedDisplay="bottom"
//                    marked={this.state.marked}
//                    placeholder="Please Select..."
//                />
//                <mobiscroll.Listview
//                        theme="ios"
//                        itemType={ListItem} 
//                        data={this.state.items}
//                        swipe={false}
//                    />
//            </div>
//        );
//    }    
// }
//               {/* <label><b>Time</b></label>
//               <input type="text" className="width"/> */}
// //             </Form.Group>
// //               <button  type="submit" className="sendbt">Send</button>
// //               <button type="submit" className="resetbt">Reset</button>
// //           </Form>
// //             </div>
// //             <Footer/>
// //       </div>
// //     );
// //   }
// // }
// class ListItem extends React.Component {
//   render() {
//        return <li><span className={"md-marked-points md-points-type" + this.props.item.id}></span> {this.props.item.text}</li>;
//   }
// }

// export default Appointment;

// // class App extends React.Component {
  
// //    render() {
// //        return (
// //            <div className="md-marked">
// //                <mobiscroll.Calendar 
// //                    className="md-i-hide"
// //                    theme="ios"
// //                    display="inline"
// //                    layout="liquid"
// //                    markedDisplay="bottom"
// //                    marked={this.state.marked}
// //                    placeholder="Please Select..."
// //                />
// //                <mobiscroll.Listview
// //                        theme="ios"
// //                        itemType={ListItem} 
// //                        data={this.state.items}
// //                        swipe={false}
// //                    />
// //            </div>
// //        );
// //    }    
// // }

