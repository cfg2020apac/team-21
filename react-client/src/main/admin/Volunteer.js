import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './chat.css'
import axios from 'axios'
import DataTable from 'react-data-table-component';
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
// {
//     "id": "97",
//     "first_name": "Chia",
//     "last_name": "Kellerman",
//     "interests": "Food Assistance",
//     "gender": "male",
//     "phonenumber": "83964773",
//     "job_skill": "Administrative/General Office Support",
//     "age": "12",
//     "language": "English"
// },
const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'First Name',
        selector: 'first_name',
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: 'last_name',
        sortable: true,
    },
    {
        name: 'interests',
        selector: 'interests',
        sortable: true,
    },
    {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
    },
    {
        name: 'Phone Number',
        selector: 'phonenumber',
        sortable: true,
    },
    {
        name: 'Job Skill',
        selector: 'job_skill',
        sortable: true,
    },
    {
        name: 'Age',
        selector: 'age',
        sortable: true,
    },
    {
        name: 'Language',
        selector: 'language',
        sortable: true,
    }
];
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
export default function AdminVolunteer() {
    const [events, setEvents] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(initEvent)
    const [msg, setMsg] = useState('')
    useEffect(async () => {
        const result = await axios.get(
            'http://localhost:8000/event',
        );


        const result2 = await axios.get(
            'http://localhost:8000/volunteer',
        );

        console.log(result.data)
        console.log(result2.data)
        setEvents(result.data)
        setVolunteers(result2.data)
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
                            <Link to="/admin/dashboard" component="a" className="item fa fa-bar-chart fa-2x"></Link>

                            <hr></hr>
                            <Link to="/admin" component="a" className="item fa fa-cog fa-2x"></Link>

                            <hr></hr>
                            <Link to="/admin/volunteer" component="a" className="item fa fa-users fa-2x"></Link>

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
                        <div className="media-body" style={{ overflow: 'scroll', maxHeight: '500px' }}>
                            <DataTable
                                title="Current Volunteers"
                                columns={columns}
                                data={volunteers}
                            />
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