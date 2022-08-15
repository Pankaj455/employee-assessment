import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Search() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('employee-id'));
      };
  return (
    <div className='search-form'>
        <Box component="form" onSubmit={handleSubmit}  sx={{ ml: 2 }}>
            <TextField
                margin="normal"
                id="employee-id"
                placeholder="Enter Employee ID"
                size='small'
                name="employee-id"
                autoComplete="off"
                autoFocus
            />
        </Box>
    </div>
  )
}

export default Search