import React, { useEffect, useState } from 'react';
import './AddEvents.css';
import { Navbar } from '../NavigationBar/Navbar';
import { AddEventForm } from '../utils/AddEventForm';
import { AddEventsTable } from '../utils/AddEventsTable';
import axios from 'axios';

export const AddEvents = ( {onEventAdd} ) => {
    const [events, setEvents] = useState([{
        startdate: "2023-12-25", enddate: "2023-12-25",
        startime: "09:30", endtime: "17:15",
        eventype: "Public Holiday", eventdetails: "Christmas",
    }])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getEvents');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (newEvent) => {
        const eventdata = {
            startdate: newEvent.startdate,
            enddate: newEvent.enddate,
            startime: newEvent.startime,
            endtime: newEvent.endtime,
            eventype: newEvent.eventype,
            eventdetails: newEvent.eventdetails
        }
        axios.post('http://localhost:4000/addEvents', eventdata)
            .then(response => {
                console.log(response)
                setEvents([...events, newEvent]);
                onEventAdd(newEvent);
            })
            .catch(err => console.log(err))
    };

    const handleDelete = (targetIndex, eventId) => {
        axios.delete(`http://localhost:4000/deleteEvent/${eventId}`)
            .then(response => {
                console.log(response.data);
                setEvents(events.filter((_, index) => index !== targetIndex));
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Navbar />
            <AddEventForm onSubmit={handleSubmit} />
            <AddEventsTable rows={events} deleteRow={handleDelete} />
        </>
    )
}

export default AddEvents;