import React, { useState } from 'react'
import './login.css'
import {

    Link
} from "react-router-dom";

export default function Login() {
    const [path, setPath] = useState('');
    const handleChange = (event) => {
        console.log(event.target.value)
        setPath(event.target.value);
    }
    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2><br /> Login</h2>
                    <p>Login or register.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="volunteer" value="volunteer" />
                                <label class="form-check-label" for="volunteer">
                                    Volunteer
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="ngo" value="ngo" />
                                <label class="form-check-label" for="ngo">
                                    NGO
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="admin" value="admin" />
                                <label class="form-check-label" for="admin">
                                    Admin
                                    </label>
                            </div>
                            <button type="submit" className="btn btn-black mr-1">Login</button>
                            <button type="submit" className="btn btn-secondary pink">Register</button>
                            {/* <Link to={'/' + path} component="button" className="btn btn-black mr-1">Login</Link>
                            <Link to="/" component="button" className="btn btn-secondary pink">Home</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )

}