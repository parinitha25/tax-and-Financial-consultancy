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
import Schedule from './Components/Schedule';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (  
    (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
      <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
/>
);


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/signin' component={Login}></Route> 
        <Route exact path='/signup' component={Signup}></Route>
        <PrivateRoute exact path="/appt" component={Appointment} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/service" component={Service} />
        <PrivateRoute exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/ourc" component={Ourclient} />
        <PrivateRoute exact path="/foot" component={Footer} />
        <PrivateRoute exact path="/sch" component={Schedule} />   
      </Switch>
    </Router>
    </div>
  );
}

export default App;