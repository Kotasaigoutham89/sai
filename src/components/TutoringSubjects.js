import "../App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Physics from "../images/Physics_Image.jpg";
import Chemistry from "../images/Chemistry_Image.jpg";


export default function TutoringSubjects() {
    return (
        <>
            <div className="tutoring-subjects">
                <div className="title">Our Tutoring Subjects</div>
                <div className="tutoring-subjects-items">
                <Card className="subject-card">
                    <CardMedia
                        component="img"
                        height="230"
                        image={Physics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                            Physics
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="subject-card">
                    <CardMedia
                        component="img"
                        height="230"
                        image={Chemistry}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"  style={{textAlign:"center"}}>
                            Chemistry
                        </Typography>
                    </CardContent>
                </Card>
                </div>

            </div>
        </>
    )
}