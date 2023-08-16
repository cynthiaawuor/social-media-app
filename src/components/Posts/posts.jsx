import React from 'react';
import image from "../../assets/pexels-peng-louis-1643457.jpg";
import profile from "../../assets/cynthia(1).png"
import Post from '../post/post';

function Posts(){
  const posts = [
    {
    id: 1,
    name: "VerticalAlignCenter",
    userId: 10,
    description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii",
    img: `${image}`,
    profile: `${profile}`
},
{
  id: 3,
  name: "VerticalAlignCenter",
  userId: 15,
  description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii",
  img: `${image}`,
  profile: `${profile}`
},
{
  id: 19,
  name: "VerticalAlignCenter",
  userId: 90,
  description: "This is the where coding becomes exciting. Come on let's dig in, Hureeeeeiii",
  img: `${image}`,
  profile: `${profile}`
}
  ]
  return (
    <div className='posts'>
     
      {posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
      </div>
  )
}

export default Posts;