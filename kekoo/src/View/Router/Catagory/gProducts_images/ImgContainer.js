import React from 'react'
import "./ImgContainer.css";
import ImageComponent from './Componenties/ImageComponent';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ImgContainer = props => {
    return (
        <div>
            <TransitionGroup className="showimages">
                    <ImageComponent name={"Note 7"} price={30} hasDiscount={true} newPrice={20}></ImageComponent>
                    <ImageComponent name={"Iphone 11"} price={230} hasDiscount={false} newPrice={0}></ImageComponent>
                    <ImageComponent name={"Xiami 12"} price={140} hasDiscount={true} newPrice={80}> </ImageComponent>
                    <ImageComponent name={"Note 10"} price={90} hasDiscount={false} newPrice={20} ></ImageComponent>
            </TransitionGroup>

        </div>

);
};

export default ImgContainer