import React, {useEffect, useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './ScheduleForm.css';
import axios from 'axios';


const startTimeMenu=['09:30','11:15','14:00','15:45','17:30','19:15']
const endTimeMenu=['11:00','12:45','15:30','17:15','19:00','20:45']
const weeks=['Week 1', 'Week 2', 'Week 3','Week 4', 'Week 5']
const professors=[
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
]

export const ScheduleForm = ({onSubmit}) => {
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getEvents');
        setEventData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, []);
  const [lecFormState, setLecFormState] = useState(
    { id: "", week:'', date: '', startTime: '', endTime: '', description: '', professors: '', lectureUnits: '' },   
  );

  const handleChange = (e) => {
    setLecFormState({ ...lecFormState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(lecFormState);
  };

  const lectureUnits=()=>{
    if ((lecFormState.startTime === '09:30' && lecFormState.endTime === '11:00') || (lecFormState.startTime === '11:15' && lecFormState.endTime === '12:45')|| 
    (lecFormState.startTime === '14:00' && lecFormState.endTime === '15:30')||(lecFormState.startTime === '15:45' && lecFormState.endTime === '17:15')||
    (lecFormState.startTime === '17:30' && lecFormState.endTime === '19:00')||(lecFormState.startTime === '19:15' && lecFormState.endTime === '20:45')){
      return 2;
    } else if ((lecFormState.startTime === '09:30' && lecFormState.endTime === '12:45') || (lecFormState.startTime === '14:00' && lecFormState.endTime === '17:15')||
    (lecFormState.startTime === '17:30' && lecFormState.endTime === '12:45')) {
      return 4;
    } else if ((lecFormState.startTime === '09:30' && lecFormState.endTime === '17:15')){
      return 8;
    } else {
      return 0;
    }
  }
 

  return (
           <div className='schedule-form-wrapper'>
            <div className='schedule-form'>
              <label></label><br/>
                <label>Start Date:</label><br/>
                <p></p>
                <label>End Date:</label><br/>
                <p></p>
                <label>Message:</label><br/>
                <p></p>
                <h3>Schedule Lecture</h3><br/>
                <label>Week</label><br/>
                <Select className="Select" style={{fontSize:'small'}}  name='week' value={lecFormState.week} onChange={handleChange}>
                {weeks.map((option) => (
                <MenuItem  style={{fontSize:'small'}} key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Date</label><br/>
                 <input type="date" name='date' value={lecFormState.date} onChange={handleChange}/><br/>
                 <label>Start time</label><br/>
                <Select className="Select" style={{fontSize:'small'}}  name='startTime' value={lecFormState.startTime} onChange={handleChange}>
                {startTimeMenu.map((option) => (
                <MenuItem  style={{fontSize:'small'}} key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>End time</label><br/>
                <Select className="Select" style={{fontSize:'small'}}  name='endTime' value={lecFormState.endTime} onChange={handleChange} onChangeCapture={lectureUnits}>
                {endTimeMenu.map((option) => (
                <MenuItem  style={{fontSize:'small'}} key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Professors</label><br/>
                <Select className="Select"  type='checkbox' style={{fontSize:'small'}}  name='professors' value={lecFormState.professors} onChange={handleChange}>
                {professors.map((option) => (
                <MenuItem  style={{fontSize:'small'}} key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Description</label><br/>
                <input type='type' name='description' value={lecFormState.description} onChange={handleChange}></input><br/>
                <label >Lecture Units:</label>
                <input type='number' value={lectureUnits()} onChange={handleChange}  readOnly></input>
                <label>Conflict message:</label>
                <p></p>
                <div className='schedule-form-button'>
                <button onClick={handleSubmit}>Add</button>
                </div>
            </div>
      </div>
  )
}

export default ScheduleForm
