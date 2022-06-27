import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import "../App.css";
import googleplay from "../images/google-play-store.svg";
import appstore from "../images/apple-store.svg";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';

export default function Modal() {
    const [poster, setPoster] = useState(true)
    const [fullname, setFullname] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const close = () => {
        setPoster(false)
    }
    // const googleplaylink =()=>{
    //     window.open("https://oswqa.courses.store/183002?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
    // }
    const submit =(e)=>{
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_0to3fc5', {
        fullname:fullname,
        phonenumber:phonenumber,
email:email
    }, 'SkuAnMOOMXMPg5ph_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });



    }
    return (
        <>
            {poster &&
                <Paper variant="outlined" className="modal-poster" >
                    <div className="close-poster" onClick={close}>
                        <CloseIcon />
                    </div>
                    <div className="title" style={{ marginTop: 10 }}>Book free demo class</div>
                        <div>
                            <div className="input-label-register">
                                <label className="input-name">Full Name</label>
                                <input type="text" className="input" value={fullname} onChange={(event) => setFullname(event.target.value)} />
                            </div>
                            <div className="input-label-register">
                                <label className="input-name">Phone Number</label>
                                <input type="number" className="input" value={phonenumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
                            </div>
                            <div className="input-label-register">
                                <label className="input-name">Email ID</label>
                                <input type="text" className="input" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="input-button">
                                <Button size="large" variant="contained" onClick={submit}>Login</Button>
                            </div>
                        </div>
               
                    {/* <div className='modal-poster-center'>
                        <div style={{ fontSize: "30px", fontWeight: "500px" }}>We are avaliable in apps too</div>
                        <div>
                            <img src={googleplay} alt="target" className="playstore-images" onClick={googleplaylink}/>
                            <img src={appstore} alt="target" className="playstore-images"onClick={googleplaylink} />
                        </div>
                    </div> */}
                </Paper>
            }
        </>
    )
}