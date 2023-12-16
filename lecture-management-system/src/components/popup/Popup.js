import React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import MultiSelect from '../utils/Multiselect';
import styles from './Popup.module.css';
import axios from 'axios';

export const Popup = () => {
    const [batch, setBatch] = useState('');
    const [course, setCourse] = useState('');
    const [sem, setSem] = useState('');
    const [block, setBlock] = useState('');
    const [module, setModule] = useState('');
    const [startdt, setStartdt] = useState('');
    const [enddt, setEnddt] = useState('');
    const [msg, setMsg] = useState('');
    const [showPopup, setShowPopup] = useState(true);

    const handleBatchChange = (event) => setBatch(event.target.value);
    const handleCourseChange = (event) => setCourse(event.target.value);
    const handleSemChange = (event) => setSem(event.target.value);
    const handleBlockChange = (event) => setBlock(event.target.value);
    const handleModuleChange = (event) => setModule(event.target.value);
    const handleStartdtChange = (event) => setStartdt(event.target.value);
    const handleEnddtChange = (event) => setEnddt(event.target.value);
    const handleMsgChange = (event) => setMsg(event.target.value);

    const handlePopup = () => {
        setShowPopup(false);
    }
    const batchItems = ['April 2022-2024', 'October 2022-2024', 'April 2023-2025', 'October 2023-2025'];
    const courseItems = ['Applied Computer Science', 'Applied Data Science'];
    const semItems = ['1', '2', '3', '4'];
    const blockItems = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const moduleItems = ['International Project Management', 'Software Development Practice', 'IT-Security', 'UX Design and Implementation', 'Funfamentals towards UX'];

    const [prof, setProf] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            id: '',
            studyprgm: course,
            block: block,
            sem: sem,
            module: module,
            professors: prof,
            startdt: startdt,
            enddt: enddt,
            msg: msg
        }
        axios.post('http://localhost:4000/',postData)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    handlePopup();
    }
    return (
        <>
            {showPopup && (
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <Grid container className={styles.container}>
                            <Grid item sm={6} className={styles.row}>
                                <div>Batch:</div>
                                <FormControl sx={{ m: 1 }} size="small" className={styles.formLM} >
                                    <Select value={batch} onChange={handleBatchChange} required>
                                        {batchItems.map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl >
                            </Grid>
                            <Grid item sm={6} className={styles.row}>
                                <div>Study Program:</div>
                                <FormControl sx={{ m: 1 }} size="small" className={styles.formLM}>
                                    <Select value={course} onChange={handleCourseChange} required>
                                        {courseItems.map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl >
                            </Grid>
                            <Grid item sm={3} className={styles.row}>
                                <div>Block:</div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={styles.margin} >
                                    <Select value={block} onChange={handleBlockChange} required>
                                        {blockItems.map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl >
                            </Grid>
                            <Grid item sm={3} >
                                <div>Semester:</div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={styles.margin}>
                                    <Select value={sem} onChange={handleSemChange} required>
                                        {semItems.map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl >
                            </Grid>
                            <Grid item sm={6}>
                                <div>Module:</div>
                                <FormControl sx={{ m: 1 }} size="small" className={styles.formLM}>
                                    <Select value={module} onChange={handleModuleChange} required>
                                        {moduleItems.map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl >
                            </Grid>
                            <Grid item sm={12} className={styles.addProf}>
                                <div>Add Professors:</div>
                                <MultiSelect setProfName={setProf} />
                            </Grid>
                            <Grid item sm={6} className={styles.date}>
                                <div>Start Date:</div>
                                <input type="date" onChange={handleStartdtChange} required/>
                            </Grid>
                            <Grid item sm={6} className={styles.date}>
                                <div>End Date:</div>
                                <input type="date" onChange={handleEnddtChange} required/>
                            </Grid>
                            <Grid item>
                                <div>Message for Professors:</div>
                                <textarea rows='4' cols='76' className={styles.textarea} onChange={handleMsgChange}></textarea>
                            </Grid>
                            <Grid item sm={12} className={styles.buttondiv}>
                                <Button className={styles.cancelBtn} onClick={handlePopup}>Cancel</Button>
                                <Button className={styles.submitBtn} type='submit'>Create</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            )}
        </>
    );
};