import * as React from 'react'
import "./Vedio.css"
import VedioHeader from './VedioHeader'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CommentArea from "./Comments/CommentArea"


function Vedio() {
  const [isLiked, setIsLiked] = React.useState(false);
  const [openCommentArea,setOpenCommentArea] = React.useState(false); 
  const addLike = () => {
    setIsLiked(!isLiked);
  }
  const clickOnCommentIcon = ()=>{
    setOpenCommentArea(true);
  }
  return (

    <div className='vedio'>
      <VedioHeader />
      this is out vedio
      <div className="vedio_side_bar">
        <IconButton onClick={addLike}>
          {
            !isLiked ?
              <FavoriteBorderIcon />
              :
              <FavoriteIcon />
          }
        </IconButton>
        <IconButton onClick={clickOnCommentIcon}>
          <AddCommentIcon/>
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>
      <div className="vedio_comment">
        {
          openCommentArea &&
          <CommentArea/>
        }
          {/* <CommentArea/> */}
          </div>
    </div>
  )
}

export default Vedio