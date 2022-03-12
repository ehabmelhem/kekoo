import React from 'react'
import "./Container.css"
import Video from './Video'
const videos = [1, 2, 3, 4];
function Container() {
    return (
        <center>
            <div className='video__container'>
                {
                    videos.map((video, index) => {
                        return (
                            <div className="video_slid">
                                <Video key={index} />
                            </div>
                        )
                    })
                }
            </div>
        </center>

    )
}

export default Container
