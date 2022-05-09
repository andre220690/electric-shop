import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cl from './style/UI.module.css'

export default function InputSearth({fieldSearth, setFieldSearth}) {
  return (
    <Box
      className={cl.boxSearth}
      
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className={cl.fieldSearth} style={{width: '100%'}} id="outlined-basic" value={fieldSearth} onChange={(e)=>setFieldSearth(e.target.value)} label="Поиск" variant="outlined" />
    </Box>
  );
}