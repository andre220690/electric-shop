import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonGreen({click, value}) {
  return (
      <Button style={{margin: 2}} onClick={click} variant="contained" color="success">
        {value}
      </Button>

  );
}