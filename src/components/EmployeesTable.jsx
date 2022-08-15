import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TableHeader from './TableHeader';
import Loader from './Loader';
import { Link } from "react-router-dom";
import { useEmployeeContext } from '../context/DataProvider';

  
  const columns = [
    {
        id: 'id',
        label: 'ID'
    },
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
        '&:nth-of-type(odd)': {
          backgroundColor: '#00000008',
        },
        // hide last border
        '& td': {
          border: 'none',
        },
        // for sticky header
        '& th': {
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
        },
      }));
      


function EmployeesTable() {
    const {employees, page, setPage} = useEmployeeContext()
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        JSON.stringify(sessionStorage.setItem('page', newPage))
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  return (
    <>
        {
            employees.length !== 0 ?
            <>
                <TableHeader />
                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column) => {
                                    return <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            employees
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((employee) => (
                                <StyledTableRow
                                    key={employee.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                {
                                    columns.map((column) => {
                                        const value = employee[column.id]
                                        return <StyledTableCell key={column.id}>
                                                {
                                                    column.id === 'id' 
                                                    ? <Link to={`/details/${employee.first_name}`} state={{employee}}>{value}</Link>
                                                    : value
                                                }
                                            </StyledTableCell>
                                    })
                                }
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={employees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> 
        </>: <Loader />
        }
    </>
  )
}

export default EmployeesTable