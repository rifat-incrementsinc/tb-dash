import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import animationData from '../assets/lottie/error.json'
import Lottie from 'react-lottie'
const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}
const ErrorPage = () => {
    const lottieStyles = {
        width: '30%',
        height: '30%',
    }
    return (
        <div>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Lottie options={defaultOptions} style={lottieStyles} />
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
                <Typography variant={'displayMedium'} color='textPrimary'>
                    404 - PAGE NOT FOUND
                </Typography>

                <Typography
                    textAlign={'center'}
                    variant='titleLarge'
                    color='textSecondary'
                    fontSize={'28px'}
                >
                    The page you are looking for might be removed or temporary
                    unavailable.
                </Typography>
                <Link to='/admin/dashboard'>
                    <Button
                        variant='contained'
                        sx={{
                            width: '295px',
                            height: '56px',
                            marginTop: '28px',
                        }}
                    >
                        <Typography>Back to Home</Typography>
                    </Button>
                </Link>
            </Stack>
        </div>
    )
}

export default ErrorPage
