import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Header.css"

function Header() {
    const [searchInput,setSearchInput]=React.useState('')
    const onClickSearchHandler = (e)=>{
        e.preventDefault();
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
                    <input
                        placeholder="search..."
                        type="text"

                    />
                    <IconButton
                    onClick={onClickSearchHandler}
                        type="submit"
                    >
                        <SearchIcon />
                    </IconButton>
                </form>
                </center>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
        </header>
    )
}

export default Header