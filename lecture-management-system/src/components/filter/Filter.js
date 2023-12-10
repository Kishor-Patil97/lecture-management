import React, { useState } from "react";
import "./style.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Dropdown from "../utils/Dropdown";

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
                        <span>{value}</span>
                    </div>
                ))}
                <Dropdown />
            </div>
        </div>

    );
};
