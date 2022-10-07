import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <>
      <form action="" className="footer-bg">
        <Box className="containerForm" component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
          <div className="containerInput">
            <div className="input1">
              <label htmlFor="Email">Email</label>
              <TextField type="email" label="Email Address" id="Email" size="small"/>
            </div>
            <div className="input1">
              <label htmlFor="Name">Name</label>
              <TextField type="text" label="Full Name" id="Name" size="small"/>
            </div>
          </div>
          <div className="input1">
            <TextField type="text" label="Full Name" id="Name" size="small" fullWidth sx={{ m: 1 }} />
          </div>
        </Box>
      </form>
    </>
  )
}

export default Footer