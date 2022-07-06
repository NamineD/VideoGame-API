import React from 'react'
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './Navbar.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#F9DFDC'
      }
    }
});

const Navbar = () => {

  return (
    <nav className='navBar'>
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to='/' className='navbar-logo'>
                            GAMES FOR GAMERS
                        </Link>
                    </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    </nav>
  )
}

export default Navbar