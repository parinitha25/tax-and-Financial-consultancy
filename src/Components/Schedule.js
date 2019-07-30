import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
    state = { users:[]}
    componentDidMount(){
        axios.get('http://localhost:8000/appt')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    render() {
        return (
            <div>
                <p>Schedule</p>
                <p>{this.state.users}</p>   
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