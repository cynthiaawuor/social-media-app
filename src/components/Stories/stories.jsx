import React from 'react'
import "./stories.scss"
import storyImg from "../../assets/pexels-tubarones-photography-3704379.jpg"

function Stories(){
    const stories = [
        {id: 1,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 2,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 3,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 4,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 5,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 6,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },
    {id: 7,
        name: "Cynthia Kwach",
        img: `${storyImg}`
    },

    ]
  return (
    <div className='stories'>
        {stories.map(story=>(
            <div className='story' key={story.id}>
                <img src={story.img} alt={story.name}></img>
            <span>{story.name}</span>
            </div>
            
        ))}
        </div>
  )
}
export default Stories;
