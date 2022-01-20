import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  alignmentoftext :{
    marginTop:4,
    marginRight:10
  },
  bar: {
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
  logoMobile: {
    fontSize: "1.75rem",
    fontWeight: 500,
    paddingLeft: 10,
    ['@media (max-width:780px)']: {
      display: "inline-block"
    }
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    display:"flex",
    justifyContent:"end",
    "&:hover": {
      color: "#4f25c8"
    },
    ['@media (max-width:780px)']: {
      paddingBottom: "1rem"
    }
  },
  menuItem1: {
    cursor: "pointer",
    flexGrow: 0.005,
    display:"flex",
    justifyContent:"end",
    "&:hover": {
      color: "#4f25c8"
    },
    ['@media (max-width:780px)']: {
      paddingBottom: "1rem"
    }
  }

})


function Footer() {
  const classes = styles()
  return (
    // <BottomNavigation >
    //   <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
    //   <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
    //   <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
    //   <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
    // </BottomNavigation>
    <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
      <Typography variant="h6" className={classes.menuItem}>
        <span className={classes.alignmentoftext}> <MailIcon /></span><span>electron.academy2019@gmail.com</span>
      </Typography>
      <Typography variant="h6" className={classes.menuItem} style={{ marginRight: 100 }}>
        <span  className={classes.alignmentoftext}><PhoneIcon/></span> 8688119362 (10A.M to 7P.M)
      </Typography>
      <Typography variant="h6" className={classes.menuItem1} style={{ marginRight: 100 }} >

        <BottomNavigation >
          <span  className={classes.alignmentoftext}> Follow us on:</span>
          <BottomNavigationAction  style={{marginBottom:11}}color="red" label="Facebook" value="recents" icon={<FacebookIcon style={{ fill: "#3b5998" }} />} />
          <BottomNavigationAction  style={{marginBottom:11}} label="Twitter" value="favorites" icon={<TwitterIcon style={{ fill: "#1DA1F2" }} />} />
          <BottomNavigationAction style={{marginBottom:11}} label="Instagram" value="nearby" icon={<InstagramIcon style={{ fill: " #C13584" }} />} />
          <BottomNavigationAction style={{marginBottom:11}} label="YouTube" value="folder" icon={<YouTubeIcon style={{ fill: "#c4302b" }} />} />
        </BottomNavigation>
      </Typography>
    </Toolbar>
  )
}

export default Footer
