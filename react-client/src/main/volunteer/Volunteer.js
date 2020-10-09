import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './volunteer.css'

export default function Volunteer_Chat() {
    return (

        <div className="row">
            <div className="col-sm-1 px-0" style={{ 'maxWidth': '90px' }}>
                <div className="bg-white">
                    <div className="navbar" style={{ 'overflow': 'scroll', 'height': '100vh' }}>
                        <li>s</li>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 px-0">
                <div className="bg-white">
                    <div className="bg-gray px-4 py-2 bg-light">
                        <p className="h5 mb-0 py-1">Recent</p>
                    </div>
                    <div className="messages-box" style={{ 'overflow': 'scroll', 'height': '90vh' }}>
                        <div className="list-group rounded-0">
                            <a className="list-group-item list-group-item-action active text-white rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Event_name<small className="small font-weight-bold"> company_name</small></h6><small className="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p className="font-italic mb-0 text-small">Location: Wanchai</p>
                                        <p className="font-italic mb-0 text-small">Skillset: skill_set1</p>
                                    </div>
                                </div>
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
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat Box*/}
            <div className="col-sm-8" style={{ 'height': '100vh' }}>
                <div className="px-4 py-5 chat-box bg-white" >
                    {/* Sender Message*/}
                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                                <h5>Event_name 
                                    <small class="text-muted"> company_name</small>
                                </h5>
                                <p className="text-small mb-0 text-muted">Location: WanChai</p>
                                <p className="text-small mb-0 text-muted">In this event, you will be participating in skill_set1</p>
                                <p className="text-small mb-0 text-muted">more info...</p>
                            </div>
                            <p className="small text-muted">event_time | event_date</p>
                        </div>
                    </div>
                </div>
                {/* Typing area */}
                <form action="#" className="bg-light">
                    <div className="input-group">
                        <input type="text" placeholder="Apply now to volunteer!" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" disabled/>
                        <div className="input-group-append">
                            <button type="submit" class="btn btn-primary">Apply!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}