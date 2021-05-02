import React from 'react';
import ReactPlayer from 'react-player'
import './Posts.css';

const Posts = () => {
    return (
        <div className="posts-section">
           <div className="posts-wrapper">
                <div className="video">
                <ReactPlayer
                width="480px"
                height="240px"
                 url='https://www.youtube.com/watch?v=LnBZs04XQOU' 
                 controls
                 
                 />
                </div>

                <div className="video">
                <ReactPlayer
                width="480px"
                height="240px"
                 url='https://www.youtube.com/watch?v=-LqfrY87U-0' 
                 controls
                 
                 />
                </div>

                <div className="video">
                <ReactPlayer
                width="480px"
                height="240px"
                 url='https://www.youtube.com/watch?v=5TnynE3PuDE' 
                 controls
                 
                 />
                </div>

                <div className="video">
                <ReactPlayer
                width="480px"
                height="240px"
                 url='https://www.youtube.com/watch?v=0dEjaK2j-hY' 
                 controls
                 
                 />
                </div>
           </div>
        </div>
    );
};

export default Posts;