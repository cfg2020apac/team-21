import React from 'react';
import Main from './main/Main';
import Login from './login/Login'
import { fakeAuth } from './auth'
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        {/* <Route exact path="/" component={Main}></Route> */}
        <Route path='/' component={Main} ></Route>
      </Switch>
    </Router>
  );
}

