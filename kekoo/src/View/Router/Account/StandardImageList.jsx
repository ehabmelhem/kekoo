import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./StandardImageList.css";
import VideoModal from './Componeneties/VideoModal';
import VideoUrl from "../../../Videos/download.mp4"; 

function Card({src, open, setOpen,index, setIndex }){
    const videoRef = React.useRef(null);
    const onClickVideoHandler = ()=>{
        videoRef.current.pause();
        setIndex(index);
        setOpen(true)
    }
    const onVideoHoverHandler = ()=>{
        videoRef.current.play();
    }
    const onMouseLeaveHandler = ()=>{
        console.log(videoRef)
        videoRef.current.pause();
    }
    return(
        <div className="profile__page__video__card">
            <video onClick={onClickVideoHandler} onMouseLeave={onMouseLeaveHandler} onMouseEnter={onVideoHoverHandler} playsInline muted="muted"  loop ref={videoRef} src={src}></video>
        </div>
    );
}
export default function StandardImageList() {
    const [open, setOpen]=React.useState(false)
    const [StateIndex,setIndex] = React.useState(-1);
  return (
      <div className='profile__name__video__card__flex'>
          {
              itemData.map((item,index)=>(
                  <div>
                <Card index={index} open={open} setOpen={setOpen} setIndex={setIndex} src={item.img}/>
                <VideoModal setIndex={setIndex} index={StateIndex} currentIndex={index} open={open} setOpen={setOpen} url={item.img}/>
        </div>

        ))
            
    }
          </div>
  );
}

const itemData = [
  {
    img: VideoUrl,
    title: 'Breakfast',
  },
  {
    img: VideoUrl,
    title: 'Burger',
  },
  {
    img: VideoUrl,
    title: 'Camera',
  },
  {
    img: VideoUrl,
    title: 'Coffee',
  },
  {
    img: VideoUrl,
    title: 'Hats',
  },
  {
    img: VideoUrl,
    title: 'Honey',
  },
  {
    img: VideoUrl,
    title: 'Basketball',
  },
  {
    img: VideoUrl,
    title: 'Fern',
  },
  {
    img: VideoUrl,
    title: 'Mushrooms',
  },
  {
    img: VideoUrl,
    title: 'Tomato basil',
  },
  {
    img: VideoUrl,
    title: 'Sea star',
  },
  {
    img: VideoUrl,
    title: 'Bike',
  },
];