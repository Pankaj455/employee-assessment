import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Filter() {
  return (
    <Tooltip title="Filter">
        <IconButton>
            <FilterListIcon />
        </IconButton>
    </Tooltip>
  )
}

export default Filter