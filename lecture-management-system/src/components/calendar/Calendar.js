import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Filter } from '../filter/Filter';
import Navbar from '../NavigationBar/Navbar';
import './calendar.css';
import axios from 'axios';


export const Calendar = () => {
  const [option, setOption] = useState('');
  const [batch, setBatch] = useState('');
  const [events, setEvents] = useState([]);
  const [schedules, setSchedules] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getEvents');
        setEvents(response.data.map(event => ({
          title: event.eventype,
          start: event.startdate,
          end: event.enddate,
          color: 'purple',
        })));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getplan');
        setSchedules(response.data.map(schedule => ({
          title: `${schedule.module} - ${schedule.studyprgm}`,
          start: schedule.startdt,
          end: schedule.enddt,
          module: schedule.studyprgm,
          batch: schedule.batch,
          color: 'orange',
        })));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchSchedule();
  }, []);

  const handleBatchChange = (newBatch) => {
    setBatch(newBatch);
  };

  const filteredEvents = events.concat(schedules).filter((schedules) => {
    return (
      (schedules.module === option || option === '') &&
      (schedules.batch === batch || batch === '')
    );
  });

  const resetFilter = () => {
    setOption('');
    setBatch('');
  }

  return (
    <>
      <Navbar />
      <div className='calendarView'>
        <div className='calendar'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={filteredEvents}
            headerToolbar={{
              center: 'prev,next',
              left: 'title',
              end: ''
            }}
            height={"90vh"}
          />
        </div>
        <div className='filter'>
          <Filter setNewSelectedOption={setOption} setNewBatch={handleBatchChange} handleReset={resetFilter} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
