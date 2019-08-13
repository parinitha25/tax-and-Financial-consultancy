// import React, { Component } from 'react';
// import axios from 'axios';
// import './CSS/Schedule.css';
// import Navbar from './Navbar';


// class Schedule extends Component {
//     state = { users:[]
//     }
//     componentDidMount(){
//       debugger
//         axios.get('http://localhost:8000/appt')
//         .then(res => {
//             this.setState({users:res.data});
//             console.log(this.state.users);
//         });
//     }
//     render() {
//       return (
//         <div>
//           <Navbar/>
//             <div className="row1">
//                 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
//                 <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
//                 <div className='apptname'><i>Schedule</i></div>
//                 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
//                 </div>
//             </div>
//             <div className="row1"> 
//               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><p className="schheading">Name</p>
//               <div className="schheadingp">{this.state.users.map(user => <p>{user.name}</p>)}</div></div>
//               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><p className="schheading">Email</p>
//               <div className="schheadingp">{this.state.users.map(user => <p>{user.email}</p>)}</div></div>
//               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><p className="schheading">Date</p>
//               <div className="schheadingp">{this.state.users.map(user => <p>{user.date}</p>)}</div></div>
//               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><p className="schheading">Time</p>
//               <div className="schheadingp">{this.state.users.map(user => <p>{user.time}</p>)}</div></div>
//               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 "><p className="schheading">action</p>
//               <div><button type="submit" value="Edit" className="sendbta">edit</button></div></div>
//               <hr/>
              
//               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
//               {/* <button type="submit" value="Edit" className="sendbta">edit</button> */}
//               </div>
//             </div>
//             <div className="row1"> 
//               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
//               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
//                 <input type="button" value="Edit" className="sendbta"></input>
//               </div>
//               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//                 <input type="button" value="Delete" className="sendbta"></input>
//               </div>
//               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
//             </div>
//         </div>
//     );
// }
// }

// export default Schedule;
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Schedule extends Component {

  constructor(props) {
      super(props);
      this.state = {Users: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8000/appt')
        .then(response => {
          this.setState({ Users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.Users.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Time</th>
                <th>Date</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }