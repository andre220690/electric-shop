import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonBasket({click}) {
  return (
      <Button onClick={click} variant="contained" color="success">
        В корзину
      </Button>

  );
}