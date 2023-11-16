import React from 'react';
import { InputAdornment,InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
const styles = theme => ({
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
    }
});
const SearchBar = ({ setSearchText, searchText }) => {
    return (

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '50px' }}
            elevation={0}
        >

            <InputBase
                sx={{ boxShadow: 'inset 0px 10px 150px 50px rgba(0, 0, 0, 0.05)', width: '100%',borderRadius: '50px' , padding: '8px 20px' }}
                placeholder="Search users"
                defaultValue={searchText}
                inputProps={{ 'aria-label': 'search google maps' }}
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
                onChange={(event) => {
                    setSearchText(event.target.value);
                }}
            >

            </InputBase>

        </Paper>
    );
};
export default SearchBar;