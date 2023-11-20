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
} from '@mui/material'
import Stack from '@mui/material/Stack'
import stepperOne from '../../../assets/stepper_one.svg'
import stepperTwo from '../../../assets/stepper_two.svg'
import FileUpload from '../../shared/FileUpload.jsx'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useForm, Controller } from 'react-hook-form'
import SignupDialog from './SignupDialog.jsx'

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
    const [stepTwo, setStepTwo] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const {
        trigger,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
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
    const toggleStep = () => {
        setStepTwo(!stepTwo)
    }
    const nextStep = async (data) => {
        const isValid = await trigger()

        if (!isValid) {
            return
        }
        setStepTwo(!stepTwo)
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
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '450px',
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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {!stepTwo && (
                                    <>
                                        <Typography variant={'titleMedium'}>
                                            Company Information
                                        </Typography>
                                        <img
                                            src={stepperOne}
                                            onClick={toggleStep}
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                        />
                                        <div style={{ marginBottom: '10px' }}>
                                            <Typography variant={'bodyMedium'}>
                                                Company Name *
                                            </Typography>

                                            <Controller
                                                name='companyName'
                                                control={control}
                                                defaultValue=''
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextField
                                                        sx={{ mt: '8px' }}
                                                        fullWidth
                                                        placeholder={
                                                            'eg. Firstname'
                                                        }
                                                        {...field}
                                                        error={
                                                            !!errors.companyName
                                                        }
                                                        helperText={
                                                            errors.companyName
                                                                ? 'Company name is required'
                                                                : ''
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
                                {stepTwo && (
                                    <>
                                        <Typography variant={'titleMedium'}>
                                            Contact Person
                                        </Typography>
                                        <img
                                            src={stepperTwo}
                                            onClick={toggleStep}
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                        />

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
                                                            errors.designation
                                                                ? 'Designation is required'
                                                                : ''
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
                                        <Button
                                            variant='contained'
                                            sx={{ width: '100%' }}
                                            type='submit'
                                        >
                                            Next
                                        </Button>
                                    </>
                                )}
                            </form>
                        </Stack>
                    </Box>
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
