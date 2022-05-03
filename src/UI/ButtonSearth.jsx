import * as React from 'react';
import Button from '@mui/material/Button';
import cl from './style/UI.module.css'

export default function ButtonSearth({searth}) {
  return (
    <Button className={cl.btnSearth} style={{marginLeft: 20}} variant="contained" onClick={searth} disableElevation>
      Поиск
    </Button>
  );
}