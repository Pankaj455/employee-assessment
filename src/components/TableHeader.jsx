import React from 'react'
import Filter from './Filter'
import Search from './Search'

function TableHeader() {
  return (
    <div className='table-header'>
      <Filter />
      <Search />
    </div>
  )
}

export default TableHeader