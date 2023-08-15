import React from "react";
import './NavBar.scss';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import cynthia from "../../assets/cynthia(1).png";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


function NavBar(){

    const { toggle,darkMode } = useContext(DarkModeContext);

    return(
<div className="navbar">
    <div className="left">
    <Link to="/" style={{textDecoration: "none"}}>
            <span>Cynthia Social</span>
        </Link>
<HomeOutlinedIcon />
{darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) : (<DarkModeOutlinedIcon onClick={toggle}/>)}

<GridViewOutlinedIcon />
<div className="searchbar">
<SearchOutlinedIcon />
<input type="text" placeholder="search..."></input>
</div>
</div>
<div className="right">
    <PersonOutlinedIcon />
    <EmailOutlinedIcon />
    <NotificationsOutlinedIcon />
    <div className="user">
        <img src={cynthia} alt="user" />
        <span>Cynthia Otieno</span>

    </div>
   </div>
</div>
    )
}
export default NavBar;