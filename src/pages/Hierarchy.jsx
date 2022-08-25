import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import EmployeesTree from '../components/EmployeesTree'
import Loader from '../components/Loader';
import { useEmployeeContext } from '../context/DataProvider'

function Hierarchy() {
    const {fetchData} = useEmployeeContext()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchData()
        .then(employees => {
            const formattedData = employees.map(employee => {
                return {
                    ...employee,
                    hasEmloyeesUnder: employees.filter(e => e.manager_id === employee.id).length > 0
                }
            })

            setLoading(false)
            setData(formattedData)
        })
        .catch(err => {
            setLoading(false)
            console.log("Error: ", err)
        })
    }, [])
    
  return (
    <div className='App hierarchy'>
        <Typography variant="h4" component="div" sx={{marginBottom: 5}}>Employees Hierarchy</Typography>
        {
            !loading && data ?
                <EmployeesTree data={data}/>
                : <Loader />
        }
    </div>
  )
}

export default Hierarchy