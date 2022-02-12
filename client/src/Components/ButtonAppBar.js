import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 
// edit color and styling add Login button
function ButtonAppBar() {
return (
    <Box sx={{ operate: 1 }}>
      <AppBar position="center">
        <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SoundClouds
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar
