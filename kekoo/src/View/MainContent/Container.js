import React from 'react'
import "./Container.css"
import Video from './Video'
function Container() {
    return (
    <center>
        <div className='video__container'>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
        </div>
    </center>

    )
}

export default Container
