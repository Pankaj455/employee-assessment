import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function TableHeader() {
  return (
    <div className='table-header'>
      <Search />
      <Link to="/hierarchy">Employees Hierarchy</Link>
    </div>
  )
}

export default TableHeader