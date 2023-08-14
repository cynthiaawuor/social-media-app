import React from "react";
import "./leftBar.scss";
import cynthia from "../../assets/cynthia(1).png";
import friends from "../../assets/icons8-friends-64.png";
import group from "../../assets/icons8-groups-48.png";
import marketplace from "../../assets/icons8-stall-50.png";
import memories from "../../assets/icons8-memories-50.png";
import watch from "../../assets/icons8-watch-video-68.png";

function LeftBar(){
    return(
<div className="leftbar">
<div className="container">
    <div className="menu">
    <div className="user">
        <img src={cynthia} alt="user" />
        <span>Cynthia Otieno</span>
    </div>
    <div className="item">
        <img src={friends} alt="friends" />
        <span>Friends</span>
    </div>
    <div className="item">
        <img src={group} alt="group" />
        <span>Groups</span>
    </div>
    <div className="item">
        <img src={marketplace} alt="group" />
        <span>Marketplace</span>
    </div>
    <div className="item">
        <img src={memories} alt="group" />
        <span>Memories</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Watch</span>
    </div>
</div>
<hr/>
<div className="menu">
    <span>Shortcuts</span>
    <div className="item">
        <img src={friends} alt="friends" />
        <span>Events</span>
    </div>
    <div className="item">
        <img src={group} alt="group" />
        <span>Gaming</span>
    </div>
    <div className="item">
        <img src={marketplace} alt="group" />
        <span>Videos</span>
    </div>
    <div className="item">
        <img src={memories} alt="group" />
        <span>Gallery</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Messages</span>
    </div>
</div>
<hr/>
<div className="menu">
    <span>Others</span>
    <div className="item">
        <img src={marketplace} alt="group" />
        <span>Tutorials</span>
    </div>
    <div className="item">
        <img src={memories} alt="group" />
        <span>Courses</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>

    {/* //duplicate */}
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
    <div className="item">
        <img src={watch} alt="group" />
        <span>Fundraiser</span>
    </div>
</div>
</div>
</div>
    )
}

export default LeftBar;