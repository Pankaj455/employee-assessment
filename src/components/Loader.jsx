import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function Loader() {
  return (
    <div className='App loader'>
        <CircularProgress />
        <Typography variant='h5'>Fetching...</Typography>
    </div>
  )
}

export default Loader