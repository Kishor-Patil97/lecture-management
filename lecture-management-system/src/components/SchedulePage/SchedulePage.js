import React, { useState } from 'react'
import {Navbar} from '../NavigationBar/Navbar'
import '../SchedulePage/SchedulePage.css'
import {ScheduleTable} from '../utils/ScheduleTable';
import {ScheduleForm} from '../utils/ScheduleForm'

export const SchedulePage = () => {
const[lectureData, setLectureData] = useState([
    { id: 1, date: '2023-12-22', startTime: '09:30', endTime: '11:15', description: 'React', professor: 'Prof. XYZ', lectureUnits: '2' },
])
   
const handleSubmit = (newEvent) => {
  setLectureData([...lectureData, newEvent])
  };

const handleDelete = (targetIndex) => {
  setLectureData(lectureData.filter((_, index) => index !== targetIndex));
};

  return (
    <div>
        <Navbar/>
        <div className='schedule-page'>
         <ScheduleForm onSubmit={handleSubmit}/>
         <ScheduleTable lectureData={lectureData} deleteRow={handleDelete} />    
            </div>
        </div>
  )
}

export default SchedulePage
