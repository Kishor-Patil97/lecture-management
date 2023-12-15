import React, {useState} from 'react';
import './AddEvents.css';
import {Navbar} from '../NavigationBar/Navbar';
import {AddEventForm} from '../utils/AddEventForm';
import {Table} from '../utils/Table';

 export const AddEvents = () => {
    const [events, setEvents] = useState([{
        startdate:"2023-12-25", enddate:"2023-12-25",  
        startime:"09:30", endtime:"17:15", 
        eventype:"Public Holiday", eventdetails:"Christmas" ,
    }])

    
    const handleSubmit = (newEvent) => {
    setEvents([...events, newEvent])
    };

    const handleDelete = (targetIndex) => {
        setEvents(events.filter((_, index) => index !== targetIndex));
      };


    return(
        <>
        <Navbar/>
        <AddEventForm onSubmit={handleSubmit}/>
        <Table rows={events} deleteRow={handleDelete}/>
        </>
    )
}

export default AddEvents;

