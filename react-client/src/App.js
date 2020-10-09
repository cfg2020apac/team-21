import React from 'react';
import Main from './main/Main';
import Login from './login/Login'
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
