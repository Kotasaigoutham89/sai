import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import "../App.css";
import googleplay from "../images/google-play-store.svg";
import appstore from "../images/apple-store.svg";
import CloseIcon from '@mui/icons-material/Close';
export default function Modal() {
    const [poster, setPoster] = useState(true)
    const close = () => {
        setPoster(false)
    }
    const googleplaylink =()=>{
        window.open("https://oswqa.courses.store/183002?utm_source%3Dwhatsapp%26utm_medium%3Dtutor-course-referral-wa%26utm_campaign%3Dcourse-overview-app")
    }
    return (
        <>
            {poster &&
                <Paper variant="outlined" className="modal-poster" >
                    <div className="close-poster" onClick={close}>
                        <CloseIcon />
                    </div>
                    <div className='modal-poster-center'>
                        <div style={{ fontSize: "30px", fontWeight: "500px" }}>We are avaliable in apps too</div>
                        <div>
                            <img src={googleplay} alt="target" className="playstore-images" onClick={googleplaylink}/>
                            <img src={appstore} alt="target" className="playstore-images"onClick={googleplaylink} />
                        </div>
                    </div>
                </Paper>
            }
        </>
    )
}