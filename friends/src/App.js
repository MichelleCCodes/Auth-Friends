import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import MyFriends from './components/MyFriends'; 
import Login from './components/Login'; 
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <Router>
<div className="App">
      <Link to="/login">Login</Link>

       {(localStorage.getItem('token') && <Link to="/friends">My Friends</Link>)}
        {/* {(localStorage.getItem('token') && <Link to="/friends/:id">Friend</Link>)} */}

        <Switch>
          <PrivateRoute path="/friends" component={MyFriends} />
          {/* <PrivateRoute path="/friends/:id" component={FriendForm} /> */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
