import * as React from 'react';
import Button from '@mui/material/Button';
import cl from './style/UI.module.css'

export default function ButtonCatalog({showCatalog}) {
  return (
    <Button className={cl.btnCatalog} variant="contained" onClick={showCatalog} disableElevation>
      Каталог
    </Button>
  );
}