import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
    state = { users:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8000/appt')
        .then(res => {
            this.setState({users:res.data});
            console.log(this.state.users);
        });
    }
    render() {
        return (
            <div>
                <p>Schedule</p> 
                <div>
                 {this.state.users.map(user =><div> <p>name:{user.name}</p><p>email:{user.email}</p><p>time{user.time}</p><p>date:{user.date}</p></div>)}
                </div>
            </div>
        );
    }
}

export default Schedule;


// state = { users:[]}
//     componentDidMount(){
//         axios.get('http://localhost:8000/details')
//         .then(res => {
//             this.setState({users: res.data});
//             console.log(this.state.users);
//         });
//     }
//     render(){
//         return(
//             <div className='onimagetext'>
//                 Number of Staff    :   {this.state.users.map(user => <span>{user.staff}</span>)}
//             </div>
//         )
//     }
// }