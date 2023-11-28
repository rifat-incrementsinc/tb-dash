import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

const VisitorAnalytics = () => {
    return (
        <div
            style={{
                width: '100%',
                marginTop: '20px',

                borderRadius: '15px',
                backgroundColor: '#fff',
                boxShadow: '0px 1px 3px 0px #1B171E1A',
                height: '100%',
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} p={2}>
                <Typography variant={'bodyLarge'} color={'textSecondary'}>
                    Visitor Analytics
                </Typography>
                <Typography variant={'bodyLarge'} color={'textSecondary'}>
                    This Month
                </Typography>
            </Stack>
            <Divider sx={{ width: '100%' }} />
            <Stack></Stack>
        </div>
    )
}

export default VisitorAnalytics
