import React from 'react'
import Lottie from 'react-lottie'
import { Button, Dialog, Stack, Typography } from '@mui/material'
import animationData from '../../assets/lottie/Registration Completed.json'
const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const SignupDialog = ({ dialogOpen, handleDialog }) => {
    const lottieStyles = {
        width: '80%',
        height: '80%',
    }
    return (
        <Dialog
            open={dialogOpen}
            onClose={handleDialog}
            maxWidth={'100%'}
            sx={{
                textAlign: 'center',
                '& .MuiDialog-paper': {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderRadius: '15px',
                    width: '1000px',
                    height: '732px',
                },
            }}
        >
            <Lottie options={defaultOptions} style={lottieStyles} />
            <Typography variant={'signSuccess'}>
                Registration completed successfully. Our team will reach out to
                you shortly.
            </Typography>
            <Typography variant={'signSuccess2'} sx={{ mt: 1 }}>
                Thank you for your interest!
            </Typography>
            <Stack direction={'row'} justifyContent={'end'} mr={10}>
                <Button
                    onClick={handleDialog}
                    variant={'contained'}
                    sx={{
                        borderRadius: '100px',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    }}
                >
                    Done
                </Button>
            </Stack>
        </Dialog>
    )
}

export default SignupDialog
