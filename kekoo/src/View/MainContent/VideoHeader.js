import React from 'react'
import "./VideoHeader.css"
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
function VideoHeader( { isDisplayOnProfile}) {
    return (
        <div className='video__header'>
            {// { check if the video is showing of profile or showing on home 
      isDisplayOnProfile==false &&
            <Tooltip title="Ehab Melhem">
                <IconButton
                    size="small"
                    aria-haspopup="true"
                >
                    {/* Avatar for the company */}
                    <Avatar sx={{ width: 60, height: 60 }}  {...stringAvatar('Ehab Melhem')} />
                </IconButton>
            </Tooltip>
}
 {// { check if the video is showing of profile or showing on home 
      isDisplayOnProfile==false ?
            <div className="videoheader__content">
                my video content
            </div> : <h3></h3> }
        </div>
        
    )
}

export default VideoHeader