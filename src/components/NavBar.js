import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IoLogoElectron } from "react-icons/io5"
import { MdLogin } from "react-icons/md"
import { MdGroups } from "react-icons/md"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import "../App.css"
function Navbar() {
  let navigate = useNavigate();
  const Login =()=>{
    navigate("/Login");
 }
  const Register =()=>{
     navigate("/Register");
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
                <li  className="navbar-list-item" style={{ margin: "5px 40px 0px 40px" }}>Home</li>
                <li className="navbar-list-item" style={{ margin: "5px 40px 0px 40px" }}>Our Mission</li>
                <li className="navbar-list-item" style={{ margin: "5px 40px 0px 40px" }}>Our Students</li>
                <li className="navbar-list-item" style={{ margin: "5px 40px 0px 40px" }}>About Us</li>
                <li onClick={Login} className="navbar-list-item" style={{ margin: "0px 20px" }}>
                  <Button variant="outlined" startIcon={<MdLogin />} style={{ borderColor: "white", color: "white" }}>
                    Login
                  </Button>
                </li>
                <li onClick={Register} className="navbar-list-item" style={{ margin: "0px 20px" }}>
                  <Button variant="outlined" startIcon={<MdGroups />} style={{ borderColor: "white", color: "white" }}>
                    Register
                  </Button>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Navbar;
