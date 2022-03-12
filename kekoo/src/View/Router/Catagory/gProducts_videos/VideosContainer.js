import React from 'react'
import "./VideosContainer.css";
import VideoComponent from './Componenties/VideoComponent';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const VideosContainer = props => {
    return (
        <div>
            <TransitionGroup className="showvideos">
                    <VideoComponent name="Note 7" price={30} hasDiscount={true} newPrice={20}></VideoComponent>
                    <VideoComponent name="Iphone 11" price={30} hasDiscount={true} newPrice={20}></VideoComponent>
                    <VideoComponent name="Xiami 12" price={30} hasDiscount={true} newPrice={20}> </VideoComponent>
                    <VideoComponent name="Note 10" price={30} hasDiscount={true} newPrice={20} ></VideoComponent>
            </TransitionGroup>

        </div>

);
};

export default VideosContainer