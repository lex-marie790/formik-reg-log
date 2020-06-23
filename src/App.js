import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import { RegistrationForm } from './Components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link> 
        </div>
      
      <Switch>
          <Route exact path='/register'>
            <RegistrationForm />
          </Route>
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
