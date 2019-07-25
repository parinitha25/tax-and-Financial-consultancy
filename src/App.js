import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Appointment from './Components/Appointment';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Ourclient from './Components/Ourclient';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/home' component={Home}></Route> 
      <Route exact path='/signin' component={Login}></Route> 
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/appt' component={Appointment}></Route>
      <Route exact path='/about' component={About}></Route> 
      <Route exact path='/service' component={Service}></Route>    
      <Route exact path='/contact' component={Contact}></Route> 
      <Route exact path='/ourc' component={Ourclient}></Route>
      <Route exact path='/foot' component={Footer}></Route>
    
      
      </Switch>
      </Router>

    </div>
  );
}

export default App;
