import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './chat.css'
import axios from 'axios'
import { VegaLite } from 'react-vega';
const barchart1 = {
    spec: {
        width: 300,
        height: 200,
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' },
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
    },
    data: {
        table: [
            { a: 'Hunger & homelessness', b: 146 },
            { a: 'Elderly', b: 77 },
            { a: 'Environmental education; Hunger & homelessness', b: 47 },
            { a: 'Animals', b: 43 },
            { a: 'Children and youth; Elderly; Hunger & homelessness', b: 36 },
            { a: 'Children and youth; People with disabilities', b: 21 },
            { a: 'Environmental education', b: 14 },
            { a: 'Hungers and homeless', b: 14 },
            { a: 'Children and youth', b: 13 },
            { a: 'People with disabilities; People with mental illness', b: 12 },
            { a: 'Children and youth; Environmental education', b: 11 },
            { a: 'Integrated', b: 7 },
            { a: 'Elderly; People with illness', b: 6 },
            { a: 'Children and youth; Ethnic minorities', b: 4 },
            { a: 'Children and youth; Ethnic minorities', b: 2 },
            { a: 'Women', b: 2 },
            { a: 'Environmental education; Integrated', b: 2 },
            { a: 'Adults; Children and youth; Elderly', b: 2 },
            { a: 'Environmental education; Women', b: 1 },
            { a: 'Adults; Elderly; Environmental education', b: 1 },
            { a: 'Children and youth; Refugees and asylum seekers', b: 1 },
            { a: 'Refugees and asylum seekers', b: 1 },
            { a: 'Adults; Children and youth; Elderly; People with disabilities', b: 1 },
            { a: 'People with mental illness', b: 1 }

        ],
    }

}

const piechart = {
    spec: {
        mark: 'arc',
        encoding: {
            "theta": { "field": "value", "type": "quantitative" },
            "color": { "field": "Language", "type": "nominal" }
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
        "view": { "stroke": null }
    }, data: {
        table: [
            { "Language": "English", "value": 39 },
            { "Language": "Mandarin", "value": 23 },
            { "Language": "Cantonese", "value": 28 }
        ],
    }
}



const barchart2 = {
    data: {
        table: [
            { a: 'Yuen Long', b: 32 },
            { a: 'North', b: 66 },
            { a: 'Tai Po', b: 142 },
            { a: 'Central & Western', b: 50 },
            { a: 'Kowloon City', b: 171 },
            { a: 'Islands', b: 119 },
            { a: 'Sha Tin', b: 56 },
            { a: 'Sham Shui Po', b: 118 },
            { a: 'Kwai Tsing', b: 86 },
            { a: 'Sai Kung', b: 72 },
            { a: 'Wong Tai Sin', b: 97 },
            { a: 'Yau Tsim Mong', b: 88 },
            { a: 'Tsuen Mun', b: 72 },
            { a: 'Southern', b: 91 },
            { a: 'Kwun Tong', b: 57 },
            { a: 'Wan Chai', b: 31 },
            { a: 'Eastern', b: 60 }

        ]
    },
    spec: {
        width: 300,
        height: 100,
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' },
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
    }

}


// const pieData = {
//     table: [
//         { a: 'English', b: 39 },
//         { a: 'Mandarin', b: 33 },
//         { a: 'Cantonese', b: 28 }
//     ],
// }



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

export default function AdminDashboard() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(initEvent)
    const [msg, setMsg] = useState('')
    const [command, setCommand] = useState('')
    const [showbar, setShowBar] = useState(false)
    const [showpie, setShowPie] = useState(false)
    useEffect(async () => {
        const result = await axios.get(
            'http://localhost:8000/event',
        );

        console.log(result.data)
        setEvents(result.data)
    }, []);
    const updateCommand = (id) => {
        if (msg === 'approve') {
            console.log("update")
            alert("Approved!!")
            selectedEvent.status = "approved"
            for (let i = 0; i < events.length; ++i) {
                if (events[i].id == id) {
                    events[i].status = "approved"
                }
            }
            setSelectedEvent({ ...selectedEvent })
            setEvents([...events])

        } else if (msg === 'disapprove') {
            alert("Disapproved!!")
            console.log("sorry")
            selectedEvent.status = "disapproved"
            for (let i = 0; i < events.length; ++i) {
                if (events[i].id == id) {
                    events[i].status = "disapproved"
                }
            }
            setSelectedEvent({ ...selectedEvent })
            setEvents([...events])

        } else if (msg == 'showbar') {
            setShowBar(true)
        } else if (msg == 'showpie') {
            setShowPie(true)
        } else if (msg == 'clear') {
            setShowPie(false)
            setShowBar(false)
        }
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
                    <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                        <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Please type chart name to show the dashboard!!</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    {/* <div className="media w-100 ml-auto mb-3">
                        <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                <strong style={{ color: 'white' }}>Selected Event:</strong>
                                <p className="text-small mb-0 text-white">Sample Event {selectedEvent.id} by {selectedEvent.ngo_name}: {selectedEvent.location}, {selectedEvent.job_skill}, At most {selectedEvent.maximum_attendance} people ({selectedEvent.age_range})</p>
                            </div>
                            <p className="small text-muted">{selectedEvent.start_date} ~ {selectedEvent.end_date} </p>
                        </div>
                    </div> */}
                    {(showbar) ? <span> <VegaLite spec={barchart1.spec} data={barchart1.data} />
                        <VegaLite spec={barchart2.spec} data={barchart2.data} /></span> : null}



                    {(showpie) ? <span> <VegaLite spec={piechart.spec} data={piechart.data} />
                    </span> : null}


                    <form action="#" className="bg-light" style={{ 'width': '95%', 'position': 'absolute', 'bottom': '50px' }}>
                        <div className="input-group">
                            <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                            <div className="input-group-append">
                                <button id="button-addon2" className="btn btn-link"> <i className="fa fa-paper-plane" onClick={() => { updateCommand(selectedEvent.id) }} /></button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>


        </div >
    );
}