import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>     
      <Route exact path='/pract1' component={Home}></Route> 
      {/* <Route exact path='/pract2' component={Registercomponent}></Route> 
      <Route exact path='/pract3' component={User}></Route>  */}
      </Switch>
      </Router>

    </div>
  );
}

export default App;
