import React, { useState } from "react";
import './Filter.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

export const Filter = ({ setNewSelectedOption, setNewBatch }) => {

    const options = ['ACS', 'ADS'];
    const batchItems = ['April 2022-2024', 'October 2022-2024', 'April 2023-2025', 'October 2023-2025'];
    const semItems = ['1', '2', '3', '4'];
    const blockItems = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxToggle = (index) => {
        setSelectedOption(options[index]);
        setNewSelectedOption(options[index]);
    };

    const handleBatchChange = (event) => {
        const newBatch = event.target.value;
        setBatch(newBatch);
        setNewBatch(newBatch);
    }

    const handleSemChange = (event) => {
        setSem(event.target.value);
    }

    const handleBlockChange = (event) => {
        setBlock(event.target.value);
    }

    const [batch, setBatch] = useState('');
    const [sem, setSem] = useState('');
    const [block, setBlock] = useState('');

    return (
        <div className="box">
            <div className="textWrapper">
                <div className="div">Filters</div>
                <span className="label">Study Program</span>
                {options.map((value, index) => (
                    <div
                        key={index}
                        className="optionWrapper"
                        onClick={() => handleCheckboxToggle(index)}
                    >
                        {selectedOption === value ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        <span className="value">{value}</span>
                    </div>
                ))}
                <div className="batch">
                    <p className="name">Batch</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select className="selectOption" value={batch} onChange={(event) => handleBatchChange(event)}>
                            {batchItems.map((value, index) => (
                                <MenuItem key={index} value={value}>{value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl >
                </div>
                <div className="semester">
                    <p>Semester</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select className="selectOption" value={sem} onChange={handleSemChange}>
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
