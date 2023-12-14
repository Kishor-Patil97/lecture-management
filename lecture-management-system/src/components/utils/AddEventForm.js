import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddEventForm.css';

export const AddEventForm = () => {
    
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

    const startTimeMenu=['09:30','11:15','14:00','15:45','17:30','19:15']
    const endTimeMenu=['11:00','12:45','15:30','17:15','19:00','20:45']
    const eventTypeMenu=['Public Holiday', 'Campus event', 'Semester Break']

  return (
    <div>
         <div className='add-event-main'>
         <div className='add-event-title'>
            <h2>Add Blocked Dates/Events</h2>
        </div>
        <div className='add-event-options'>
            <div className='date-select'>
            <p>Date</p>
            <input type="date" />
            </div>
            <div className='time-select'>
            <p>Time Frame</p>
            <FormControl className='menu' sx={{ m: 1, minWidth: 120}} size="small" >
            <InputLabel>Start time</InputLabel>
            <Select  value={startTime} onChange={handleStimeChange}>
            {startTimeMenu.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
            </Select>
            </FormControl >
            <p>to</p>
            <FormControl className='menu' sx={{ m: 1, minWidth: 120 }} size="small" >
            <InputLabel>End time</InputLabel>
            <Select value={endTime} onChange={handleEtimeChange}>
            {endTimeMenu.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
            ))} 
            </Select>
            </FormControl>
            </div>
            <div className='event-type-select'>
            <p>Event Type</p>
            <FormControl className='menu' sx={{ m: 1, minWidth: 120}} size="small">
            <InputLabel>Event type</InputLabel>
            <Select value={eventType} onChange={handleEventChange}>
            {eventTypeMenu.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}  
            </Select>
            </FormControl>
            </div>
            <div className='details-select'>
            <p>Details</p>
            <input></input>
            </div>
            <div className='add-event-button'>
                <button>Submit</button>
            </div>       
        </div>
        </div>
    </div>
  )
}

export default AddEventForm
