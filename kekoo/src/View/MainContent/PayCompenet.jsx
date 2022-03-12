import React from 'react'
import "./PayCompenet.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function PayCompenet() {
    return (
        <Tooltip title="Payment">
            <IconButton className='pay_button'><AddShoppingCartIcon /></IconButton>
        </Tooltip>

    )
}

export default PayCompenet