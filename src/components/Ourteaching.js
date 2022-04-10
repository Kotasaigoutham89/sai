import "../App.css";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import Paper from '@mui/material/Paper';

export default function Ourteaching() {
    return (
        <>
            <div className="our-teaching">
                <div className="title">Why People Trust Us</div>
                <div>

                    <div className="tutoring-subjects-items">
                        <Paper elevation={3} className="ourteachingcard" >
                            <div><AiTwotoneVideoCamera style={{ width: "50px", height: "50px" }} /></div>
                            <div className="ourteaching-content-title">FreeDemo</div>
                            <div className="ourteaching-content">Just choose your subject/ course & take a free trial class</div>
                        </Paper>
                        <Paper elevation={3} className="ourteachingcard" >
                            <div><GiTeacher style={{ width: "50px", height: "50px" }} /></div>
                            <div className="ourteaching-content-title">Experienced Teachers</div>
                            <div className="ourteaching-content">Take lessons from the Best Teachers in Telangana</div>
                        </Paper>
                        <Paper elevation={3} className="ourteachingcard" >
                            <div><MdDesignServices style={{ width: "50px", height: "50px" }} /></div>
                            <div className="ourteaching-content-title">Carefully designed sessions</div>
                            <div className="ourteaching-content">Just choose your subject/ course & take a free trial class</div>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    )
}