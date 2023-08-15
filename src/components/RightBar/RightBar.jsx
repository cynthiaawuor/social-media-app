import React from "react";
import "./RightBar.scss";
import user from "../../assets/cynthia(1).png"

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
    <p>
        <span>changed their cover picture</span>
    </p>
    <span>1 minute ago</span>
    </div>

    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <span>John Mwangi</span>
    </div>
    <p>
        <span>changed their cover picture</span>
    </p>
    <span>1 minute ago</span>
    </div>
    </div>

    <div className="card">
        <span>Friends Online</span>
    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <div className="online"></div>
    <span>Vincent Kwach</span>
    </div>
    </div>

    <div className="user">
        <div className="userInfo">
    <img src={user} alt="" />
    <div className="online"></div>
    <span>John Mwangi</span>
    </div>
    
    </div>
    </div>
</div>
</div>

    )
}
export default RightBar;