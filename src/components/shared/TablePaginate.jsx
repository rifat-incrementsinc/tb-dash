import React from 'react'
import { Pagination } from '@mui/material'

const TablePaginate = ({ totalPages, currentPage, handlePageChange }) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            showFirstButton
            showLastButton
            shape='rounded'
            color={'primary'}
            onChange={(e, page) => handlePageChange(e, page)}
        />
    )
}

export default TablePaginate
