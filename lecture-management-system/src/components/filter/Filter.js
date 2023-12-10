import React, { useState } from "react";
import "./style.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

export const Filter = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const options = ['ACS', 'ADS'];

    return (
        <div className="box">
            <div className="div">Filters</div>
            <div className="textWrapper">
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
                        <Select style={{width: '200px'}}>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </div>
                <div className="semester">
                    <p>Semester</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select style={{width: '200px'}}>
                            <MenuItem value={9}>1</MenuItem>
                            <MenuItem >2</MenuItem>
                            <MenuItem >3</MenuItem>
                            <MenuItem >4</MenuItem>
                        </Select>
                    </FormControl >
                </div>
                <div className="block">
                    <p className="name">Block</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select style={{width: '200px'}}>
                            <MenuItem value={9}>09:00</MenuItem>
                            <MenuItem >11:00</MenuItem>
                            <MenuItem >02:00</MenuItem>
                            <MenuItem >05:30</MenuItem>
                        </Select>
                    </FormControl >
                </div>
                {/* <button className="button">Submit</button> */}
                <Button style={{backgroundColor: '#8D57D4', width: '100px', color: 'white'}}>Submit</Button>
            </div>
        </div>

    );
};
