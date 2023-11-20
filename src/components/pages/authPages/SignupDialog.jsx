import React from 'react'
import { Dialog, DialogTitle } from '@mui/material'

const SignupDialog = ({ dialogOpen, handleDialog }) => {
    return (
        <Dialog
            open={dialogOpen}
            onClose={handleDialog}
            maxWidth={'100%'}
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderRadius: '15px',
                    width: '1000px',
                    height: '732px',
                },
            }}
        >
            <DialogTitle>New Dialog</DialogTitle>
        </Dialog>
    )
}

export default SignupDialog
