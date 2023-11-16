import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Typography } from '@mui/material'

const styles = theme => ({
    disabledButton: {
        backgroundColor: '#E0E0E0' || 'red'
    }
});
const MyLoadingButton = ({  buttonLoading, handleClick, text}) => {
    return (
            <LoadingButton
                loading={buttonLoading}
                onClick={handleClick}
                loadingPosition="start"
                startIcon={<DoneOutlinedIcon />}
                variant="contained"
                disableElevation
                sx={{
                    color: "textPrimary",
                    width: '118px',
                    height: '40px',
                    textTransform: 'none',
                    borderRadius: '100px',
                    "&.Mui-disabled": {
                        background: "#FFCD19",
                        color: "textPrimary"
                    },
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                    <Typography variant="bodyLarge" >{text}</Typography>
            </LoadingButton>
    )
}

export default MyLoadingButton