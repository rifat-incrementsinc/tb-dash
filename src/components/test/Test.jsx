import React, { useEffect, useState } from 'react'
import {
    Checkbox,
    FormControl,
    Grid,
    LinearProgress,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
} from '@mui/material'
import MyLoadingButton from '../shared/MyLoadingButton.jsx'
import AddButton from '../shared/AddButton.jsx'
import SearchBar from '../shared/SearchBar.jsx'
import TestTable from '../shared/testTable.jsx'
import Switch from '../shared/Switch.jsx'
import TablePaginate from '../shared/TablePaginate.jsx'
import SortableTable from '../shared/SortableTable.jsx'
import Switches from '../shared/Switches.jsx'
import FormControlLabel from '@mui/material/FormControlLabel'
import { toast } from 'react-toastify'
import Stepper from '../shared/Stepper.jsx'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import moment from 'moment/moment.js'
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
        toast.success('🦄 Wow so easy!')
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        // console.log('🚀~ Test:23 ~  searchText', searchText)
        // console.log('🚀~ Test:30 ~ currentPage', currentPage)
    }, [searchText, currentPage])

    const handlePageChange = (event, value) => {
        setCurrentPage(value)
    }

    const columns = [
        { label: 'Dessert', key: 'name' },
        { label: 'Calories', key: 'calories' },
        { label: 'Fat (g)', key: 'fat' },
        { label: 'Carbs (g)', key: 'carbs' },
        { label: 'Protein (g)', key: 'protein' },
    ]

    const data = [
        {
            name: 'Frozen yoghurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
        },
        {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 24,
            protein: 6.0,
        },
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
        },
    ]

    const [switchValue, setSwitchValue] = useState(true)
    console.log('🚀~ Test:77 ~ ', switchValue)
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

                    <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} />
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
                    {/*<Switch />*/}
                    <Switches
                        switchValue={switchValue}
                        setSwitchValue={setSwitchValue}
                    />
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel
                                value='male'
                                control={<Radio />}
                                label='Purush'
                            />
                            <FormControlLabel
                                value='mohila'
                                control={<Radio />}
                                label='Women'
                            />
                        </RadioGroup>
                    </FormControl>
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
                    <SortableTable columns={columns} data={data} />
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
