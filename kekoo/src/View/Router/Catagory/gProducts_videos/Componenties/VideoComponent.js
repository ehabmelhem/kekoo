import React from "react";
import styled from "styled-components";


const VideoComponent = props => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <h6>{props.name}</h6>
        <h4></h4>
        <div className="card-pill">{props.price}</div>
      </div>
    </div>
  );
};

export default VideoComponent;