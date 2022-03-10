import React from 'react'
import "./VedioHeader.css"
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
  
function VedioHeader() {
    return (
        <div className='vedio__header'>
            <Tooltip title="Ehab Melhem">
                <IconButton
                    size="small"
                    aria-haspopup="true"
                >
                    {/* Avatar for the company */}
                    <Avatar sx={{ width: 60, height: 60 }}  {...stringAvatar('Ehab Melhem')} />
                </IconButton>
            </Tooltip>

            <div className="vedioheader__content">
                my vedio content
            </div>
        </div>
    )
}

export default VedioHeader