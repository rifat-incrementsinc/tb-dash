import React, { useState } from 'react'
import { Container } from '@mui/material'
import './Stepper.css'

const Stepper = ({ activeStep, handleStepClick }) => {
    return (
        <>
            <div className='steper'>
                <div className='steper1'>
                    <div
                        className='steperInsider'
                        style={{
                            width: activeStep === 2 ? '97%' : '32%',
                            backgroundColor:
                                activeStep === 2 ? '#FFCD19' : '#FFCD19',
                        }}
                    ></div>
                </div>
                <div
                    className='oneIconSteper'
                    onClick={() => handleStepClick(1)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor:
                            activeStep === 1 ? '#FFCD19' : '#FFCD19',
                    }}
                >
                    1
                </div>
                <div
                    className='twoIconSteper'
                    onClick={() => handleStepClick(2)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor:
                            activeStep === 2 ? '#FFCD19' : '#FFCD19',
                    }}
                >
                    2
                </div>
            </div>
        </>
    )
}

export default Stepper
