import * as React from 'react'
import "./CommentArea.css";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function CommentArea({openCommentArea, setOpenCommentArea}) {
    const [commenContent, setCommentContent] = React.useState('');
    const starTypeOnCommentInput = (e) => {
        setCommentContent(e.target.value)
    }
    const addCommentToCommentArea = (e) => {
        e.preventDefault();
        setCommentContent('');
    }
    const closeCommentArea = ()=>{
        setOpenCommentArea(false);
    }
    return (
        <div className='comment_area'>
            <div className="comment_area_content">
                <IconButton className='comments_area_close_icon' onClick={closeCommentArea}>
                    <CloseIcon/>
                </IconButton>
                <form className='comments__form'>
                    <input
                        value={commenContent}
                        onChange={starTypeOnCommentInput}
                        type="text" placeholder='comment...' />
                    <IconButton className={commenContent && 'comment_area_add__comment'} onClick={addCommentToCommentArea} 
                        disabled={!commenContent}  type='submit'>
                        <AddIcon />
                    </IconButton>
                </form>
            </div>
            Comments
        </div>
    )
}

export default CommentArea