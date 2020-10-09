import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './ngo.css'
import axios from 'axios'

export default function Admin() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({ "id": "", "location": "","start_date":"" ,"status":""})
    useEffect(async () => {
        const result = await axios.get(
            'http://localhost:8000/event',
        );

        console.log(result.data)
        setEvents(result.data)
    }, []);
    // function form_display(){
    //     document.getElementById("chat-box").hidden;
    // }
     return (

        <div className="row">
            <div className="col-sm-1 px-0" style={{ 'maxWidth': '90px' }}>
                <div className="bg-white">
                    <div className="navbar" style={{ 'overflow': 'scroll', 'height': '100vh', 'margin-left': '5px' }}>
                        <div className="panel">
                            <a class='item'><i class="fa fa-bar-chart fa-2x" aria-hidden="true"></i></a>
                            <hr></hr>
                            <a class='item'><i class="fa fa-cog fa-2x" aria-hidden="true"></i></a>
                            <hr></hr>
                            <a class='item'><i class="fa fa-users fa-2x" aria-hidden="true"></i></a>
                        </div>






                    </div>
                </div>
            </div>

            <div className="col-sm-3 px-0 navbar" style={{ 'margin-left': '15px', 'padding': '0px' }}>
                <div className="bg-white" style={{ 'height': '100vh' }}>
                    <div className="bg-gray px-4 py-2 bg-light">
                        <p className="h5 mb-0 py-1">Events</p>
                    </div>
                    <div className="messages-box" style={{ 'overflow': 'scroll', 'height': '90vh' }}>
                        <div className="list-group rounded-0">
                            <a className="list-group-item list-group-item-action active text-white rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Hi! There</h6><small className="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p className="font-italic mb-0 text-small">The below event list is sorted based on the status criteria!</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                            <button type="button" class="btn btn-primary" >Add Event +</button>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            {events.map(e =>
                                <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0" onClick={() => setSelectedEvent(e)}>
                                    <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                        <div className="media-body ml-4">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                            <h6 className="mb-0">{e.location}</h6><small className="small font-weight-bold">{e.start_date}</small>
                                            </div>
                                            <p className="font-italic text-muted mb-0 text-small">Status: {e.status}</p>
                                        </div>
                                    </div>
                                </a>
                            )}


                        </div>
                    </div>
                </div>
            </div>
            {/* Chat Box*/}
            <div className="col-sm-8" id="chat-box">
                <div className="px-4 py-5 chat-box bg-white navbar" style={{ 'height': '100vh' }}>


                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body mr-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                            <p className="text-small mb-0 text-muted">Event Location: {selectedEvent.location}</p>
                            <p className="text-small mb-0 text-muted">Start Date: {selectedEvent.start_date}</p>
                            <p className="text-small mb-0 text-muted">Status: {selectedEvent.status}</p>
                            </div>

                        </div>
                    </div>
                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    {/* Reciever Message*/}
                    <div className="media w-50 ml-auto mb-3">
                        <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    {/* Sender Message*/}
                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    
                    {/* Reciever Message*/}
                    <div className="media w-50 ml-auto mb-3">
                        <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    <form action="#" className="bg-light" style={{ 'width': '100%', 'position': 'relative', 'top': '80px' }}>
                        <div className="input-group">
                            <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                            <div className="input-group-append">
                                <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane" /></button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div >
    );
}