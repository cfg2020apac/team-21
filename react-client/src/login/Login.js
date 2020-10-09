import React from 'react'
import 'login.css'

export default class Login extends React.Component {
    render() {
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
                                <button type="submit" className="btn btn-black">Login</button>
                                <button type="submit" className="btn btn-secondary pink">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}