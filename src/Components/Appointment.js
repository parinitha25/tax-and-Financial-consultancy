// import React, { Component } from 'react';
// import {Form} from 'react-bootstrap';
// import './CSS/Appointment.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import DatePicker from "react-datepicker";
// import browserHistory from '../Utils/browserHistory';
// import "react-datepicker/dist/react-datepicker.css";
// import api from '../Api/index';

// class Appointment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date(),
//       name:'',
//       email:'',
//       date: new Date(),
//       time:new Date()
      
//     }; 
//   }
//   // handleChange=(date)=>{
//   //   this.setState({
//   //     startDate: date,
     
//   //   });
//   // }
//   handleDate=(date)=> {
//     this.setState({
//       date: date
//     });
//   }
//   handleChangeg=(e)=>{
//     this.setState({[e.target.name]:e.target.value});
//   }
//   handleSubmit=async(e)=>{
//     debugger
//     const { email,name,date,time} = this.state
//     const payload = { email,name,date,time}
//     e.preventDefault();
   
//     // console.log(this.state);
//     let reg_user=/^[A-Za-z0-9]{2,10}$/;
//     let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     let t=0;
//     if(!this.state.name) this.setState({namelError:'Name is required'});
//     else if(!reg_user.test(this.state.name)) this.setState({namelError:'Invalid name'});
//     else{
//         t++;
//         this.setState({namelError:''});
//     }   
//     if(!this.state.email) this.setState({emailError:'Email is required'});
//     else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
//     else {
//       t++;
//       this.setState({emailError:''});
//     }
//     if(t>1)  {
//     console.log("hii")
//      debugger
//      await api.appoit(payload).then(res => {
//       this.setState({
//         name: '',
//         email: '',
//         date:'',
//         time:''
       
//       })
//       console.log('hello')
//       browserHistory.push("/sch");
//   });
      
// } 
// }   
// // handleSignina=async()=>{
// //   debugger
// //   const { email,name,date,time} = this.state;
// //   const payload = { email,name,time,date }
// //   const signinRes = await api.login(payload)
// //   sessionStorage.setItem('authentication', signinRes.data.token)
// //   sessionStorage.setItem('userEmail', signinRes.data.email)
// //   // browserHistory.push("/sch");
// // } 

//   render() {
//     const { email, name} = this.state
//       return (
//       <div>
//         <Navbar/>
//           <div className="row1">
//             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
//             <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
//              <div className='apptname'><i>Appointment</i></div>
//              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
//             </div>
//           </div>
//           <Form onSubmit={this.handleSubmit}>
//             <label className="formg">Get in Touch</label>
//             <Form.Group className="date">
//               <label><b>Name</b></label>
//               <input type="text" className="width" name="name" onChange={this.handleChangeg} value={name}/>
//               <p className="colorform">{this.state.namelError}</p>
//             </Form.Group>
//             <Form.Group className="date">
//               <label><b>Email</b></label>
//               <input type="text" className="width"  name="email" onChange={this.handleChangeg} value={email}/>
//               <p className="colorform">{this.state.emailError}</p>
//             </Form.Group>
//             <Form.Group>
//               <label className="datet"><b>Date</b></label>
//               <DatePicker
//                   // selected={this.state.startDate}
//                   selected={this.state.date}
//                   onChange={this.handleDate}
//                   className="widthd"
//               />
//             </Form.Group>
//             <Form.Group >
//               <label className="datet"><b>Time</b></label>
//               <DatePicker
//                   // selected={this.state.startDate}
//                   selected={this.state.time}
//                   onChange={this.handleDate}
//                   showTimeSelect
//                   showTimeSelectOnly
//                   timeIntervals={15} cf
//                   dateFormat="h:mm aa"
//                   timeCaption="Time"
//                   className="widthd"
//               />
//             </Form.Group> 
//               <button type="submit" value="send" className="sendbta" >Send</button>
//               <button type="submit" className="resetbta">Reset</button>  
//           </Form>
//         {/* <Footer/> */}
//       </div>
//     );
//   }
// }
// export default Appointment;



import React, { Component } from 'react';
import axios from 'axios';
// import browserHistory from '../Utils/browserHistory';
import browserHistory from '../Utils/browserHistory';
import api from '../Api/index';

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
     name: '',
      email: '',
      date:'',
      time:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      date: e.target.value
    })
  }
  onChangeNumber(e) {
    this.setState({
      time: e.target.value
    })
  }

  // onSubmit(e) {
  //   debugger;
  //   e.preventDefault();
  //   const obj = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     date: this.state.date,
  //     time: this.state.time,

  //   };
  //    axios.post('http://localhost:8000/appt', obj)
  //      .then(res => console.log(res.data));
    
  //   this.setState({
  //     name: '',
  //     email: '',
  //     date:'',
  //     time:''
  //   })
  //   browserHistory.push('./sch');
  // }
  handleSubmit=async(e)=>{
        debugger
        const { email,name,date,time} = this.state
        const payload = { email,name,date,time}
        e.preventDefault();
           const obj = {
              name: this.state.name,
              email: this.state.email,
              date: this.state.date,
              time: this.state.time,
           }
        console.log(this.state);
        let reg_user=/^[A-Za-z0-9]{2,10}$/;
        let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let t=0;
        if(!this.state.name) this.setState({namelError:'Name is required'});
        else if(!reg_user.test(this.state.name)) this.setState({namelError:'Invalid name'});
        else{
            t++;
            this.setState({namelError:''});
        }   
        if(!this.state.email) this.setState({emailError:'Email is required'});
        else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
        else {
          t++;
          this.setState({emailError:''});
        }
        if(t>1)  {
        console.log("hii")
         debugger
         await api.appoit(payload).then(res => {
          this.setState({
            name: '',
            email: '',
            date:'',
            time:''
           
          })
          console.log('hello')
          browserHistory.push("/sch");
      });
          
    } 
    } 

 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.time}
                      onChange={this.onChangeNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}