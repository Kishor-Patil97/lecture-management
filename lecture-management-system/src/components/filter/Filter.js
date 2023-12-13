import React, { useState } from "react";
import './Filter.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

export const Filter = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [batch, setBatch] = useState('');
    const [sem, setSem] = useState('');
    const [block, setBlock] = useState('');


    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleBatchChange = (event) => {
        setBatch(event.target.value);
    }

    const handleSemChange = (event) => {
        setSem(event.target.value);
    }

    const handleBlockChange = (event) => {
        setBlock(event.target.value);
    }

    const options = ['ACS', 'ADS'];
    const batchItems = ['April 2022-2024', 'October 2022-2024', 'April 2023-2025', 'October 2023-2025'];
    const semItems = ['1','2','3','4'];
    const blockItems = ['1','2','3','4','5','6','7','8'];

    return (
        <div className="box">
            <div className="textWrapper">
                <div className="div">Filters</div>
                <span className="label">Study Program</span>
                {options.map((value, index) => (
                    <div className="optionWrapper" onClick={handleCheckboxToggle}>
                        {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        <span className="value">{value}</span>
                    </div>
                ))}
                <div className="batch">
                    <p className="name">Batch</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select className= "selectOption" value={batch} onChange={handleBatchChange}>
                            {batchItems.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl >
                </div>
                <div className="semester">
                    <p>Semester</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select className= "selectOption" value={sem} onChange={handleSemChange}>
                            {semItems.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem> 
                            ))}
                        </Select>
                    </FormControl >
                </div>
                <div className="block">
                    <p className="name">Block</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select className="selectOption" value={block} onChange={handleBlockChange}>
                            {blockItems.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl >
                </div>
                <Button className="submitBtn">Submit</Button>
            </div>
        </div>
    );
};
