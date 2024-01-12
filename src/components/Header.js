import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div >
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} >
          <Toolbar>
          <ArticleIcon fontSize="large"></ArticleIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Docs App
            </Typography>
          </Toolbar>
        </Link>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header