import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import MyLoadingButton from '../shared/MyLoadingButton.jsx'
import AddButton from '../shared/AddButton.jsx'
import SearchBar from '../shared/SearchBar.jsx'
import TestTable from '../shared/testTable.jsx'
import Switch from '../shared/Switch.jsx'
import TablePaginate from '../shared/TablePaginate.jsx'

const Test = () => {
    const [buttonLoading, setButtonLoading] = useState(false)
    const [searchText, setSearchText] = useState()
    const handleClick = () => {
        setButtonLoading(true)
        setTimeout(() => {
            setButtonLoading(false)
        }, 8000)
    }

    const handleAdd = () => {
        console.log('🚀~ Test:19 ~  add button click')
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        console.log('🚀~ Test:23 ~  searchText', searchText)
        console.log('🚀~ Test:30 ~ currentPage', currentPage)
    }, [searchText, currentPage])

    const handlePageChange = (event, value) => {
        setCurrentPage(value)
    }

    return (
        <Grid container style={{ height: '100vh', width: '100vw' }}>
            <Grid item xs={4}>
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    {/* Buttons */}
                    <MyLoadingButton
                        buttonLoading={buttonLoading}
                        handleClick={handleClick}
                        text={'Save'}
                    />
                    <AddButton handleClick={handleAdd} />
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SearchBar setSearchText={setSearchText} searchText={''} />
                </div>
            </Grid>
            <Grid item xs={4}>
                {/* Content for the second column */}
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <TestTable />
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Switch />
                </div>
            </Grid>
            <Grid item xs={4}>
                {/* Content for the third column */}
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TablePaginate
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        height: '50%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Column 3, Row 2
                </div>
            </Grid>
        </Grid>
        // <Stack>
        //
        //     <MyLoadingButton buttonLoading={buttonLoading} handleClick={handleClick} text={'Save'}/>
        // </Stack>
    )
}

export default Test
