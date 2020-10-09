

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
    //const[showing,setShowing] = useState(false);
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
                            {/* <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                            <button type="button" class="btn btn-primary" onClick ={()=>{}}>Add Event +</button>
                            </a> */}
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Create new event</h6><small className="small font-weight-bold">14 Dec</small>
                                        </div>
                                        
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
            <div className="col-sm-8" id="chat-box"style={{ display: 1 ? "block" : "none" }}>
                <div className="px-4 py-5 chat-box bg-white navbar" style={{ 'height': '100vh' }}>

                <h2>NGO Partner: Volunteer Services Request Form</h2>
                    {/* <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
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
                    </div> */}
                    {/* Reciever Message*/}
                    <div className="media w-50 ml-auto mb-3">
                        <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2"style={{ 'position': 'relative', 'top': '0px' }}>
                                <p className="text-small mb-0 text-white">Please fill in the form </p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    {/* Sender Message*/}
                    <div className="media w-50 mb-3"style={{ 'overflow': 'scroll', 'height': '60vh','position': 'relative', 'top': '80px' }}><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                            <form>


                            <div class="form-group row">
                            <label for="inputNGO" class="col-sm-2 col-form-label">NGO Name</label>
                                <div class="col-sm-10">
                                    <input type="ngo" class="form-control" id="inputNGO" placeholder="NGO Name"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputIRD_file_number" class="col-sm-2 col-form-label">IRD File Number</label>
                                    <div class="col-sm-10">
                                        <input type="IRD_file_number" class="form-control" id="inputIRD_file_number" placeholder="IRD File Number"/>
                                    </div>
                            </div>

                            <div class="form-group row">
                            <label for="input_program_name" class="col-sm-2 col-form-label">Program Name</label>
                                <div class="col-sm-10">
                                    <input type="program_name" class="form-control" id="input_program_name" placeholder="Program Name"/>
                                </div>
                            </div>

                            <div class="form-group row">
                            <label for="inputNGO" class="col-sm-2 col-form-label">Location</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="location" placeholder="Location"/>
                                </div>
                            </div>


                            <div class="form-group row" id="times">
                                <label for="time_input" class="col-2 col-form-label">Start date</label>
                                <div class="col-10">
                                <input class="form-control" type="date" value="2011-08-19" id="time_input"/>
                                </div>
                            </div>

                            <div class="form-group row" id="times">
                                <label for="time_input" class="col-2 col-form-label">End date</label>
                                <div class="col-10">
                                <input class="form-control" type="date" value="2011-08-20" id="time_input"/>
                                </div>
                            </div>

                            <div class="form-group row">
                            <label for="maximum_attendance" class="col-sm-2 col-form-label">Number of people</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" id="maximum_attendance" placeholder=""/>
                                </div>
                            </div>

                            <div class="form-group " id ="languages">
                                    <label for="input_roles" >Language requirement</label>
                                    <div class="form-check"class="col-sm-2 col-form-label">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label class="form-check-label" for="defaultCheck1">
                                    English
                                    </label>
                                    </div>

                                    <div class="form-check"class="col-sm-2 col-form-label">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">
                                     Mandarin
                                    </label>
                                    </div>

                                    <div class="form-check"class="col-sm-2 col-form-label">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                    <label class="form-check-label" for="defaultCheck2">
                                    Cantonese
                                    </label>
                                    </div>
                            </div>    

                                      <div class="form-group ">
            <label for="min_age" >Range of age</label>
            <div class="col">
              <input type="number" class="form-control " id="min_age" placeholder="Minimum age"/>
            </div>
            <label for="min_age" ></label>
            <div class="col">
              <input type="number" class="form-control"id="max_age" placeholder="Maximum age"/>
            </div>
          </div>       
                        
                        </form>
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