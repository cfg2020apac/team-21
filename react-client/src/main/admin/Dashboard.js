import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './chat.css'
import axios from 'axios'
const initEvent = {
    age_range: "old",
    end_date: "2020/3/11",
    id: "1",
    job_skill: "Graphic Design",
    location: "Tai Po",
    maximum_attendance: "15",
    ngo_name: "c",
    start_date: "2020/3/10",
    status: "pending"
}
export default function Dashboard() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(initEvent)
    const [msg, setMsg] = useState('')
    useEffect(async () => {
        const result = await axios.get(
            'http://localhost:8000/event',
        );

        console.log(result.data)
        setEvents(result.data)
    }, []);
    const updateEvent = (id) => {
        if (msg === 'yes') {
            console.log("update")
            alert("Approved!!")
            selectedEvent.status = "approved"
            for (let i = 0; i < events.length; ++i) {
                if (events[i].id == id) {
                    events[i].status = "approved"
                }
            }
        } else if (msg === 'no') {
            alert("Disapproved!!")
            console.log("sorry")
            selectedEvent.status = "disapproved"
            for (let i = 0; i < events.length; ++i) {
                if (events[i].id == id) {
                    events[i].status = "disapproved"
                }
            }
        }
        setSelectedEvent({ ...selectedEvent })
        setEvents([...events])
        setMsg('')

    }
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
                                <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a> */}

                            {events.map(e =>
                                <a key={e.id} href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0" style={e.status == 'approved' ? { backgroundColor: '#007bff', color: 'white' } : {}} onClick={() => setSelectedEvent(e)}>
                                    <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                        <div className="media-body ml-4">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0">Sample Event - {e.status}</h6><small className="small font-weight-bold">{e.start_date}</small>
                                            </div>
                                            <p className="font-italic text-muted mb-0 text-small">{e.location}</p>
                                        </div>
                                    </div>
                                </a>
                            )}


                        </div>
                    </div>
                </div>
            </div>
            {/* Chat Box*/}
            <div className="col-sm-8" >
                <div className="px-4 py-5 chat-box bg-white navbar" style={{ 'height': '100vh' }}>
                    {/* Sender Message*/}


                    {/* const initEvent = {
    age: "26",
    end_date: "2020/3/11",
    id: "1",
    job_skill: "Graphic Design",
    location: "Tai Po",
    maximum_attendance: "15",
    ngo_name: "c",
    start_date: "2020/3/10",
    status: "pending"
} */}
                    {/* Reciever Message*/}
                    <div className="media w-100 ml-auto mb-3">
                        <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                <strong style={{ color: 'white' }}>Selected Event:</strong>
                                <p className="text-small mb-0 text-white">Sample Event {selectedEvent.id} by {selectedEvent.ngo_name}: {selectedEvent.location}, {selectedEvent.job_skill}, At most {selectedEvent.maximum_attendance} people ({selectedEvent.age_range})</p>
                            </div>
                            <p className="small text-muted">{selectedEvent.start_date} ~ {selectedEvent.end_date} </p>
                        </div>
                    </div>
                    {/* Sender Message*/}
                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">The above is event detail! you wanna approve?</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <form action="#" className="bg-light" style={{ 'width': '100%', 'position': 'relative', 'top': '80px' }}>
                        <div className="input-group">
                            <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                            <div className="input-group-append">
                                <button id="button-addon2" className="btn btn-link"> <i className="fa fa-paper-plane" onClick={() => { updateEvent(selectedEvent.id) }} /></button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>


        </div >
    );
}