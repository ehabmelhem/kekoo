import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./StandardImageList.css";
import VideoModal from './Componeneties/VideoModal';
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
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Breakfast',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Burger',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Camera',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Coffee',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Hats',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Honey',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Basketball',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Fern',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Mushrooms',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Tomato basil',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Sea star',
  },
  {
    img: 'https://v16-webapp.tiktok.com/80c1dd2c439be1039a1cc333baa1bd6d/62392932/video/tos/alisg/tos-alisg-pve-0037c001/2217c11491bc41e2b9378fa968fca252/?a=1988&br=4386&bt=2193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPOFMDXq&l=2022032119405301022310215214827FA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y8dzM6ZnFyOzMzODczNEApOjk2NjlmZGRpNzg5Zmg5ZWdfcDM1cjRvam9gLS1kMS1zczNhLmMyMDViMTBhNC42MS46Yw%3D%3D&vl=&vr=',
    title: 'Bike',
  },
];