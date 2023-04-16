import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Navbar from './NavBar';

export default function Login() {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    let navigate = useNavigate();
    const Register = () => {
        navigate("/Register");
    }
    const login = async () => {
        const response = axios.post("http://localhost:5000/Login", { userid: userid, password: password })
        console.log(JSON.Stringify(response))
    }
       
    return (
        <>
        <Navbar/>
            <div className="Login-Background">
                <Box className="Login-Box"> 
                    <Paper elevation={3} className="login-borders">
                        <div className="title" style={{ marginTop: 10 }}>Login</div>
                        <div>
                            <div className="input-label">
                                <label className="input-name">User Id</label>
                                <input type="text" className="input" value={userid} onChange={(event) => setUserid(event.target.value)} />
                            </div>
                            <div className="input-label">
                                <label className="input-name">Password</label>
                                <input type="text" className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="input-button">
                                <Button size="large" variant="contained" onClick={login}>Login</Button>
                            </div>
                            <div className="input-label" style={{ display: "flex", justifyContent: "center" }}>
                                Not  Registered? <span style={{ color: "blue", cursor: "pointer" }} onClick={Register}>Register</span>
                            </div>
                        </div>
                    </Paper>
                </Box>
            </div>
        </>
    )
}