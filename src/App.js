import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Physics from './Physics.jpeg';
import Chemistry from './Chemistry.jpeg'
// import Card from '@material-ui/core';
// import CardActions from '@material-ui/core';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            NEET And JEE Advanced (Physics and Chemistry)
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Our 300+ successful students are selected in M.B.B.S and IIT's
          </Typography>
        </div>
        <div className='Team_Container'>
          <div className='Team_Member' >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Physics}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Physics 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  My name is Dulam Vamshi Dulam. I have done CSE from MGIT (Hyderabad).My hobbies are playing Cricket,Volleyball,Roadstar etc.. . I were married in 2678 and i have two children.Whpse names are Tom and jerry. I was very happy with my life. I wasa good person.
                  </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More</Button>
                <Button size="small">Contact Us</Button>
              </CardActions>
            </Card>
          </div>
          <div className='Team_Member'>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Chemistry}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chemistry
                </Typography>
                <Typography variant="body2" color="text.secondary">
                My name is Bolam Karunakar . I have done CSE from MGIT (Hyderabad).My hobbies are playing Cricket,Volleyball,Roadstar etc.. . I were married in 2678 and i have two children.Whpse names are Tom and jerry. I was very happy with my life. I wasa good person.

                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More</Button>
                <Button size="small">Contact Us</Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="One to One Teaching" />
          <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Week End Exams" />
          <Grid icon={<TrendingUpIcon style={{ fill: "#D05B2D", height: "125", width: "125" }} />} title="Deep Understanding" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Online Classes" />
          <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Multi Papers are Explanied" />
          <Grid icon={<HttpIcon style={{ fill: "#2EA09D", height: "125", width: "125" }} />} title="Good Culture" />
        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
