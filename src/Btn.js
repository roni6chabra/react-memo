import React from 'react';
import { Button } from '@material-ui/core';


function Btn({ handleClick, children }) {
  console.log(`%c Rendering button - ${children}`, 'color: #00c3ff');
  return (
    <Button onClick={handleClick} variant="contained" color="primary">
    {children}
  </Button>
  )
}

export default React.memo(Btn)