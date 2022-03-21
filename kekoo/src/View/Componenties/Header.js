import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import "./Header.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = React.useState('')
    const onClickSearchHandler = (e) => {
        e.preventDefault();
        setSearchInput("");
    }

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleRedirectRouterImages = ()=> {
        handleClose();
        navigate('/gimages');
    }
    const handleRedirectRouterVideos = ()=> {
        handleClose();
        navigate('/gvideos');
    }
    const handleRedirectRouterProfile = ()=> {
        handleClose();
        navigate('/profile');
    }
    const handleRedirectRouterHome = ()=> {
        handleClose();
        navigate('/');
    }

    return (
        <header id="header" className="header">
            <div className="container">
                <div className="header__logo">
                    {/* <a href="/">
                        <img src="/Images\frontend24-white-171x30.png" alt="" />
                    </a> */}
                </div>
                <center>

                    <form className="flex">
                    <IconButton
                            disabled={!searchInput}
                            onClick={onClickSearchHandler}
                            type="submit"
                        >
                            <SearchIcon />
                        </IconButton>
                        <input
                            onChange={onChangeSearchInput}
                            placeholder="search..."
                            type="text"

                        />
                        <IconButton className='header__mic__icon'>
                            <MicIcon fontSize="large"/>
                        </IconButton>
                        {/* <div className="pipline"></div> */}
               
                    </form>
                </center>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleRedirectRouterHome}>Home</MenuItem>
                    <MenuItem onClick={handleRedirectRouterVideos}>Videos Category</MenuItem>
                    <MenuItem onClick={handleRedirectRouterImages}>Images Category</MenuItem>
                    <MenuItem onClick={handleRedirectRouterProfile}>Profile</MenuItem>

                </Menu>


            </div>
        </header>
        
    )
}

export default Header