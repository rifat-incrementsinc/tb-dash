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
} from '@mui/material'
import Stack from '@mui/material/Stack'
import stepperOne from '../../../assets/stepper_one.svg'
import FileUpload from '../../shared/FileUpload.jsx'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useForm, Controller } from 'react-hook-form'
const Signup = () => {
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
    const [selectedFile, setSelectedFile] = useState(null)
    const { reset, control, handleSubmit, register } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        console.log('🚀~ Signup:34 ~ ', typeof data)
        reset()
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
                            <Typography>Company Information</Typography>
                            <img src={stepperOne} />
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                                placeholder={'eg. Firstname'}
                                                {...field}
                                            />
                                        )}
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
                                            />
                                        )}
                                    />
                                </div>

                                <div style={{ marginBottom: '8px' }}>
                                    <Typography variant={'bodyMedium'}>
                                        Logo
                                    </Typography>
                                    {/*<FileUpload*/}
                                    {/*    name='logo'*/}
                                    {/*    selectedFile={selectedFile}*/}
                                    {/*    setSelectedFile={setSelectedFile}*/}
                                    {/*    control={control}*/}
                                    {/*/>*/}
                                    <Controller
                                        name='logo'
                                        control={control}
                                        defaultValue={null}
                                        render={({
                                            field: { onChange, onBlur, value },
                                        }) => (
                                            <FileUpload
                                                name='logo'
                                                selectedFile={value}
                                                setSelectedFile={onChange}
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
                                                        control={<Radio />}
                                                        label='Bangladesh'
                                                    />
                                                    <FormControlLabel
                                                        value='foreign'
                                                        control={<Radio />}
                                                        label='Foreign'
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        )}
                                    />
                                </div>
                                <button type='submit'>Submit</button>
                            </form>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Signup
