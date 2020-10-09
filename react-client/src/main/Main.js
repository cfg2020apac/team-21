import React from 'react';
import About from './about/About';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Chat from './chat/Chat';
import Admin from './admin/Admin';
import Volunteer from './volunteer/Volunteer';
import Ngo from './ngo/ngo';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Login extends React.Component {
    render() {
        return (
            <div>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light mb-1 sidebar">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" component="a" className="nav-link">Home</Link>
                            <Link to="/about" component="a" className="nav-link">About</Link>
                            <Link to="/dashboard" component="a" className="nav-link">Dashboard</Link>
                        </div>
                    </div>
                </nav> */}



                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/volunteer">
                        <Volunteer />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>

                    <Route path="/ngo">
                        <Ngo />
                    </Route>

                </Switch>

            </div>
        )
    }
}
