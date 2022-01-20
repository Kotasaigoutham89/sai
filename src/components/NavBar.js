import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import SchoolIcon from '@material-ui/icons/School';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        paddingLeft: "5%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        fontSize:"1.75rem",
        fontWeight:500,
        paddingLeft:10,
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 0.3,
        display:"flex",
        justifyContent:"center",
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }

})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <SchoolIcon className={classes.logo}/>
                <div className={classes.logoMobile}>Electron</div>
                <Typography variant="h6" className={classes.menuItem}>
                    Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Services
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    About us
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Login"/>
            </Toolbar>
    )
}
export default NavBar
