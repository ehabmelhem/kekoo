import React from 'react'
import "./CommentArea.css";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function CommentArea() {
    return (
        <div className='comment_area'>
            <div className="comment_area_content">
                <form className='comments__form'>
                    <input type="text"  placeholder='comment...'/>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </form>
            </div>
            Comments
        </div>
    )
}

export default CommentArea