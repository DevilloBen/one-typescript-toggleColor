import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Home ,Dashboard,Login,SignUp} from './components'
import { AuthProvider }from './components/Auth'




function App() {

  

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component = {Home}></Route>
          <Route exact path="/dashboard" component = {Dashboard}></Route>
          <Route exact path="/login" component = {Login}></Route>
          <Route exact path="/signup" component = {SignUp}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
