import React from "react";
import "./RightBar.scss";
import user from "../../assets/cynthia(1).png"
import { red } from "@mui/material/colors";

function RightBar(){
    return(
<div className="rightbar">
<div className="container">
    <div className="card">
        <span>Suggestions for you</span>
    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>Vincent Kwach</span>
    </div>
    <div className="buttons">
    <button >Follow</button>
    <button >Dismiss</button>
    </div>
    </div>

    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>John Mwangi</span>
    </div>
    <div className="buttons">
    <button >Follow</button>
    <button >Dismiss</button>
    </div>
    </div>
    </div>

    <div className="card">
        <span>Latest Activities</span>
    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>Vincent Kwach</span>
    </div>
    <div className="buttons">
    <button >Follow</button>
    <button >Dismiss</button>
    </div>
    </div>

    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>John Mwangi</span>
    </div>
    <div className="buttons">
    <button>Follow</button>
    <button>Dismiss</button>
    </div>
    </div>
    </div>

    <div className="card">
        <span>Friends Online</span>
    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>Vincent Kwach</span>
    </div>
    <div className="buttons">
    <button>Follow</button>
    <button>Dismiss</button>
    </div>
    </div>

    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>John Mwangi</span>
    </div>
    <div className="buttons">
    <button>Follow</button>
    <button>Dismiss</button>
    </div>
    </div>
    </div>
</div>
</div>

    )
}
export default RightBar;