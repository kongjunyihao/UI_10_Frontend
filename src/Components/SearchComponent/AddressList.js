import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "./AddressStyle.css";
import Box from '@mui/material/Box';
import Divider, { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';


function AddressList() {
    const [address, setAddress] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAddress();
    }, [])

    const getAddress = () => {
        fetch('http://localhost:4000/app/address')
        .then(res=>res.json())
        .then(data=>{setAddress(data)})
    }

    return (
        <>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    {`Your Addresses (TODO: fetch from database)`}
                </Typography>
            </Toolbar>
            <Box className="address-container"
                width='100%' sx={{ flexGrow: 1 }}
                bgcolor="white" color="black">
                <Stack className='add-container'>
                    <div className="add-icon"
                        onClick={() => {
                            navigate('add')
                        }}
                    >
                        <span>+</span>
                        <h2 style={{ align: 'center' }}>Add Address</h2>
                    </div>
                </Stack>
                <Stack className='list-container'>
                    {address.map((item, index)=>{
                        return (
                            <div className='list-content' key={index}>
                                <h5>{item.fullName}</h5>
                                <p>{item.street}</p>
                                <div>
                                    <div>{item.citty}</div>
                                    <div>{item.state}</div>
                                    <div>{item.zip}</div>
                                </div>
                                <p>
                                    Phone number: {item.phone}
                                </p>
                                <div>
                                    Edit | Remove
                                </div>
                            </div>
                        );
                    })}
                </Stack>
            </Box>
        </>
    );
}

export default AddressList;