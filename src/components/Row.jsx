import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Row({employee, children}) {
  return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography style={{textAlign: 'left'}}>{`${employee.first_name} ${employee.last_name}`}</Typography>
                    <Typography variant='caption' style={{textAlign: 'left'}}>{employee.designation}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails style={{marginLeft: 10, padding: "0 0 0 10px"}}>
            {children}
            </AccordionDetails>
        </Accordion>
  )
}

export default Row