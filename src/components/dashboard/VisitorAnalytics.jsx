import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Divider, FormControl, MenuItem, Select } from '@mui/material'
import VisitorsChart from './VisitorsChart.jsx'
import moment from 'moment'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

const VisitorAnalytics = () => {
    const [month, setMonth] = useState(moment().month() + 1)
    const [year, setYear] = useState(moment().year())
    const handleMonth = (event) => {
        setMonth(event.target.value)
    }
    const handleYear = (event) => {
        setYear(event.target.value)
    }
    return (
        <div
            style={{
                width: '100%',
                marginTop: '40px',
                borderRadius: '15px',
                backgroundColor: '#fff',
                boxShadow: '0px 1px 3px 0px #1B171E1A',
                marginBottom: '20px',
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} p={2}>
                <Typography variant={'bodyLarge'} color={'textSecondary'}>
                    Visitor Analytics
                </Typography>

                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    gap={2}
                >
                    <FormControl sx={{ minWidth: 120 }} size='small'>
                        <Select value={month} onChange={handleMonth}>
                            <MenuItem value={1}>January</MenuItem>
                            <MenuItem value={2}>February</MenuItem>
                            <MenuItem value={3}>March</MenuItem>
                            <MenuItem value={4}>April</MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>June</MenuItem>
                            <MenuItem value={7}>July</MenuItem>
                            <MenuItem value={8}>August</MenuItem>
                            <MenuItem value={9}>September</MenuItem>
                            <MenuItem value={10}>October</MenuItem>
                            <MenuItem value={11}>November</MenuItem>
                            <MenuItem value={12}>December</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120 }} size='small'>
                        <Select value={year} onChange={handleYear}>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                            <MenuItem value={2024}>2024</MenuItem>
                            <MenuItem value={2025}>2025</MenuItem>
                            <MenuItem value={2026}>2026</MenuItem>
                            <MenuItem value={2027}>2027</MenuItem>
                            <MenuItem value={2028}>2028</MenuItem>
                            <MenuItem value={2029}>2029</MenuItem>
                            <MenuItem value={2030}>2030</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>
            <Divider sx={{ width: '100%' }} />
            <Stack>
                <VisitorsChart />
            </Stack>
        </div>
    )
}

export default VisitorAnalytics
