import React, { useState, useEffect } from 'react'
import { Navbar } from '../NavigationBar/Navbar'
import '../SchedulePage/SchedulePage.css'
import { ScheduleTable } from '../utils/ScheduleTable';
import { ScheduleForm } from '../utils/ScheduleForm'
import axios from 'axios';

export const SchedulePage = () => {
  const [lectureData, setLectureData] = useState([
    { id: 1, week:'Week 2', date: '2023-12-22', startTime: '09:30', endTime: '11:15', description: 'React', professor: 'Prof. XYZ', lectureUnits: '2' },
  ])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://sheet.best/api/sheets/98f8584f-80a7-4afe-847c-d30024deecf3')
      .then(response => {
        setLectureData(response.data)
        console.log(response.data.lectureData)
      })
      .catch(err => console.log(err));
  };
  
  const handleSubmit = (newEvent) => {
    const postData = {
      week: newEvent.week,
      date: newEvent.date,
      startTime: newEvent.startTime,
      endTime: newEvent.endTime,
      professors: newEvent.professors,
      description: newEvent.description,
      lectureUnits: newEvent.lectureUnits 
    }
    axios.post('https://sheet.best/api/sheets/98f8584f-80a7-4afe-847c-d30024deecf3', postData)
      .then(response => {
        console.log(response.data)
        setLectureData([...lectureData, newEvent])
      })
      .catch(err => console.log(err))
  };

  const handleDelete = (targetIndex,) => {
    setLectureData(lectureData.filter((_, index) => index !== targetIndex));
  };

  return (
    <div>
      <Navbar />
      <div className='schedule-page'>
        <ScheduleForm onSubmit={handleSubmit} lectureData={lectureData} />
        <ScheduleTable lectureData={lectureData} deleteRow={handleDelete} />
      </div>
    </div>
  )
}

export default SchedulePage
