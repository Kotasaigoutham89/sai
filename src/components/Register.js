import Navbar from "./Navbar";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
export default function Register() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    let navigate = useNavigate();
    const Register = () => {
        navigate("/Login");
    }
    const register=()=>{
        console.log(fullname,email,password,confirmpassword)
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
                            height: 530,
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <div className="title" style={{ marginTop: 10 }}>Register</div>
                        <div>
                            <div className="input-label-register">
                                <label className="input-name">Full Name</label>
                                <input type="text" className="input" value={fullname} onChange={(event) => setFullname(event.target.value)} />
                            </div>
                            <div className="input-label-register">
                                <label className="input-name">Email</label>
                                <input type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="input-label-register">
                                <label className="input-name">Password</label>
                                <input type="text" className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="input-label-register">
                                <label className="input-name">Confirm Password</label>
                                <input type="text" className="input"  value={confirmpassword} onChange={(event) => setConfirmpassword(event.target.value)}/>
                            </div>
                            <div className="input-button">
                                <Button size="large" variant="contained" onClick={register}>Register</Button>
                            </div>
                            <div className="input-label-register" style={{ display: "flex", justifyContent: "center" }}>
                                Already  Registered? <span style={{ color: "blue", cursor: "pointer" }} onClick={Register}>Login</span>
                            </div>
                        </div>
                    </Paper>
                </Box>
            </div>
        </>
    )
}