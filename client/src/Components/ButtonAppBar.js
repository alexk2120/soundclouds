import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';


function ButtonAppBar(){

  return (
    <Box sx={{ }}>
      <AppBar position="center" sx={{ bgcolor: "#242424" }} >
        <Toolbar>
       <Typography variant="h5" component="div" sx={{ flexGrow: 10, color: "#e65100"  }}>
            My LouderCloud
          </Typography>
          <Button sx={{color: "#e65100", }}>  Signed in: ALEX</Button>
          
          {/* / <Button  sx={{color: "#e65100"} } >Sign Up</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar
