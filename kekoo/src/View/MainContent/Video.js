import * as React from 'react'
import "./Video.css"
import VideoHeader from './VideoHeader'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CommentArea from "./Comments/CommentArea"
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PayCompenet from "./PayCompenet";
import ImageIcon from '@mui/icons-material/Image';
import Tooltip from '@mui/material/Tooltip';
import useElementOnScreen from "../hooks/useElementOnScreen";

import AnimationForLike from './Componenties/AnimationForLike'

const StyledGrid = styled.div`
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, 10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;

function Video({ index }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [openCommentArea, setOpenCommentArea] = React.useState(false);
  const [toggle, setToggle] = React.useState(true)
  const [playVideo, setPlayVideo] = React.useState(false);
  const videoRef = React.useRef();
  const addLike = () => {
    setIsLiked(!isLiked);
  }
  const clickOnCommentIcon = () => {
    setOpenCommentArea(true);
  }
  const onSuccess = () => {
    console.log('Yay! Swipe Success');
  }
  const handleShowImages = () => {

  }
  const onClickVideoHandler = () => {
    if (playVideo) {
      videoRef.current.pause();
      setPlayVideo(false)
      videoRef.current.currentTime = 0;
    }
    else {
      videoRef.current.play();
      setPlayVideo(true);
    }

  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef)

  React.useEffect(() => {
    if (isVisibile) {
      if (!playVideo) {
        console.log(videoRef)
        videoRef.current.play();
        setPlayVideo(true)

      }
    }
    else {
      if (playVideo) {
        videoRef.current.pause();
        setPlayVideo(false);
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVisibile])
 const doubleclickOnVideo = () => {
    setIsLiked(!isLiked)
  }

  return (

      <video ref={videoRef} onClick={onClickVideoHandler} className='video__player' loop src="https://v16-webapp.tiktok.com/988df1451c2d5c1d7d837e22d2e390ec/622eb936/video/tos/alisg/tos-alisg-pve-0037c001/2e465ff511ed4496a86d55e83a2e3d2a/?a=1988&br=890&bt=445&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThCMbvDXq&l=20220313214010010245040057048C972B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3c7ZzY6Zm4zOjMzODczNEApZjZlZmZpOjs2N2dkNTs0ZGdoM2gucjQwZmRgLS1kMS1zczIvYWNgYjYvMV4yNS82MzU6Yw%3D%3D&vl=&vr="></video>

      <VideoHeader />
 

// double click for like ..:
<div className='video' onDoubleClick={doubleclickOnVideo}> 
      <VideoHeader />
      {/* <AnimationForLike/> */}
      this is out video
      <div className="video_side_bar">
  
        <IconButton onClick={addLike}>
          {
            !isLiked ?
              <FavoriteBorderIcon />
              :
              <FavoriteIcon />
          }
        </IconButton>
        <IconButton onClick={clickOnCommentIcon}>
          <AddCommentIcon />
        </IconButton>
        {/* <Tooltip title="Show Image"> */}
        {/* <IconButton onClick={handleShowImages} className='video_image_icon'><ImageIcon /></IconButton> */}
        {/* </Tooltip> */}
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>

      <div className="video_comment">
        <TransitionGroup component={StyledGrid}>
          {
            openCommentArea &&
            // animation CSS for comment (open)
            <CSSTransition timeout={1000} classNames="transition">
              <CommentArea openCommentArea={openCommentArea} setOpenCommentArea={setOpenCommentArea} />
            </CSSTransition>
          }
        </TransitionGroup>

        {/* <CommentArea/> */}

        <div className="video_pay_place">
          {
            !openCommentArea &&
            <PayCompenet />
          }
        </div>
        {/* <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='SLIDE TO UNLOCK' /> */}
      </div>
    </div>
  )
}

export default Video