import React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Header.css"

function Header() {
    return (
        <header id="header" class="header">
            <div class="container">
                <div class="header__logo">
                    {/* <a href="/">
                        <img src="/Images\frontend24-white-171x30.png" alt="" />
                    </a> */}
                </div>
                <form className="flex">
                    <input
                        autoFocus
                        placeholder="todoapp..."
                        type="text"
                    />
                    <IconButton
                        type="submit"
                    >
                        <SearchIcon />
                    </IconButton>
                </form>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
        </header>
    )
}

export default Header