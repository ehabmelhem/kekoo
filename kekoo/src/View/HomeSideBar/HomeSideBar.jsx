import React from 'react'
import "./HomeSideBar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import IconButton from '@mui/material/IconButton';

function HomeSideBar() {
  return (
      <div className="side__bar">
    <div className='home__side__bar'>
        <IconButton>
            <HomeOutlinedIcon/>
        </IconButton>
        <IconButton>
            <AssignmentIndOutlinedIcon/>
        </IconButton>
        <IconButton>
            <LocalFireDepartmentOutlinedIcon/>
        </IconButton>
        <IconButton>
            <BookmarkAddedOutlinedIcon/>
        </IconButton>
        <IconButton>
            <DragIndicatorOutlinedIcon/>
        </IconButton>
    </div>
    </div>

  )
}

export default HomeSideBar