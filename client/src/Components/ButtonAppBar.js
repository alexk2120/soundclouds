import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
;
// edit color and styling add Login button
function ButtonAppBar(){

  return (
    <Box sx={{ operate: 1, color: "grey" }}>
      <AppBar position="sticky">
        <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Louder Cloud
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar
