import React, { useEffect, useRef, useState } from 'react'
import { Button, Typography, Box } from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
const FileUpload = ({ setSelectedFile, selectedFile, name }) => {
    const fileInputRef = useRef(null)

    const handleButtonClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }
    const trimFileName = (fileName) => {
        if (fileName.length > 20) {
            const trimmedName =
                fileName.substring(0, 20 / 2) +
                '...' +
                fileName.substring(fileName.length - 20 / 2)
            return trimmedName
        }
        return fileName
    }
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '4px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#707070',
                border: '0.3px solid #696969',
                mt: '8px',
            }}
        >
            <input
                type='file'
                accept='.jpg, .jpeg, .png, .webp'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                name={name}
            />
            <Typography>
                {selectedFile
                    ? trimFileName(selectedFile?.name)
                    : 'Select a file'}
            </Typography>
            <Button
                onClick={handleButtonClick}
                color='primary'
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <FileUploadOutlinedIcon />
            </Button>
        </Box>
    )
}

export default FileUpload
