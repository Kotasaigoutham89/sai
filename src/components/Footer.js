import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { MdCall } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import "../App.css"
function Footer() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "lightslategray", height: "75px", display: 'flex', justifyContent: "center" }}>
                    <Toolbar style={{display:"flex",justifyContent:"space-around"}}>
                                <div>
                                    <MdCall size="1.4em" style={{ margin: "0px 10px 4px" }}/>
                                    <span style={{fontSize:"16px"}}>8688119362</span>
                                </div>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <MdEmail size="1.5em" style={{ margin: "0px 10px" }}/>
                                    <span style={{fontSize:"18px"}}>Electron@gmail.com</span>
                                </div>
                                <div>
                                     <span>Follow Us on:</span>
                                     <AiFillFacebook size="1.5em" style={{ margin: "0px 10px" }}/>
                                     <AiFillLinkedin size="1.5em" style={{ margin: "0px 10px" }}/>
                                     <AiFillYoutube size="1.5em" style={{ margin: "0px 10px" }}/>
                                </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
export default Footer;
