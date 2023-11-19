import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
function SortableTable({ columns, data }) {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' })
    const [arrowSign, setArrowSign] = useState(false)
    let sortedData = data
    if (sortConfig.key && sortConfig.direction) {
        sortedData = [...sortedData].sort((a, b) => {
            if (sortConfig.direction === 'asc') {
                if (a[sortConfig.key] < b[sortConfig.key]) return -1
                if (a[sortConfig.key] > b[sortConfig.key]) return 1
                return 0
            }
            if (sortConfig.direction === 'desc') {
                if (a[sortConfig.key] > b[sortConfig.key]) return -1
                if (a[sortConfig.key] < b[sortConfig.key]) return 1
                return 0
            }
            return 0
        })
    }

    const requestSort = (key) => {
        let direction = 'asc'
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    return (
        <TableContainer component={Paper} elevation={4}>
            <Table sx={{ minWidth: 650 }} aria-label='sortable table'>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.key}
                                onClick={() => requestSort(column.key)}
                                sx={{
                                    cursor: 'pointer',
                                }}
                            >
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    {column.label}

                                    <Stack sx={{ opacity: 0.6 }}>
                                        {sortConfig.key === column.key && (
                                            <span>
                                                {sortConfig.direction ===
                                                'asc' ? (
                                                    <ExpandMoreOutlinedIcon />
                                                ) : (
                                                    <ExpandLessOutlinedIcon />
                                                )}
                                            </span>
                                        )}
                                    </Stack>
                                </Stack>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            {columns.map((column) => (
                                <TableCell key={column.key} align='right'>
                                    {row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SortableTable
