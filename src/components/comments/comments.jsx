import React from 'react'
import "./comments.scss"
import profile from "../../assets/cynthia(1).png"



const Comments = () => {
    const comments = [
        {
            id: 1,
            name: "VerticalAlignCenter",
            userId: 10,
            description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii", 
            profile: `${profile}`
        },
        {
            id: 1,
            name: "VerticalAlignCenter",
            userId: 10,
            description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii",
            
            profile: `${profile}`
        },
        {
            id: 1,
            name: "VerticalAlignCenter",
            userId: 10,
            description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii",
          
            profile: `${profile}`
        }
    ]
  return (
    <div className='comments'>
        {comments.map(comment=>(
            <div className="user">
            <img src={comment.profile} alt="profile" /> 
            <div className="userInfo">
                <span className='name'>{comment.name}</span>
                <p className='description'>{comment.description}</p>
                
            </div>
            <span className="date">1 hour ago</span>
        </div>
        
        ))}
        
    </div>
  )
}

export default Comments;