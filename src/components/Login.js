import Navbar from "./Navbar";
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
export default function Login() {
    let navigate = useNavigate();
    const Register = () => {
        navigate("/Register");
    }
    return (
        <>
            <Navbar />
            <div className="Login-Background">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexWrap: 'wrap',
                        paddingTop: 10,
                        '& > :not(style)': {
                            m: 1,
                            width: "40%",
                            height: 450,
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <div className="title" style={{marginTop:10}}>Login</div>
                        <div>
                            <div className="input-label">
                                <label className="input-name">User Id</label>
                                <input type="text" className="input" />
                            </div>
                            <div className="input-label">
                                <label className="input-name">Password</label>
                                <input type="text" className="input" />
                            </div>
                            <div className="input-button">
                                <Button size="large" variant="contained">Login</Button>
                            </div>
                            <div className="input-label" style={{display:"flex",justifyContent:"center"}}>
                                Not  Registered? <span style={{ color: "blue",cursor:"pointer"}} onClick={Register}>Register</span>
                            </div>
                        </div>
                    </Paper>
                </Box>
            </div>
        </>
    )
}