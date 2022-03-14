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
import useDoubleClick from "../hooks/useDoubleClick"
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

function Video({ url }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [openCommentArea, setOpenCommentArea] = React.useState(false);
  const [toggle, setToggle] = React.useState(true)
  const [playVideo, setPlayVideo] = React.useState(false);
  const videoRef = React.useRef();
  const onClickVideoCounter = React.useRef(0);
  const timerVideoClick = React.useRef(null);
  const oneClickTimer = React.useRef(null);

  const [waitingClick, setWaitingClick] =
    React.useState(null);
  const [lastClick, setLastClick] = React.useState(0);
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
  const onClickVideoHandler = (e) => {
    let isDoubleClickFlag = false;
    const isDoubleClick = onClickVideoCounter.current + 1 === 2;
    const timerIsPresent = timerVideoClick.current;

    if (timerIsPresent && isDoubleClick) {
      clearTimeout(timerVideoClick.current);
      timerVideoClick.current = null;
      onClickVideoCounter.current = 0;
      console.log("doubleClick")
      isDoubleClickFlag = true;
    }
    if (!timerIsPresent) {
      onClickVideoCounter.current = onClickVideoCounter.current + 1;
      const timer = setTimeout(() => {
        clearTimeout(timerVideoClick.current);
        timerVideoClick.current = null;
        onClickVideoCounter.current = 0;
      }, 200)
      console.log("single click")

      timerVideoClick.current = timer;
    }
    if (playVideo) {
      videoRef.current.pause();
      setPlayVideo(false)
      // videoRef.current.currentTime = 0;
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
    console.log("I'm on double click on video")
    setIsLiked(!isLiked)
  }
  const touch = (e)=>{
    console.log(e.touches, e.type)
  }
  return (
    <div className='video' >

      <video playsInline autoPlay ref={videoRef}  onClick={onClickVideoHandler} className='video__player'
        loop src={url}></video>

      <VideoHeader />


// double click for like ..:
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