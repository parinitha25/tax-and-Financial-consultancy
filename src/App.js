import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
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
import Calculator from './Components/Calculator';
import Schedule from './Components/Schedule';

// import { Route, Switch,  } from 'react-router-dom';


const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (
  (localStorage.getItem('token') && localStorage.getItem('user')) ? (
  <IncomingComponent {...props} />
  ) : (
  <Redirect to={{
  pathname: '/appt',
  state: { from: props.location },
  }}
  />
  )
  )}
  />
  );

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
      <Route exact path='/calci' component={Calculator}></Route>
      <Route exact path='/sch' component={Schedule}></Route>

      <PrivateRoute exact path="/appt" component={Appointment} />
      {/* <PrivateRoute exact path="/confidentiality" component={Confidentiality} /> */}
    
    
      
      </Switch>
      </Router>

    </div>
  );
}

export default App;
