import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Friend from './components/Friend'; 
import MyFriends from './components/MyFriends'; 
import Login from './components/Login'; 

function App() {
  return (
    <Router>
<div className="App">
            <Link to="/login">Login</Link>
       {(localStorage.getItem('token') && <Link to="/friends">My Friends</Link>)}
        {(localStorage.getItem('token') && <Link to="/friends/:id">Friend</Link>)}
        <Switch>
          <Route path="/friends" component={MyFriends} />
          <Route path="/friends/:id" component={Friend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
