import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './registration.css'
import axios from 'axios'


export default function Registration() {
    return (
        <form className ="reg-form">
            <label className = "reg-label">
                <p className="reg-label-txt">ENTER YOUR PHONE NUMBER</p>
                <input type="text" className="reg-input" />
                <div className="reg-line-box">
                    <div className="reg-line" />
                </div>
            </label>
            <label className = "reg-label">
                <p className="reg-label-txt">ENTER YOUR FIRST NAME</p>
                <input type="text" className="reg-input" />
                <div className="reg-line-box">
                    <div className="reg-line" />
                </div>
            </label><label className = "reg-label">
                <p className="reg-label-txt">ENTER YOUR LAST NAME</p>
                <input type="text" className="reg-input" />
                <div className="reg-line-box">
                    <div className="reg-line" />
                </div>
            </label>
            <label className = "reg-label">
                <p className="reg-label-txt">ENTER YOUR PASSWORD</p>
                <input type="text" className="reg-input" />
                <div className="reg-line-box">
                    <div className="reg-line" />
                </div>
            </label>
            <Link to='/volunteer' type="submit" className ="reg-button">submit</Link>
      </form>
    );
}