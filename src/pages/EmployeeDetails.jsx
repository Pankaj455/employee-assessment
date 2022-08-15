import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom'

const rows = [
  {
      id: 'first_name',
      label: 'First Name'
  },
  {
      id: 'last_name',
      label: 'Last Name'
  },
  {
      id: 'date_of_birth',
      label: 'Date of Birth'
  },
  {
      id: 'address',
      label: 'Address'
  },
  {
      id: 'date_of_joining',
      label: 'Date of Joining'
  },
  {
      id: 'salary',
      label: 'Salary'
  },
  {
      id: 'designation',
      label: 'Designation'
  },
  ]

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#00000008',
    },
    // hide last border
    '& td, & th': {
      border: 'none',
    },
  }));

function EmployeeDetails() {
  const location = useLocation()
  const {employee} = location.state

  return (
    <div className='App details'>
      <Typography variant="h4" component="div" sx={{marginBottom: 5}}>Employee Details</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: '0 auto' }}>
        <Table aria-label="simple table">
          <TableBody>
            {
              rows
                .map((row) => {
                  return  <StyledTableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th">
                        {row.label}
                      </StyledTableCell>
                      <StyledTableCell>{employee[row.id]}</StyledTableCell>
                    </StyledTableRow>
                })
              
            }
          </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default EmployeeDetails