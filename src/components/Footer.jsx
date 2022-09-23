import React from 'react'
import '../style/home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
      <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <div>
          <TextField label="Email Address" id="outlined-size-small" size="small"/>
          <TextField label="Full Name" id="outlined-size-small" size="small"/>
        </div>
      </Box>
      </div>
    </>
  )
}

export default Footer