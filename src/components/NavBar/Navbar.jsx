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
        main: '#A3A3A3'
      }
    }
});

const Navbar = () => {

  return (
    <nav className='navBar'>
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className='title'
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
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