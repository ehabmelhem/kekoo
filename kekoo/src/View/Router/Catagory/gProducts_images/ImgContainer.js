import React from 'react'
import "./ImgContainer.css";
import ImageComponent from './Componenties/ImageComponent';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ImgContainer = props => {
    return (
        <div>
            <TransitionGroup className="showimages">
                    <ImageComponent name="Note 7" price="30$"></ImageComponent>
                    <ImageComponent name="Iphone 11" price="230$"></ImageComponent>
                    <ImageComponent name="Xiami 12" price="140$"> </ImageComponent>
                    <ImageComponent name="Note 10" price="90$" ></ImageComponent>
            </TransitionGroup>

        </div>

);
};

export default ImgContainer