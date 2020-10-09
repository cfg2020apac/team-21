import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './chat.css'

export default function Chat() {
    return (
        // <div>

        //     <div className="navigation navbar navbar-light justify-content-center py-xl-7" style={{ 'background': 'white', 'width': '90px', 'height': '100vh' }}>
        //         <a><i class="fa fa-calendar-o" aria-hidden="true"></i></a>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="row">
        //             <li>sdfsdf</li>
        //         </div>
        //     </div>
        // </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    One of three columns
                </div>
                <div class="col-sm-6">
                    One of three columns
                </div>
                <div class="col-sm-3">
                    One of three columns
                </div>
            </div>
        </div>
    );
}