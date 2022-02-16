import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { height } from '@mui/system';


function ButtonAppBar(){

  return (
    <Box sx={{ }}>
      <AppBar position="center" sx={{ bgcolor: "#242424", height: 50 }} >
        <Toolbar> 
       <Typography variant="h6" component="div" sx={{ flexGrow: 10, color: "#e65100"  }}>
          LouderCloud
          </Typography>
          <Button  sx={{color: "#e65100"}}> Sign In</Button>
          
          {/* / <Button  sx={{color: "#e65100"} } >Sign Up</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar
