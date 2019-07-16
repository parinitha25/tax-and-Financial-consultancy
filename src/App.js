import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Appointment from './Components/Appointment';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>     
      <Route exact path='/pract1' component={Home}></Route> 
      <Route exact path='/pract2' component={Login}></Route> 
      <Route exact path='/pract3' component={Signup}></Route>
      <Route exact path='/pract4' component={Appointment}></Route>  
      </Switch>
      </Router>

    </div>
  );
}

export default App;
