import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useEmployeeContext } from '../context/DataProvider';

function Search() {
    const {employees, setEmployees, fetchData, fetchEmployees} = useEmployeeContext()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const id = data.get('employee-id').toUpperCase()
        if(id.length === 0){
            if(employees.length <= 1)
                fetchEmployees()
            return
        }
        const employeesData = await fetchData()
        setEmployees(employeesData.filter(employee => employee.id === id))
      };
  return (
    <div className='search-form'>
        <Box component="form" onSubmit={handleSubmit}  sx={{ ml: 1 }}>
            <TextField
                margin="normal"
                id="employee-id"
                placeholder="Enter Employee ID"
                size='small'
                name="employee-id"
                autoComplete="off"
                autoFocus
                InputProps={{
                    endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                }}
            />
        </Box>
    </div>
  )
}

export default Search