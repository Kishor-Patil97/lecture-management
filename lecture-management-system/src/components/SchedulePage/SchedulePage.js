import React from 'react'
import {Navbar} from '../NavigationBar/Navbar'
import '../SchedulePage/SchedulePage.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const SchedulePage = () => {

    
    const startTimeMenu=['09:30','11:15','14:00','15:45','17:30','19:15']
    const endTimeMenu=['11:00','12:45','15:30','17:15','19:00','20:45']

  return (
    <div>
        <Navbar/>
        <div className='schedule-page'>
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
                <label>Week</label>
                <Select className="Select" name='startime'>
                {startTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Date</label>
                 <input type="date" /><br/>
                 <label>Start time</label>
                <Select className="Select" name='startime' >
                {startTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>End time</label>
                <Select className="Select" name='startime'>
                {endTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Professors</label>
                <Select className="Select" name='startime'>
                {startTimeMenu.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
                </Select><br/>
                <label>Description</label>
                <input type='text'></input><br/>
                <label>Lecture Units:</label>
                <p>4</p>
                <label>Conflict message:</label>
                <p></p>
                <button>Add</button>
                <button>Reset</button>
            </div>
            </div>
            <div className='schedule-view'>
                    
            </div>
        </div>
      
    </div>
  )
}

export default SchedulePage
