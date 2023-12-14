import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Typography,
    Box,
    Paper,
    Button,
    Checkbox,
    InputAdornment,
    IconButton,
} from '@mui/material'
import Stack from '@mui/material/Stack'
import { useForm, Controller } from 'react-hook-form'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import { Link } from 'react-router-dom'
import bgImage from '../../assets/bg_tb.png'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import MyLoadingButton from '../../components/shared/MyLoadingButton.jsx'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined.js'
import LoadingButton from '@mui/lab/LoadingButton'
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setButtonLoading(true)
        console.log(data)
        setTimeout(() => {
            setButtonLoading(false)
        }, 8000)
    }

    return (
        <Stack
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Grid container>
                {/* Left Side */}
                <Grid item xs={12} sm={6}></Grid>

                {/* Right Side */}
                <Grid
                    item
                    md={6}
                    lg={6}
                    xs={12}
                    sm={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        transition: 'height 5s ease-in-out',
                    }}
                >
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '450px',
                            transition: 'height 5s ease-in-out',
                        }}
                    >
                        <Stack
                            component={Paper}
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                                padding: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <Typography
                                variant='captionLarge'
                                color='textPrimary'
                                textAlign='left'
                                sx={{ mb: '16px' }}
                            >
                                Sign in
                            </Typography>
                            <Typography
                                variant='bodyLarge'
                                textAlign='left'
                                sx={{
                                    mb: '16px',
                                }}
                            >
                                Securely access your account and manage your
                                tenders with a single sign-in.
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div style={{ marginBottom: '10px' }}>
                                    <Typography variant={'bodyMedium'}>
                                        Email Address *
                                    </Typography>
                                    <Controller
                                        name='email'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                                sx={{ mt: '8px' }}
                                                fullWidth
                                                placeholder={
                                                    'eg. johndoe@example.com'
                                                }
                                                {...field}
                                                error={!!errors.email}
                                                helperText={
                                                    errors.email
                                                        ? 'Email is required'
                                                        : ''
                                                }
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position='start'>
                                                            <EmailOutlinedIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </div>

                                <div style={{ marginBottom: '10px' }}>
                                    <Typography variant={'bodyMedium'}>
                                        Password *
                                    </Typography>
                                    <Controller
                                        name='password'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                                sx={{ mt: '8px' }}
                                                fullWidth
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder={
                                                    'Enter your password'
                                                }
                                                {...field}
                                                error={!!errors.password}
                                                helperText={
                                                    errors.password
                                                        ? 'Password is required'
                                                        : ''
                                                }
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position='start'>
                                                            <KeyOutlinedIcon />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                onClick={
                                                                    handleTogglePasswordVisibility
                                                                }
                                                            >
                                                                {showPassword ? (
                                                                    <Visibility />
                                                                ) : (
                                                                    <VisibilityOff />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </div>

                                <LoadingButton
                                    loading={buttonLoading}
                                    loadingPosition='center'
                                    variant='contained'
                                    sx={{
                                        mt: 3,
                                        color: 'textPrimary',
                                        width: '100%',
                                        height: '40px',
                                        textTransform: 'none',
                                        '&.Mui-disabled': {
                                            background: '#FFCD19',
                                        },
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                        },
                                    }}
                                    type='submit'
                                >
                                    Sign in
                                </LoadingButton>
                            </form>
                            <div
                                style={{
                                    textAlign: 'center',
                                    marginTop: '15px',
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Typography
                                        variant={'bodyLarge'}
                                        color={'textSecondary'}
                                    >
                                        Don't have an account?{' '}
                                        <Link
                                            to={'/signup'}
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: 'black',
                                            }}
                                        >
                                            Signup
                                        </Link>
                                    </Typography>
                                </div>
                                <div>
                                    <Link
                                        to='/forgot-password'
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            variant={'bodyLarge'}
                                            color={'textSecondary'}
                                            sx={{
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            Forgot My Password
                                        </Typography>
                                    </Link>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Login
