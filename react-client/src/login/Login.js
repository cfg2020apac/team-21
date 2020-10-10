import React, { useEffect, useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Login() {
    const [path, setPath] = useState('');
    useEffect(async () => {
        setPath('')
    }, []);
    return (
        <Router>
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2><br /> Login</h2>
                        <p>Login or register. </p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="volunteer" value="volunteer" onClick={() => { setPath('/volunteer') }} />
                                    <label class="form-check-label" for="volunteer">
                                        Volunteer
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="ngo" value="ngo" onClick={() => { setPath('/ngo') }} />
                                    <label class="form-check-label" for="ngo">
                                        NGO
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="admin" value="admin" onClick={() => { setPath('/admin') }} />
                                    <label class="form-check-label" for="admin">
                                        Admin
                                    </label>
                                </div>
                                <Link to={path} component="a" className="btn btn-primary pink ml-1">Login</Link>
                                <Link to='/register' component="a" className="btn btn-seconary pink ml-1">Register</Link>
                                {/*<Link to="/registration" component="a" className="btn btn-secondary pink">Register</Link>*/}
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </Router>
    )

}