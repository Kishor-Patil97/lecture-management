import React from 'react';

import './AddEvents.css';
import {Navbar} from '../NavigationBar/Navbar';
import {AddEventForm} from '../utils/AddEventForm';


 export const AddEvents = () => {
    return(
        <>
        <Navbar/>
        <AddEventForm/>
       
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
        </>
    )
}

export default AddEvents;

