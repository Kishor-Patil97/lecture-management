import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddEvents.css';
import {Navbar} from '../NavigationBar/Navbar'

 export const AddEvents = () => {

    const [eventType, setEventType] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');

    const handleEventChange = (event) => {
        setEventType(event.target.value);
    };
    const handleStimeChange = (event) => {
        setStartTime(event.target.value);
    };
    const handleEtimeChange = (event) => {
        setEndTime(event.target.value);
    };

    return(
        <>
        <Navbar/>
        <div className='add-event-main'>
         <div className='add-event-title'>
            <h2>Add Blocked Dates/Events</h2>
        </div>
        <div className='add-event-options'>
            <div className='date-select'>
            <p>Date</p>
            <input size="small"></input>
            </div>
            <div className='time-select'>
            <p>Time Frame</p>
            <FormControl sx={{ m: 1, minWidth: 120}} size="small" >
            <InputLabel id="time-select-label">Start time</InputLabel>
            <Select
                labelId="time-select-label"
                id="time-simple-select"
                value={startTime}
                label="Select"
                onChange={handleStimeChange}
            >
                <MenuItem value={9}>09:00</MenuItem>
                <MenuItem >11:00</MenuItem>
                <MenuItem >02:00</MenuItem>
                <MenuItem >05:30</MenuItem>
            </Select>
            </FormControl >
            <p>to</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
            <InputLabel id="time-select-label">End time</InputLabel>
            <Select
                labelId="time-select-label"
                id="time-simple-select"
                value={endTime}
                label="Select"
                onChange={handleEtimeChange}
            >
                <MenuItem value={11}>12:45</MenuItem>
                <MenuItem value={12}>02:00</MenuItem>
                <MenuItem >05:15</MenuItem>
                <MenuItem >08:45</MenuItem>
            </Select>
            </FormControl>
            </div>
            <div className='details-select'>
            <p>Details</p>
            <input></input>
            </div>
            <div className='event-type-select'>
            <p>Event Type</p>
            <FormControl sx={{ m: 1, minWidth: 120}} size="small">
            <InputLabel id="select-label">Event type</InputLabel>
            <Select
                labelId="select-label"
                id="simple-select"
                value={eventType}
                label="Select"
                onChange={handleEventChange}
            >
                <MenuItem value={10}>Public Holiday</MenuItem>
                <MenuItem value={20}>College event</MenuItem>
                <MenuItem value={30}>Semester break</MenuItem>
            </Select>
            </FormControl>
            </div>
            <div className='add-event-button'>
                <button>Submit</button>
            </div>       
        </div>
        <div className='add-event-table'>
            <table>
                <tr>
                <th>Date</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Event Details</th>
                <th>Event type</th>
                </tr>
                <tr></tr>
                <tr></tr>
                
            </table>

        </div>
        </div>   
        </>
    )
}

export default AddEvents;

