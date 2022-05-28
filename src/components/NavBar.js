import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IoLogoElectron } from "react-icons/io5"
import { MdLogin } from "react-icons/md"
import { MdGroups } from "react-icons/md"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import "../App.css"
import { GiTriquetra } from 'react-icons/gi';
function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  let navigate = useNavigate();
  const Login = () => {
    navigate("/Login");
    setSidebar(false)
  }
  const Register = () => {
    navigate("/Register");
    setSidebar(false)
  }
  const menu = () => {
    setSidebar(true)
  }
  const close = () => {
    setSidebar(false)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "lightslategray", height: "75px", display: 'flex', justifyContent: "center" }}>
          <Toolbar className='tool-bar'>
            <div className="flex">
              <IoLogoElectron size="2.5em" style={{ margin: "0px 10px" }} />
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
                Electron
              </Typography>
            </div>
            <div className="flex" >
              <ul className='navbar-list' >
                <li className="navbar-list-item navbar-items" >Home</li>
                <li className="navbar-list-item navbar-items" >Our Mission</li>
                <li className="navbar-list-item navbar-items" >Our Students</li>
                <li className="navbar-list-item navbar-items">About Us</li>
                <li onClick={Login} className="navbar-list-item navbar-login-register" >
                  <Button variant="outlined" startIcon={<MdLogin />} style={{ borderColor: "white", color: "white" }}>
                    Login
                  </Button>
                </li>
                <li onClick={Register} className="navbar-list-item navbar-login-register" >
                  <Button variant="outlined" startIcon={<MdGroups />} style={{ borderColor: "white", color: "white" }}>
                    Register
                  </Button>
                </li>
              </ul>
              {!sidebar &&
                <div className="display-menu" onClick={menu}>
                  <MenuIcon />
                </div>
              }
              {sidebar &&
                <div className="display-menu" onClick={close}>
                  <CloseIcon />
                </div>
              }
            </div>

          </Toolbar>
        </AppBar>
        {sidebar &&
          <div className='slide-bar'>
            <ul className='slider-bar-ul'>
              <li>Home</li>
              <li style={{ marginTop: 15 }}>Our Mission</li>
              <li style={{ marginTop: 15 }}>Our Students</li>
              <li style={{ marginTop: 15 }}>About Us</li>
              <li style={{ marginTop: 15 }} onClick={Login}>Login</li>
              <li style={{ marginTop: 15 }} onClick={Register}>Register</li>
            </ul>

          </div>
        }
      </Box>
    </>
  );
}
export default Navbar;
