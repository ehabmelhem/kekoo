import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./StandardImageList.css";
import VideoModal from './Componeneties/VideoModal';
function Card({src, open, setOpen}){
    const videoRef = React.useRef(null);
    const onClickVideoHandler = ()=>{
        videoRef.current.pause();
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
  return (
      <div className='profile__name__video__card__flex'>
          {
              itemData.map((item)=>(
                  <div>
                <Card open={open} setOpen={setOpen} src={item.img}/>
        <VideoModal open={open} setOpen={setOpen} url={item.img}/>
        </div>

        ))
            
    }
          </div>
  );
}

const itemData = [
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Breakfast',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Burger',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Camera',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Coffee',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Hats',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Honey',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Basketball',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Fern',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Mushrooms',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Tomato basil',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Sea star',
  },
  {
    img: 'https://v16-webapp.tiktok.com/49bd70ea7e908a05628fd517016c3125/62314860/video/tos/alisg/tos-alisg-pve-0037c001/071528be57b84f34a8f55be4f4036b06/?a=1988&br=1528&bt=764&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th3rKiDXq&l=20220315201544010245244176118B78B2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6Ojo6ZmhyOjMzODczNEApZzdlZTtlOjs4Nzw6MzNoO2dkci5rcjQwbGpgLS1kMS1zczRiLTU1MzY0YDMuMmEtXi46Yw%3D%3D&vl=&vr=',
    title: 'Bike',
  },
];