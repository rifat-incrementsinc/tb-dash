import React from 'react'
import { Box, Pagination } from '@mui/material'
import Paper from '@mui/material/Paper'

const TablePaginate = ({ totalPages, currentPage, handlePageChange }) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    return (
        <Paper
            elevation={6}
            sx={{
                display: 'flex',
                justifyContent: 'end',
                padding: '15px 60px',
            }}
        >
            <Pagination
                count={totalPages}
                page={currentPage}
                showFirstButton
                showLastButton
                shape='rounded'
                color={'primary'}
                onChange={(e, page) => handlePageChange(e, page)}
            />
        </Paper>
    )
}

export default TablePaginate
