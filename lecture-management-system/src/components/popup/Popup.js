import React from 'react';
import FormControl from '@mui/material/FormControl';
import './Popup.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';


export const Popup = () => {
    return (
        <div className="form">
            <Grid container>
                <Grid item sm={6}>
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select style={{ width: '200px' }}>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
                <Grid item sm={6}>
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select style={{ width: '200px' }}>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
                <Grid item sm={3}>
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
                <Grid item sm={3}>
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
                <Grid item sm={6}>
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select style={{ width: '200px' }}>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
                <Grid item >
                    <div>Batch</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <Select>
                            <MenuItem value={9}>April 2022-2024</MenuItem>
                            <MenuItem >October 2022-2024</MenuItem>
                            <MenuItem >April 2023-2025</MenuItem>
                            <MenuItem >October 2023-2025</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
            </Grid>
        </div>
    );
};