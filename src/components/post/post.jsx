import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./post.scss"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/comments';


const Post = ({post}) => {

  const [comments, setComments] = useState(false)
  //TO DO change this later
  const liked = false;

  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
            <div className='userInfo'>
                <img src={post.profile} alt="profile"/>
                <div className='details'>
                <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: 'inherit'}}>
                <span className='name'>{post.name}</span>
                </Link>
                <span className='date'> a few seconds ago</span>
                </div>
                </div>
                <MoreHorizOutlinedIcon />
                
            </div>
            <div className='content'>
              <div className='description'>{post.description}</div>
              <img src={post.img} alt="post-content" />
            </div>
            <div className='socials'>
              <div className='item'>
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/> }
                <span>10 likes</span>
              </div>

            <div className='item' onClick={()=> setComments(!comments)}>
              <MessageOutlinedIcon />
              <span>20 comments</span>
              </div>
              <div className="item">
              <ShareOutlinedIcon />
              <span>share</span>
              </div>   
            </div>
            {comments && <Comments />}
    </div>
    </div>
  )
}

export default Post