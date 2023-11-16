import React from 'react'
import { Button,IconButton } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const AddButton = ({handleClick}) => {
    return (
        <Button
        onClick={handleClick}
        variant="contained"
        disableElevation
        sx={{
            minWidth: 'unset',
            minHeight: 'unset',
            borderRadius: '100%',
            color: 'textPrimary',
            backgroundColor: 'primary.main',
            width: '56px',
            height: '56px',
            '&:hover': {
                backgroundColor: 'primary.main',
            },

        }}
        >
            <AddOutlinedIcon/>
        </Button>
    )
}

export default AddButton