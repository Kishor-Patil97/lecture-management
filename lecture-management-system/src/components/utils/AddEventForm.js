import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddEventForm.css';

export const AddEventForm = ({onSubmit}) => {
    const [formState, setFormState] = useState(
        {
            startdate: "", enddate: "", startime:"", endtime:"", eventype:"", eventdetails:"" ,
        }
      );

      const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        onSubmit(formState);
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
        <div className='add-event-wrapper'>
        <div className='add-event-options'>
            <div className='date-select'>
                <p>Start Date</p>
                 <input type="date" name='startdate' value={formState.startdate} onChange={handleChange}/>
                 <p>End Date</p>
                <input type="date" name='enddate' value={formState.enddate} onChange={handleChange}/>
            </div>

            <div className='time-select'>
                <p>Time</p>
                <FormControl className='menu' sx={{ m: 1, minWidth: 120}} size="small" >
                <InputLabel id='label'>Start time</InputLabel>
                <Select  name='startime' value={formState.startime} onChange={handleChange}>
                {startTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
                </Select>
                </FormControl >
                <p>to</p>
                <FormControl className='menu' sx={{ m: 1, minWidth: 120 }} size="small" >
                <InputLabel id='label'>End time</InputLabel>
                <Select name='endtime' value={formState.endtime} onChange={handleChange}>
                {endTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))} 
                </Select>
                </FormControl>
            </div>
            
            <div className='event-type-select'>
            <p>Event Type</p>
                <FormControl className='menu' sx={{ m: 1, minWidth: 120}} size="small">
                <InputLabel id='label'>Event type</InputLabel>
                <Select name='eventype' value={formState.eventype} onChange={handleChange}>
                {eventTypeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}  
                </Select>
                </FormControl>
            </div>

            <div className='details-select'>
                <p>Details</p>
                <input type='text' name='eventdetails' value={formState.eventdetails} onChange={handleChange}></input>
            </div>
            
            <div className='add-event-button'>
                <button onClick={handleSubmit}>Submit</button>
            </div>       
        </div>
        </div>
        </div>
    </div>
  )
}

export default AddEventForm
