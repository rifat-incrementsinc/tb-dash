import React, { useState } from 'react'
import bgImage from '../../../assets/bg_tb.png'
import {
    Grid,
    TextField,
    Typography,
    Box,
    Paper,
    RadioGroup,
    Radio,
    FormControl,
    Button,
    Checkbox,
} from '@mui/material'
import Stack from '@mui/material/Stack'
import FileUpload from '../../shared/FileUpload.jsx'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useForm, Controller } from 'react-hook-form'
import SignupDialog from './SignupDialog.jsx'
import Stepper from '../../shared/Stepper.jsx'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const Signup = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [activeStep, setActiveStep] = useState(1)
    const [termsChecked, setTermsChecked] = useState(false)
    const {
        trigger,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const handleStepClick = async (step) => {
        if (step === 2) {
            const isValid = await trigger()

            if (!isValid) {
                return
            }
            setActiveStep(2)
        }
        setActiveStep(step)
    }

    const onSubmit = (data) => {
        if (!termsChecked) {
            toast.warn('You must accept the terms and conditions')
            return
        }
        console.log(data)
        console.log('🚀~ Signup:34 ~ ', typeof data)
        setDialogOpen(true)
        reset({
            businessAddress: '',

            companyName: '',
            logo: null,
            name: '',
            mobileNumber: '',
            email: '',
        })
    }
    const nextStep = async (data) => {
        const isValid = await trigger()

        if (!isValid) {
            return
        }
        setActiveStep(2)
    }

    return (
        <Stack sx={backgroundStyle}>
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
                                Signup
                            </Typography>
                            <Typography
                                variant='bodyLarge'
                                textAlign='left'
                                sx={{
                                    mb: '16px',
                                }}
                            >
                                Join our platform and create your account to
                                start exploring tender opportunities and
                                managing your tender submissions.
                            </Typography>
                            <Typography
                                variant={'titleMedium'}
                                sx={{ mb: '16px' }}
                            >
                                {activeStep === 2
                                    ? 'Contact Person'
                                    : 'Company Information'}
                            </Typography>

                            <Stepper
                                activeStep={activeStep}
                                handleStepClick={handleStepClick}
                            />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {activeStep === 1 && (
                                    <>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Company Name *
                                            </Typography>
                                            <Controller
                                                name='companyName'
                                                control={control}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. Increments Inc.'
                                                        }
                                                        {...field}
                                                        error={
                                                            !!errors.companyName
                                                        }
                                                        helperText={
                                                            errors.companyName &&
                                                            'Company name is required'
                                                        }
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Business Address *
                                            </Typography>
                                            <Controller
                                                name='businessAddress'
                                                control={control}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. House #23, Sector A, Uttara, Dhaka, Bangladesh'
                                                        }
                                                        {...field}
                                                        error={
                                                            !!errors.businessAddress
                                                        }
                                                        helperText={
                                                            errors.businessAddress
                                                                ? 'Business Address is required'
                                                                : ''
                                                        }
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: '8px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Logo
                                            </Typography>
                                            <Controller
                                                name='logo'
                                                control={control}
                                                defaultValue={null}
                                                render={({
                                                    field: {
                                                        onChange,
                                                        onBlur,
                                                        value,
                                                    },
                                                }) => (
                                                    <FileUpload
                                                        name='logo'
                                                        selectedFile={value}
                                                        setSelectedFile={
                                                            onChange
                                                        }
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                marginBottom: '10px',
                                                display: 'flex',
                                                direction: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'start',
                                                gap: '10px',
                                            }}
                                        >
                                            <Typography variant={'bodyMedium'}>
                                                Company Location *
                                            </Typography>

                                            <Controller
                                                name='companyLocation'
                                                control={control}
                                                defaultValue='bangladesh'
                                                render={({ field }) => (
                                                    <FormControl component='fieldset'>
                                                        <RadioGroup
                                                            row
                                                            {...field}
                                                            aria-label='companyLocation'
                                                        >
                                                            <FormControlLabel
                                                                value='bangladesh'
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label='Bangladesh'
                                                            />
                                                            <FormControlLabel
                                                                value='foreign'
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label='Foreign'
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                )}
                                            />
                                        </div>
                                        <Button
                                            variant='contained'
                                            sx={{ width: '100%' }}
                                            onClick={nextStep}
                                        >
                                            Next
                                        </Button>
                                    </>
                                )}
                                {activeStep === 2 && (
                                    <div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Name *
                                            </Typography>

                                            <Controller
                                                name='name'
                                                control={control}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. John Doe'
                                                        }
                                                        {...field}
                                                        error={!!errors.name}
                                                        helperText={
                                                            errors.name
                                                                ? 'Name is required'
                                                                : ''
                                                        }
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Designation *
                                            </Typography>

                                            <Controller
                                                name='designation'
                                                control={control}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. Senior Manager'
                                                        }
                                                        {...field}
                                                        error={
                                                            !!errors.designation
                                                        }
                                                        helperText={
                                                            errors.designation &&
                                                            'Designation is required'
                                                        }
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Mobile Number *
                                            </Typography>

                                            <Controller
                                                name='mobileNumber'
                                                control={control}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. 0123456789'
                                                        }
                                                        {...field}
                                                        error={
                                                            !!errors.mobileNumber
                                                        }
                                                        helperText={
                                                            errors.mobileNumber
                                                                ? 'Phone number is required'
                                                                : ''
                                                        }
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>
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
                                                    />
                                                )}
                                                rules={{ required: true }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'start',
                                                marginBottom: '15px',
                                            }}
                                        >
                                            <Checkbox
                                                checked={termsChecked}
                                                onChange={() =>
                                                    setTermsChecked(
                                                        !termsChecked
                                                    )
                                                }
                                                sx={{
                                                    width: '24px',
                                                    marginRight: '10px',
                                                }}
                                                checkedIcon={
                                                    <CheckBoxOutlinedIcon />
                                                }
                                            />
                                            <Typography
                                                variant={'termsandcondition'}
                                                sx={{ mt: 1 }}
                                            >
                                                I have read and understood the
                                                terms and condition. I agree all
                                                the terms & conditions of
                                                TenderBook.
                                            </Typography>
                                        </div>
                                        <Button
                                            variant='contained'
                                            sx={{
                                                width: '100%',
                                            }}
                                            type='submit'
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
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
                                        Already have an account?{' '}
                                        <Link
                                            to={'/login'}
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: 'inherit',
                                            }}
                                        >
                                            Login
                                        </Link>
                                    </Typography>
                                </div>
                                <div>
                                    <Link
                                        to='/test'
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
            <SignupDialog
                dialogOpen={dialogOpen}
                handleDialog={() => {
                    setDialogOpen(false)
                }}
            />
        </Stack>
    )
}

export default Signup
