import React from "react";
import styled from "styled-components";
import Divider from '@mui/material/Divider';


const VideoComponent = props => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <h6>{props.name}</h6>
        <h4></h4>
        <div className="card-pill">
          {
            props.hasDiscount &&
            <div className="discount_price_line">
              {`${props.price} `}
            </div>
          }
          {props.hasDiscount ? `${props.newPrice}` : props.price}$</div>
      </div>
    </div>
  );
};

export default VideoComponent;