import React from 'react'
import Row from '../components/Row'

function EmployeesTree({data, managerId=""}) {
    const employeesArray = data.filter(employee => employee.manager_id === managerId)
    if(employeesArray.length === 0) return null
  return (
    <>
        {
            employeesArray.map(employee => {
                return <Row key={employee.id} employee={employee}>
                    <EmployeesTree data={data} managerId={employee.id} />
                </Row>
            })
        }
    </>
  )
}

export default EmployeesTree