import React from 'react'
import "./Container.css"
import Vedio from './Vedio'
function Container() {
    return (
        <center>
        <div className='vedio__container'>
                <Vedio />
                <Vedio />
                <Vedio />
                <Vedio />
                <Vedio />
        </div>
        </center>

    )
}

export default Container